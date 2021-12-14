import { useCallback, useEffect, useState } from "react"
import Card from "components/UI/Card";
import { FastField, Form, Formik } from "formik";
import Grid from "components/UI/Grid";
import Cell from "components/UI/Cell";
import InputField from "components/UI/Feild/InputField";
import Switch from "components/UI/Switch";
import TextField from "components/UI/Feild/TextField";
import Button from "components/UI/Button/Button";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { postActions } from "app/slice/postSlice";
import { useHistory, useParams } from "react-router";
import postApi from "api/postApi";
import useHttp from "hooks/useHttp";
import * as Yup from "yup";

const EditPostForm = (props) => {

    const params = useParams();
    const history = useHistory();
    const {sendRequest } = useHttp();

    const posts = useSelector(state => state.post);
    const dispatch = useDispatch();

    const [data, setData] = useState({
        title : "",
        content : "",
        published : "",
    });
    console.log(data)
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
        } else {
            setData(posts.data.find(post => +post.id === +params.id))
        }
    },[fetchData, params.id, posts.data])

    function handleSubmit(values) {
        dispatch(postActions.updateOne(values));
    } 
    const handleCancel = (e) => {
        e.preventDefault();
        history.goBack();
    }

    const validationSchema = Yup.object().shape({
        title : Yup.string().required("Không được để trống"),
        content : Yup.string().required("Không được để trống"),
    })

    return (
        <Card classes = "mt-5 h-full">
            <Formik
                initialValues = {data}
                validationSchema = {validationSchema}
                onSubmit = {handleSubmit}
                enableReinitialize = {true}
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
export default EditPostForm;