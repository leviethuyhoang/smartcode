import { FastField, Form, Formik } from "formik";
import { useHistory } from "react-router";

import Card from "components/UI/Card";
import Cell from "components/UI/Cell";
import InputField from "components/UI/Feild/InputField";
import TextField from "components/UI/Feild/TextField";
import Grid from "components/UI/Grid";
import Switch from "components/UI/Switch";
import Button from "components/UI/Button/Button";

const AddPostForm = (props) => {

    const history = useHistory();

    const handleCancel = (e) => {
        e.preventDefault();
        history.goBack();
    }

    const initialValues = {
        title : "",
        content : "",
        user : "Admin",
        date_time : new Date(),
        published : false,
    }

    return (
        <Card classes = "mt-5 h-full">
            <Formik
                initialValues = {initialValues}
            >
            { () => {
                return (
                    <Form>
                        <Grid>
                            <Cell width = "9">
                                <FastField 
                                    name = "title"
                                    component = {InputField}

                                    placeholder = "Nhập Tiêu Đề"
                                    label = "Tiêu Đề"
                                />
                            </Cell>
                            <Cell width = "3">
                                <FastField 
                                    name = "published"
                                    component = {Switch}

                                    label = "Đăng"
                                />
                            </Cell>
                            <Cell>
                               <FastField 
                                    name = "content"
                                    component = {TextField}

                                    label = "Nội Dung Bài Viết"
                                    rows = "15"
                                />     
                            </Cell>
                            <Cell width = "6">
                                <Button type = "submit" classes = "btn btn-primary w-full">
                                    Lưu
                                </Button>
                            </Cell>
                            <Cell width = "6">
                                <Button classes = "btn-outline w-full" onClick = {handleCancel}>
                                    Hủy
                                </Button>
                            </Cell>
                        </Grid>
                    </Form>
                )
            }}

            </Formik>
        </Card>
    )
}
export default AddPostForm;