import lessonApi from "api/lessonApi";
import problemApi from "api/problemApi";
import { lessActions } from "app/slice/lessonSlice";
import { problemActions } from "app/slice/problemSlice";
import { Loading } from "assets/icons/Loading";
import Button from "components/UI/Button/Button";
import Card from "components/UI/Card";
import Cell from "components/UI/Cell";
import InputField from "components/UI/Feild/InputField";
import ReactSelect from "components/UI/Feild/ReactSelect";
import TextField from "components/UI/Feild/TextField";
import Grid from "components/UI/Grid";
import InputFile from "components/UI/InputFile";
import Switch from "components/UI/Switch";
import { FastField, Field, FieldArray, Form, Formik } from "formik";
import useHttp from "hooks/useHttp";
import { Fragment, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

const AddAssignmentForm = (props) => {

    const history = useHistory();
    const dispatch = useDispatch();
    const { isLoading, sendRequest  } = useHttp();
    const [ lessonOptions, setLessonOptions] = useState([]);
    const {lesson : lessons ,problem : problems} = useSelector(state => state)

    const configProblem = useCallback((res) => {
        const result = Object.values(res)
        dispatch(problemActions.getMany(result));
    },[dispatch])

    const fetchProblem = useCallback(() => {
        sendRequest(problemApi.getMany,configProblem);
    },[configProblem, sendRequest]);

    useEffect(()=>{
        if(problems.data === null){
            fetchProblem();
        }
    },[fetchProblem, problems.data])

    const configLesson = useCallback((res) => {
        dispatch(lessActions.getMany(Object.values(res['-Mo4UqWubDW-uJMOvxaF'])))
    },[dispatch]) 

    const fetchLesson = useCallback(() => {
        sendRequest(lessonApi.getMany,configLesson)
    },[configLesson, sendRequest])

    useEffect(() => {
        if(lessons.data === null){
            fetchLesson();
        } else {
            setLessonOptions(lessons.data.map(item => {
                return {
                    label : item.name,
                    value : item.id
                }
            }))
        }
    },[fetchLesson, lessons.data])

    const configData = useCallback((res) => {
        dispatch(problemActions.createOne(res))
    },[dispatch])

    const handleSubmit = useCallback((values) => {
        sendRequest(problemApi.createOne,configData,values)
    },[configData, sendRequest])

    const handleCancel = (e) => {
        e.preventDefault();
        history.goBack();
    }
    const initialValues = {
        id : new Date().getTime(),
        name : "",
        user : "Admin",
        types : [],
        time_limit : "1.00",
        memory_limit : "128",
        description : "",
        input_description : "",
        output_description : "",
        published : false,
        testcases : [
            {input : "",output : ""},
            {input : "",output : ""},
            {input : "",output : ""},
        ],
        testcases_file : "",
        hint : "",
    }

    return (
        <Fragment>
        <Card>
        <Formik
            initialValues = {initialValues}
            onSubmit = {handleSubmit}
        >
        {formikProps => {
            const {values} = formikProps;
        return (
            
            <Form>
            <Grid>
                
                <Cell width = "3">
                    <FastField
                        name = "name"
                        component = {InputField}
                        label = "TÊN BÀI TẬP"
                        placeholder = "Nhập tên bài tập ..."
                    />
                    
                </Cell>
                <Cell width = "3">
                    <Field
                        name = "types"
                        component = {ReactSelect}

                        options = {lessonOptions}
                        label = "DẠNG BÀI"
                        isMulti = {true}
                        placeholder = "Chọn dạng bài ..."
                    />
                </Cell>
                <Cell width = "2">
                    <Field
                        name = "time_limit"
                        component = {InputField}

                        label = "GIỚI HẠN THỜI GIAN"
                        placeholder = "ms"
                    />
                </Cell>
                <Cell width = "2">
                    <Field
                        name = "memory_limit"
                        component = {InputField}

                        label = "GIỚI HẠN BỘ NHỚ"
                        placeholder = "kb"
                    />
                </Cell>
                <Cell width = "2">
                    <Field
                        name = "published"
                        component = {Switch}

                        label = "Xuất Bản"
                    />
                </Cell>
                
                <Cell>
                    <FastField
                        name="description"
                        component={TextField}
                        
                        label = "NỘI DUNG"
                        placeholder = "Nhập nội dung ..."
                    />
                </Cell>
                <Cell width = "6">
                    <FastField
                        name = "input_description"
                        component = {TextField}

                        label = "INPUT"
                        rows = "4"
                    />
                </Cell>
                <Cell width = "6">
                    <FastField
                        name = "output_description"
                        component = {TextField}

                        label = "OUTPUT"
                        rows = "4"
                    />
                </Cell>
                <Cell width= "9" >
                <FieldArray
                    name="testcases"
                    render = { arrayHelpers => (
                        <Fragment>
                            <label className="form-label mx-auto"><b> TESTCASE</b></label><br />
                            <Button classes = "btn-elevated-rounded-primary w-full mr-5 mt-2 " onClick={() => arrayHelpers.push('')}>Thêm Testcase</Button>
                            {values.testcases && values.testcases.length > 0 ? (
                                <Fragment>
                                    {values.testcases.map((friend, index) => (
                                        <Grid key = {index} >
                                            <br />
                                            <Cell width = "4">
                                                <Field name={`testcases.${index}.input`} component = {TextField} label = {index === 0 ? "Input" : null} rows = "1"/>
                                            </Cell>
                                            <Cell width = "4">
                                                <Field name={`testcases.${index}.output`} component = {TextField} label = {index === 0 ? "Output" : null} rows = "1"/>
                                            </Cell>
                                            <Cell width = "2">
                                                <div className = "flex flex-row mr-auto">
                                                    <Button classes = {`btn-outline-danger w-16 mr-2 mt-${index === 0 ? '10' : '3'}`} onClick={() => arrayHelpers.remove(index)}>
                                                        Xóa
                                                    </Button>
                                                    <Button classes = {`btn-outline-primary w-16 mr-2 mt-${index === 0 ? '10' : '3'}`} onClick={() => arrayHelpers.insert(index+1,'')}>
                                                        Thêm
                                                    </Button>
                                                </div>
                                            </Cell>
                                        </Grid>
                                    ))}
                                    
                                </Fragment>
                                ) : null}
                            
                        </Fragment>
                        )}
                />
                </Cell>
                <Cell width = "3" classes = "mt-5">
                    <Field 
                        name = "testcases_file"
                        component = {InputFile}

                    />
                </Cell>
                <Cell>
                    <FastField
                        name="hint"
                        component={TextField}
                        
                        label = "HƯỚNG DẪN"
                        placeholder = "..."
                    />
                </Cell>
                
                
                <Cell width = "6">
                    <Button type = "submit" classes = "btn btn-primary w-full">
                        {isLoading ? <Loading/> : "Lưu"}
                    </Button>
                </Cell>
                <Cell width = "6">
                    <Button classes = "btn-outline w-full" onClick = {handleCancel}>
                        Hủy
                    </Button>
                </Cell>
                
            </Grid>
        </Form>
        )}}
        </Formik>
        </Card>
        </Fragment>
    )
}
export default AddAssignmentForm;