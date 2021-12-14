import lessonApi from "api/lessonApi";
import { lessActions } from "app/slice/lessonSlice";
import Button from "components/UI/Button/Button";
import Card from "components/UI/Card";
import Cell from "components/UI/Cell";
import InputField from "components/UI/Feild/InputField";
import ReactSelect from "components/UI/Feild/ReactSelect";
import Grid from "components/UI/Grid";
import { Field, Form, Formik } from "formik";
import useHttp from "hooks/useHttp";
import { Fragment, useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { CreateMenu } from "util/Funtion/CreateMenu";


const EditLessonForm = (props) => {

    const history = useHistory();
    const params = useParams();
    const [lessonOptions, setLessonOptions] = useState([{
        value : 0,
        label : "Không"
    }]);
    const [data, setData] = useState({
        name : "",
        parent_id : 0,
        id : -1,
    });
    const {sendRequest} = useHttp();

    const lessons = useSelector(state => state.lesson);
    const dispatch = useDispatch();
    
    const configLesson = useCallback((res) => {
        const result = Object.values( res);
        dispatch(lessActions.getMany(result))
    },[dispatch])

    const fetchLesson = useCallback(() => {
        sendRequest(lessonApi.getMany,configLesson)
    },[configLesson, sendRequest])

    useEffect(() => {

        const getData = () => {
            const id = params.id;
            const result = lessons.data.find(item => +item.id === +id);
            setData(result) ;
        }

        if(lessons.data === null) {
            fetchLesson();
        } else {
            getData();
            const lessonOptions = CreateMenu(lessons.data);

            setLessonOptions(prev => prev.concat(lessonOptions.map(item => {
                return {
                    value : item.id,
                    label : item.name
                }
            })))
        }

    },[fetchLesson, lessons.data, params.id])

    const initialValues = data;

    const handleCancel = (e) => {
        e.preventDefault();
        history.goBack();
    }
    const handleSubmit = (values) => {
        console.log("submitting", values);
        dispatch(lessActions.updateOne(values));
    }

    return (
        <Fragment>
            <Card>
                <Formik
                    initialValues = {initialValues}
                    enableReinitialize = {true}
                    onSubmit = {handleSubmit}
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
export default EditLessonForm;