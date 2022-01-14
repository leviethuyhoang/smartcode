import { Fragment, useCallback, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { FastField, Field, Form, Formik } from "formik";
import Grid from "components/UI/Grid";
import InputField from "components/UI/Feild/InputField";
import TextField from "components/UI/Feild/TextField";
import Cell from "components/UI/Cell";
import Button from "components/UI/Button/Button";
import Card from "components/UI/Card";
import { Loading } from "assets/icons/Loading";
import contestApi from "api/contestApi";
import * as Yup from "yup";
import ReactSelect from "components/UI/Feild/ReactSelect";
import Switch from "components/UI/Switch";
import ConvertDate from "util/ConvertDate";
import problemApi from "api/problemApi";

const EditContestForm = (props) => {

  const parmas = useParams();
  const history = useHistory();


  const [ problemOptions, setProblemOption] = useState([]);
  const [detailContest, setDetailContest] = useState({
    id : "",
    title: "",
    isPublic: false,
    password: "",
    description: "",
    startTime: "",
    endTime : "",
    problemIds : [],
  });
console.log(detailContest)
  const fetchContest = useCallback(() => {
    contestApi.getOne(parmas.id)
    .then( res => {
      const config = {...res,
        endTime : ConvertDate.getDateTimeLocalInput(res.endTime),
        startTime : ConvertDate.getDateTimeLocalInput(res.startTime),
        problemIds : res.problemIds.map( item => item.id),
      }
      setDetailContest(config);
    })
    .catch( error => {
      console.log("error");
    })
  },[parmas.id])

  const fetchProblem = useCallback(() => {
      problemApi.admin.getMany()
      .then( res => {
        const configProblemOptions = res.results.map( item => { return {value : item.id, label : item.title}})
        setProblemOption(configProblemOptions);
      })
      .catch( error => {
        console.log("error",error)
      })
  },[])

  useEffect(() => {
    fetchProblem();
  },[fetchProblem])

  useEffect( () => {
    fetchContest();
  },[fetchContest])

  const validationSchema = Yup.object().shape({

    title: Yup.string().required('Bắt Buộc'),
    description: Yup.string().required('Bắt Buộc'),
    password: Yup.string().required('Bắt Buộc'),
    startTime : Yup.string().required('Bắt Buộc'),
    endTime: Yup.string().required('Bắt Buộc'),
    
  });

  const cancelHandler = () => {
    history.push("/admin/contest");
  };

  return (
    <Fragment>
        <Card>
          <Formik
            initialValues={detailContest}
            onSubmit={props.handleSubmit}
            validationSchema={validationSchema}
            enableReinitialize = {true}
          >
            {(formikProps) => {

              const { isSubmitting } = formikProps;

              return (
                <Fragment>
                    <Form>
                      <Grid>
                      <Cell width="4">
                        <FastField
                          name="title"
                          component={InputField}
                          label="Tên Kỳ Thi *"
                          placeholder="Nhập tên kỳ thi ..."
                        />
                      </Cell>
                      <Cell width="4">
                        <FastField
                          name="password"
                          component={InputField}
                          label="Mật Khẩu"
                          type="password"
                        />
                      </Cell>
                      <Cell width = "4">
                        <FastField
                          name="isPublic"
                          component={Switch}
                          
                          label="Công Khai"
                        />
                      </Cell>
                      <Cell width="4">
                        <FastField
                          name="startTime"
                          component={InputField}
                          label="Thời Gian Bắt Đầu *"
                          placeholder=""
                          type="datetime-local"
                        />
                      </Cell>
                      <Cell width="4">
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
