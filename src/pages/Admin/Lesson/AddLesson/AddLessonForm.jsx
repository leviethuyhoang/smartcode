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



const AddLessonForm = (props) => {

    const history = useHistory();

    const lessons = useSelector(state => state.lesson)
    const dispatch = useDispatch();

    const { sendRequest : fetchLesson} = useHttp();
    
    const [data,setData] = useState(null); 

    const configData = useCallback((res) => {
        dispatch(lessActions.getMany(res['-Mo4UqWubDW-uJMOvxaF']))
        const formatData = res['-Mo4UqWubDW-uJMOvxaF'].map(item => {
            return {
                value : item.id,
                label : item.name
            }
        })
        setData([...formatData,{value : 0,label: "Root"}])
    },[dispatch])

    useEffect(()=> {
        if(lessons.data === null){
            fetchLesson(lessonApi.getMany,configData)
        } else {
            console.log("HELLO",lessons)
        }
    },[configData, fetchLesson, lessons, lessons.data])

    const handleCancel = (e) => {
        e.preventDefault();
        history.goBack();
    }
    return (
        <Fragment>
            <Card>
                <Formik
                    initialValues = {{
                        name : "",
                        parent_id : 0
                    }}
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
                                    options = {data}
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