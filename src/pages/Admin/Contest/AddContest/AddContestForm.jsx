import { Fragment } from "react";

import { FastField, Form, Formik } from "formik";
import Grid from "components/UI/Grid";
import InputField from "components/UI/Feild/InputField";
import TextField from "components/UI/Feild/TextField";
import Cell from "components/UI/Cell";
import Switch from "components/UI/Switch";
import ReactSelect from "components/UI/Feild/ReactSelect";
import Button from "components/UI/Button/Button";
import Card from "components/UI/Card";
import contestApi from "api/contestApi";
import { useDispatch } from "react-redux";
import { contestAction } from "app/slice/contestSlice";
import { useHistory } from "react-router-dom";
import * as  Yup from 'yup';

const AddContestForm = (props) => {
  const history = useHistory();

  const dateTime = new Date().toLocaleString();
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    password: "",
    decreption: "",
    start_time: dateTime,
    end_time: "",
    rule_type: "",
    real_time_rank: 45,
    published: true,
    status: "",
    id: Math.random(),
  };
   const validationSchema = Yup.object().shape({
    name: Yup.string().required('this field is required.'),
    password: Yup.string().required('this field is required.'),
    decreption: Yup.string().required('this field is required.'),
    status: Yup.boolean()
   });


  const handleSubmit = (values) => {
    contestApi.createOne(values).then((res) => {
      dispatch(contestAction.createOne(values));
      history.replace("/admin/contest");
    }) 
    
  };
  const cancelHandler = () => {
    history.push("/admin/contest");
  };

  return (
    <Fragment>
      <Card>
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema} >
          {(formikProps) => {
            return (
              <Form>
                <Grid>
                  <Cell width="3">
                    <FastField
                      name="name"
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
                  <Cell width="4">
                    <FastField
                      name="rule_type"
                      component={ReactSelect}
                      label="Rule Type"
                      placeholder="Chọn"
                    />
                  </Cell>
                  <Cell width="2">
                    <FastField
                      name="published"
                      component={Switch}
                      label="Đăng"
                    />
                  </Cell>
                  <Cell width="3">
                    <FastField
                      name="start_time"
                      component={InputField}
                      label="Thời Gian Bắt Đầu"
                      placeholder=""
                      type="datetime-local"
                    />
                  </Cell>
                  <Cell width="3">
                    <FastField
                      name="end_time"
                      component={InputField}
                      label="Thời Gian Kết Thúc"
                      placeholder="Nhập tên kỳ thi ..."
                      type="datetime-local"
                    />
                  </Cell>
                  <Cell width="3">
                    <FastField
                      name="real_time_rank"
                      component={InputField}
                      label="Thời Gian Thi"
                      placeholder="Nhập thời gian thi ..."
                    />
                  </Cell>

                  <Cell>
                    <FastField
                      name="decreption"
                      component={TextField}
                      label="Mô tả"
                      rows="15"
                    />
                  </Cell>
                  <Cell>
                    <Grid>
                      <Cell width="6">
                        <Button type="submit" classes="btn btn-primary w-full">
                          THÊM
                        </Button>
                      </Cell>
                      <Cell width="6">
                        <Button
                          classes="btn btn-secondary w-full"
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
