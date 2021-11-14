import Card from "components/UI/Card";
import Cell from "components/UI/Cell";
import InputField from "components/UI/Feild/InputField";
import SelectField from "components/UI/Feild/SelectField";
import Grid from "components/UI/Grid";
import { Field, Form, Formik } from "formik";
import { Fragment } from "react";


const EditLesson = (props) => {
    return (
        <Fragment>
            <Card>
                <Formik
                    initialValues = {{}}
                >
                { formikProps => {
                return (
                    <Form>
                        <Grid>
                            <Cell>
                                <Field
                                    name = "name"
                                    component = {InputField}

                                    label = "Tên Dạng Bài"
                                    placeholder = "Nhập Tên Nhóm Bài"
                                />
                            </Cell>
                            <Cell>
                                <Field 
                                    name = "name"
                                    component = {SelectField}

                                    label = "Nhóm Bài Cha"
                                    placeholder = "Chọn Nhóm Bài Cha"
                                />
                            </Cell>
                        </Grid>
                    </Form>
                )
                }}
            </Formik>
            </Card>
        </Fragment>
    )
}
export default EditLesson;