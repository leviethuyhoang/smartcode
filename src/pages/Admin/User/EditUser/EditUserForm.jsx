import Card from "components/UI/Card";
import Cell from "components/UI/Cell";
import ChoseAvatar from "components/UI/ChoseAvatar";
import InputField from "components/UI/Feild/InputField";
import Grid from "components/UI/Grid";
import Switch from "components/UI/Switch";
import { Field, Form, Formik } from "formik";
import { Fragment, useEffect } from "react";

let status = false;

const EditUserForm = (props) => {

    useEffect(()=> {
        console.log("status",status);
        status = true;
    },[])

    const initialValues = {
        username : "",
        avatar : "",
        admin : true,
    }

    return (
        <Fragment>
            <Formik
                initialValues = {initialValues}
            >
                {formikProps => {
                    return (
                        <Card>
                            <Form>
                            <Grid>
                                <Cell width = "4">
                                    <Field
                                        name = "username"
                                        component = {InputField}

                                        label = "Tên Tài Khoản"
                                    />
                                </Cell>
                                <Cell width = "4">
                                    <Field
                                        name = "avatar"
                                        component = {ChoseAvatar}
                                    />
                                </Cell>
                                    <Field
                                        name = "admin"
                                        component = {Switch}

                                        label = "Admin"
                                    />
                                    <Cell width = "2">
                                        <Field
                                            name = "contestsetter"
                                            component = {Switch}

                                            label = "Tổ Chức Thi"
                                        />
                                    </Cell>
                                    <Field
                                        name = "problemsetter"
                                        component = {Switch}

                                        label = "Ra Đề"
                                    />
                            </Grid>
                        </Form>
                        </Card>
                    )
                }}

            </Formik>
        </Fragment>
    )
}
export default EditUserForm;