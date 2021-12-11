import { Fragment, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { FastField, Form, Formik } from "formik";
import Grid from "components/UI/Grid";
import InputField from "components/UI/Feild/InputField";
import TextField from "components/UI/Feild/TextField";
import Cell from "components/UI/Cell";
import Switch from "components/UI/Switch";
import ReactSelect from "components/UI/Feild/ReactSelect";
import Button from "components/UI/Button/Button";
import Card from "components/UI/Card";
import contestApi from "../../../../api/contestApi";
import { useDispatch, useSelector } from "react-redux";
import { contestAction } from "app/slice/contestSlice";
import * as Yup from "yup";

const EditContest = (props) => {
  const [Loading, setLoading] = useState(false);
  const [contest, setContest] = useState([]);
  const show = useSelector((state) => state.contest.data);
  const dispatch = useDispatch();
  const [initialValues, setInitialValues] = useState({
    name: ``,
    password: ``,
    decreption: ``,
    start_time: ``,
    end_time: ``,
    rule_type: ``,
    real_time_rank: ``,
    published: ``,
    status: ``,
  });
  const parmas = useParams();
  const history = useHistory();
  const dateTime = new Date().toLocaleString();

  const idContest = parmas.id;

  useEffect(() => {
    const idEdit = show.find((item) => item.id.toString() === idContest.toString()
    );
    setInitialValues({
      name: `${idEdit.name}`,
      password: `${idEdit.password}`,
      decreption: `${idEdit.decreption}`,
      start_time: ``,
      end_time: ``,
      rule_type: `${idEdit.rule_type}`,
      real_time_rank: `${idEdit.real_time_rank}`,
      published: `${idEdit.published}`,
      status: `${idEdit.status}`,
      id: idContest,
    });
    setContest(show);
    setLoading(true);
  }, [dateTime, idContest, show]);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("this is field is required"),
    password: Yup.string().required("this is field is required"),
    decreption: Yup.string().required("this is field is required"),
    status: Yup.boolean(),
  });

  const submitHander = (values) => {
      dispatch(contestAction.editOne(values));
      const contestEdit = values;
      const dataEditNew = contest.findIndex(contest =>contest.id.toString() === contestEdit.id.toString());
      const newList =[...contest];
      newList[dataEditNew] = contestEdit;
      const edit = newList;
      contestApi.editOne(edit).then(()=>{});
      history.push("/admin/contest");
    
  
  };

  const cancelHandler = () => {
    history.push("/admin/contest");
  };

  return (
    <Fragment>
      {!Loading && <p>Loading....</p>}
      {Loading && (
        <Card>
          <Formik
            initialValues={initialValues}
            onSubmit={submitHander}
            validationSchema={validationSchema}
          >
            {(formikProps) => {
              return (
                <Fragment>
                  {!Loading && <p>Loading...</p>}
                  {Loading && (
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
                              <Button
                                type="submit"
                                classes="btn btn-primary w-full"
                              >
                                Sửa
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
                  )}
                </Fragment>
              );
            }}
          </Formik>
        </Card>
      )}
    </Fragment>
  );
};
export default EditContest;
