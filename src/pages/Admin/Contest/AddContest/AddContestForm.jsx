import { Fragment, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FastField, Field, Form, Formik } from "formik";
import { useHistory } from "react-router-dom";
import * as  Yup from 'yup';

import Grid from "components/UI/Grid";
import InputField from "components/UI/Feild/InputField";
import TextField from "components/UI/Feild/TextField";
import Cell from "components/UI/Cell";
import Button from "components/UI/Button/Button";
import Card from "components/UI/Card";
import contestApi from "api/contestApi";
import { contestAction, GetContest } from "app/slice/contestSlice";
import { Loading } from "assets/icons/Loading";
import Toastify from "components/UI/Notification/Toastify";
import ReactSelect from "components/UI/Feild/ReactSelect";
import { GetProblem } from "app/slice/problemSlice";
import useHttp from "hooks/useHttp";
import Switch from "components/UI/Switch";

const AddContestForm = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [addable, setAddable] = useState(true);
  const { SendRequest } = useHttp();

  const listContest = useSelector((state) => state.contest);
  const listProblem = useSelector(state => state.problem);

  const [ problemOptions, setProblemOption] = useState([]);

  const fetchContest = useCallback(() => {
    contestApi.getMany()
    .then((res) => {
      setAddable(false)
      dispatch(GetContest(res.results))
    })
    .catch(error => {
      setAddable(false)
      Toastify('error','Đã xãy ra lỗi');
      console.log("error",error)
    })

 },[dispatch])

  const fetchProblem = useCallback(() => {
    dispatch(GetProblem(SendRequest));
  },[SendRequest, dispatch])

  // get Contest
  useEffect(() => {
    if(listContest.data === null){
      fetchContest();
    } else {
      setAddable(false)
    }

  },[fetchContest, listContest.data])

  // get problem option
  useEffect(() => {
    if(listProblem.data === null){
      fetchProblem();
    } else {
      const options = listProblem.data.map( (problemItem) =>{ return {value : problemItem.id, label : problemItem.title}})
      console.log("options", options);
      setProblemOption(options);
    }

  },[fetchProblem, listProblem, listProblem.data])

  const initialValues = {
    title: "",
    password: "",
    isPublic: false,
    description: "",
    startTime: "",
    endTime : "",
    problemIds : [],
  };
   const validationSchema = Yup.object().shape({
      title: Yup.string().required('Bắt Buộc'),
      description: Yup.string().required('Bắt Buộc'),
      password: Yup.string().required('Bắt Buộc'),
      startTime : Yup.string().required('Bắt Buộc'),
      endTime: Yup.string().required('Bắt Buộc'),
   });


  const handleSubmit = (values , {setSubmitting}) => {
    console.log("values",values);
    contestApi.createOne(values)
    .then((res) => {
      dispatch(contestAction.createOne({...values, id : res.id}));
      setSubmitting(false);
      Toastify('success','Tạo Kỳ Thi Thành Công');
    })
    .catch( error => {
      setSubmitting(false);
      Toastify('error','Tạo Kỳ Thi Thất Bại')
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
            const {isSubmitting} = formikProps;

            return (
              <Form>
                <Grid gap = {3}>
                    
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
                      label="Mô Tả *"
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
                          disabled = {addable}
                        >
                          {isSubmitting ? <Loading/> : "Tạo Kỳ Thi"}
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
            );
          }}
        </Formik>
      </Card>
    </Fragment>
  );
};
export default AddContestForm;
