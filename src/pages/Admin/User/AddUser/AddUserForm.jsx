import { Loading } from "assets/icons/Loading";
import Button from "components/UI/Button/Button";
import Card from "components/UI/Card";
import Cell from "components/UI/Cell";
import InputField from "components/UI/Feild/InputField";
import Grid from "components/UI/Grid";
import Switch from "components/UI/Switch";
import { FastField, Field, Form, Formik } from "formik";
import { Fragment } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const AddUserForm = (props) => {

    const history = useHistory();

    const initialValues = {
        email : '',
        password : '',
        username : '',
        school : '',
        isAdmin : false,
        isActive : false,
    }

    const cancelHandler = () => {
        history.push("/admin/contest");
    }

    return (
        <Fragment>
            <Card>
                    <Formik 
                        initialValues={initialValues}
                        onSubmit={props.handleSubmit}
                    >
                        {(formikProps => {

                            const {isSubmitting} = formikProps;

                            return (
                            <Form>
                                <Grid>
                                    <Cell width = {2}>
                                        <FastField 
                                            name = "username"
                                            component = {InputField}

                                            label = "Tên Tài Khoản"
                                        />
                                    </Cell>
                                    <Cell width = {2}>
                                        <FastField 
                                            name = "email"
                                            component = {InputField}

                                            label = "Email"
                                        />
                                    </Cell>
                                    <Cell width = {2}>
                                        <FastField 
                                            name = "school"
                                            component = {InputField}

                                            label = "Trường Học"
                                        />
                                    </Cell>
                                    <Cell width = {2}>
                                        <Field
                                            name = "password"
                                            component = {InputField}

                                            label = "Mật Khẩu"
                                            type  = "password"
                                        />
                                    </Cell>
                                    <Cell width = {2}>
                                        <FastField 
                                            name = "isAdmin"
                                            component = {Switch}

                                            label = "Quyền Quản Trị"
                                        />
                                    </Cell>
                                    <Cell width = {2}   >
                                        <FastField 
                                            name = "isActive"
                                            component = {Switch}

                                            label = "Kích Hoạt"
                                        />
                                    </Cell>
                                    <Cell width ="6">
                                        <Button 
                                            type="submit" 
                                            classes="btn btn-primary w-full h-10"
                                        >
                                            {isSubmitting ? <Loading/> : "Tạo"}
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
                            </Form>
                            )
                        })}
                        
                    </Formik>
            </Card>
        </Fragment>
    )
}
export default AddUserForm;