import { Fragment, useCallback, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { FastField, Field, Form, Formik } from "formik";
import Grid from "components/UI/Grid";
import InputField from "components/UI/Feild/InputField";
import TextField from "components/UI/Feild/TextField";
import Cell from "components/UI/Cell";
import Button from "components/UI/Button/Button";
import Card from "components/UI/Card";
import { useDispatch, useSelector } from "react-redux";
import { Loading } from "assets/icons/Loading";
import { contestAction } from "app/slice/contestSlice";
import Toastify from "components/UI/Notification/Toastify";
import contestApi from "api/contestApi";
import * as Yup from "yup";
import { GetProblem } from "app/slice/problemSlice";
import ReactSelect from "components/UI/Feild/ReactSelect";
import useHttp from "hooks/useHttp";

const EditContestForm = (props) => {

  const parmas = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const { SendRequest } = useHttp();

  const listContest = useSelector((state) => state.contest);
  const listProblem = useSelector(state => state.problem);

  const [ problemOptions, setProblemOption] = useState([]);
  const [initialValues, setInitialValues] = useState({
    id : "",
    title: "",
    password: "",
    description: "",
    startTime: "",
    endTime : " ",
    problemIds : [],
  });

  useEffect(() => {
    const contestEdit = listContest.data.find((item) => item.id.toString() === parmas.id.toString());
    const listProblemOfContest = contestEdit.problemIds.map( item => item.id)

    const dataConfig = {...contestEdit,
      startTime : contestEdit.startTime.split(':').slice(0,-1).join(":"),
      endTime : contestEdit.endTime.split(':').slice(0,-1).join(":"),
      problemIds : listProblemOfContest,
    }

    setInitialValues(dataConfig);
  }, [listContest.data, parmas.id]);

  // get all problem
  const fetchProblem = useCallback(() => {
    dispatch(GetProblem(SendRequest));
  },[SendRequest, dispatch])

    // get problem option
    useEffect(() => {
      if(listProblem.data === null){
        fetchProblem();
      } else {
        const options = listProblem.data.map( (problemItem) =>{ return {value : problemItem.id, label : problemItem.title}})
        setProblemOption(options);
      }
  
    },[fetchProblem, listProblem, listProblem.data])

  const validationSchema = Yup.object().shape({

    title: Yup.string().required('Bắt Buộc'),
    description: Yup.string().required('Bắt Buộc'),
    password: Yup.string().required('Bắt Buộc'),
    startTime : Yup.string().required('Bắt Buộc'),
    endTime: Yup.string().required('Bắt Buộc'),
    
  });

  const handleSubmit = (values , {setSubmitting}) => {

      const dataConfig = {
        id : values.id,
        title : values.title,
        description : values.description,
        password : values.password,
        startTime : values.startTime,
        endTime : values.endTime,
        problemIds : values.problemIds,
      }
      
      contestApi.editOne(dataConfig)
      .then(res => {
        dispatch(contestAction.editOne(values));
        Toastify('success', "CẬP NHẬT KỲ THI THÀNH CÔNG" )
      })
      .catch(error => {
        Toastify('error', "CẬP NHẬT KỲ THI THẤT BẠI" )
      })
      .finally(_ => {
        setSubmitting(false);
      })
  };

  const cancelHandler = () => {
    history.push("/admin/contest");
  };

  return (
    <Fragment>
        <Card>
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
            enableReinitialize = {true}
          >
            {(formikProps) => {

              const { isSubmitting } = formikProps;

              return (
                <Fragment>
                    <Form>
                      <Grid>
                        <Cell width="3">
                          <FastField
                            name="title"
                            component={InputField}
                            label="Tên Kỳ Thi"
                            placeholder="Nhập tên kỳ thi ..."
                          />
                        </Cell>
                        <Cell width="3">
                          <FastField
                            name="password"
                            component={InputField}
                            label="Mật Khẩu"
                            type="password"
                          />
                        </Cell>
                        <Cell width="3">
                          <FastField
                            name="startTime"
                            component={InputField}
                            label="Thời Gian Bắt Đầu"
                            placeholder=""
                            type="datetime-local"
                          />
                        </Cell>
                        <Cell width="3">
                          <FastField
                            name="endTime"
                            component={InputField}
                            label="Thời Gian Kết Thúc"
                            placeholder="Nhập tên kỳ thi ..."
                            type="datetime-local"
                          />
                        </Cell>

                        <Cell>
                          <FastField
                            name="description"
                            component={TextField}
                            label="Mô tả"
                            rows="5"
                          />
                        </Cell>
                        <Cell>
                          <Field 
                            name = "problemIds"
                            component = {ReactSelect}
                            options = {problemOptions}
                            isMulti = {true}

                            label = "Danh Sách Đề Thi"
                            placeholder = "Chọn Đề Thi"
                          />
                        </Cell>
                        <Cell>
                          <Grid>
                            <Cell width="6">
                              <Button
                                type="submit"
                                classes="btn btn-primary w-full h-10"
                              >
                                { isSubmitting ? <Loading/> : "Lưu"}
                              </Button>
                            </Cell>
                            <Cell width="6">
                              <Button
                                classes="btn btn-secondary w-full h-10"
                                onClick={cancelHandler}
                              >
                                HỦY
                              </Button>
                            </Cell>
                          </Grid>
                        </Cell>
                      </Grid>
                    </Form>
                </Fragment>
              );
            }}
          </Formik>
        </Card>
    </Fragment>
  );
};
export default EditContestForm;
