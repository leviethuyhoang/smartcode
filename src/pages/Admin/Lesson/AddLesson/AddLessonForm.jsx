import lessonApi from "api/lessonApi";
import { lessActions } from "app/slice/lessonSlice";
import Button from "components/UI/Button/Button";
import Card from "components/UI/Card";
import Cell from "components/UI/Cell";
import InputField from "components/UI/Feild/InputField";
import ReactSelect from "components/UI/Feild/ReactSelect";
import Grid from "components/UI/Grid";
import { FastField, Field, Form, Formik } from "formik";
import useHttp from "hooks/useHttp";
import { Fragment, useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { CreateMenu } from "util/CreateMenu";
import * as Yup from "yup"



const AddLessonForm = (props) => {

    const history = useHistory();

    const lessons = useSelector(state => state.lesson)
    const dispatch = useDispatch();

    const { sendRequest } = useHttp();

    const [ lessonOptions, setLessonOptions ] = useState([])
    console.log("options",lessonOptions)

    const configLesson = useCallback((res) => {
        const result = Object.values( res);
        if(result[0] !== null){
            dispatch(lessActions.getMany(result))
        }
    },[dispatch])

    const fetchLesson = useCallback(() => {
        sendRequest(lessonApi.getMany,configLesson)
    },[configLesson, sendRequest])

    useEffect(()=> {

        if(lessons.data === null) {
            fetchLesson();
        } else {
            const menu = CreateMenu(lessons.data)
            setLessonOptions(prev => prev.concat(menu.map(item => {
                return {
                    value : item.id,
                    label : item.name
                }
            })))
        }
    },[fetchLesson, lessons, lessons.data, sendRequest])

    const handleCancel = (e) => {
        e.preventDefault();
        history.goBack();
    }

    const storeData =  useCallback((res) => {
        const result = res;
        dispatch(lessActions.createOne(result));
    },[dispatch])

    const handleSubmit = (values) => {
        sendRequest(lessonApi.createOne,storeData,values)
    }

    const validationSchema = Yup.object().shape({
        name : Yup.string().required("Không được để trống")
    })

    return (
        <Fragment>
            <Card>
                <Formik
                    initialValues = {{
                        id : new Date().getTime(),
                        name : "",
                        parent_id : 0,
                    }}
                    validationSchema = {validationSchema}
                    onSubmit = {handleSubmit}
                    enableReinitialize = {true}
                >
                { formikProps => {
                return (
                    <Form>
                        <Grid>
                            <Cell>
                                <FastField 
                                    name = "name"
                                    component = {InputField}

                                    label = "Tên Dạng Bài"
                                    placeholder = "Nhập Tên Nhóm Bài"
                                />
                            </Cell>
                            <Cell>
                                <Field 
                                    name = "parent_id"
                                    component = {ReactSelect}

                                    label = "Nhóm Bài Cha"
                                    placeholder = "Chọn Nhóm Bài Cha"
                                    options = {lessonOptions}
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
        </Fragment>
    )
}
export default AddLessonForm;