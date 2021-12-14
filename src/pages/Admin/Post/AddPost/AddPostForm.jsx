import { FastField, Form, Formik } from "formik";
import { useHistory } from "react-router";

import Card from "components/UI/Card";
import Cell from "components/UI/Cell";
import InputField from "components/UI/Feild/InputField";
import TextField from "components/UI/Feild/TextField";
import Grid from "components/UI/Grid";
import Switch from "components/UI/Switch";
import Button from "components/UI/Button/Button";
import { useDispatch } from "react-redux";
import useHttp from "hooks/useHttp";
import postApi from "api/postApi";
import { postActions } from "app/slice/postSlice";
import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import * as Yup from "yup";

const AddPostForm = (props) => {

    const history = useHistory();
    const dispatch = useDispatch();
    const posts = useSelector(state => state.post);
    const { sendRequest } = useHttp();

    const handleCancel = (e) => {
        e.preventDefault();
        history.goBack();
    }

    const configData = useCallback((res) => {
        const result = Object.values(res);
        if(result[0] !== null){
            dispatch(postActions.getMany(Object.values(res)))
        }
    },[dispatch])

    const fetchData = useCallback(() => {
        sendRequest(postApi.getMany,configData)
    },[configData, sendRequest])

    useEffect(() => {
        if(posts.data === null){
            fetchData();
        }
    },[fetchData, posts.data])

    const initialValues = {
        id : "",
        title : "",
        content : "",
        user : "Admin",
        date_time : new Date(),
        published : false,
    }

    const createOne = (res) => {
        dispatch(postActions.createOne(res));
    }

    const handleSubmit = (values) => {
        values = {...values,id : new Date().getTime()};
        sendRequest(postApi.createOne,createOne,values)
    }

    const validationSchema = Yup.object().shape({
        title : Yup.string().required("Không được để trống"),
        content : Yup.string().required("Không được để trống"),
    })

    return (
        <Card classes = "mt-5 h-full">
            <Formik
                initialValues = {initialValues}
                validationSchema = {validationSchema}
                onSubmit = {handleSubmit}
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