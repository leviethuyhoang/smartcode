import lessonApi from "api/lessonApi";
import problemApi from "api/problemApi";
import { lessActions } from "app/slice/lessonSlice";
import { problemActions } from "app/slice/problemSlice";
import Button from "components/UI/Button/Button";
import Card from "components/UI/Card";
import Cell from "components/UI/Cell";
import InputField from "components/UI/Feild/InputField";
import ReactSelect from "components/UI/Feild/ReactSelect";
import TextField from "components/UI/Feild/TextField";
import Grid from "components/UI/Grid";
import InputFile from "components/UI/InputFile";
import Switch from "components/UI/Switch";
import useHttp from "hooks/useHttp";
import { FastField, Field, FieldArray, Form, Formik } from "formik";
import { Fragment, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";

const EditAssignmentForm = (props) => {

    const params = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const { sendRequest  } = useHttp();

    const {lesson : lessons ,problem : problems} = useSelector(state => state)
    const [ lessonOptions, setLessonOptions] = useState(null);
    const [ data , setData ] = useState({
        name : "",
        description : "",
        input_description : "",
        output_description : "",
        time_limit : "1.00",
        memory_limit : "128",
        types : [],
        published : false,
        testcase : [],
        testcase_file : "",
        hint : "",
    })

    // get lesson options
    const configLesson = useCallback((res) => {
        dispatch(lessActions.getMany(Object.values(res['-Mo4UqWubDW-uJMOvxaF'])))
    },[dispatch]) 

    const fetchLesson = useCallback(() => {
        sendRequest(lessonApi.getMany,configLesson)
    },[configLesson, sendRequest])
    // end get lesson option

    // get all problem
    const configData = useCallback((res) => {
        const result = Object.values(res)
        dispatch(problemActions.getMany(result));
    },[dispatch])

    const fetchProblem = useCallback(() => {
        sendRequest(problemApi.getMany,configData);
    },[configData, sendRequest]);
    // end get all problem

    useEffect(() => {
        // con fig lesson
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
        // get data
        if(problems.data === null){
            fetchProblem();
        } else {
            const result = problems.data.find(item => +item.id === +params.id);
            console.log("result",result)
            setData(prev => prev = {...prev,...result})
        }
    },[fetchLesson, fetchProblem, lessons.data, params.id, problems.data])

    // btn huy
    const handleCancel = (e) => {
        e.preventDefault();
        history.goBack();
    }

    // btn submit
    const handleSubmit = (value) => {
        console.log("submitting : ",value)
        // const result = {...value,testcase_file : value.testcase_file[0].file}
        // sendRequest()
        dispatch(problemActions.updateOne(value));
    }

    const initialValues = data;

    return (
        <Fragment>
        <Card>
        <Formik
            initialValues = {initialValues}
            enableReinitialize = {true}
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

                            label = "Đăng"
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
                        name="testcase"
                        render = { arrayHelpers => (
                            <Fragment>
                                <label className="form-label mx-auto"><b> TESTCASE</b></label><br />
                                <Button classes = "btn-elevated-rounded-primary w-full mr-5 mt-2 " onClick={() => arrayHelpers.push('')}>Thêm Testcase</Button>
                                {values.testcase && values.testcase.length > 0 ? (
                                    <Fragment>
                                        {values.testcase.map((tc, index) => (
                                            <Grid key = {index} >
                                                <br />
                                                <Cell width = "4">
                                                    <Field name={`testcase.${index}.input`} component = {TextField} label = {index === 0 ? "Input" : null} rows = "1"/>
                                                </Cell>
                                                <Cell width = "4">
                                                    <Field name={`testcase.${index}.output`} component = {TextField} label = {index === 0 ? "Output" : null} rows = "1"/>
                                                </Cell>
                                                <Cell width = "2">
                                                    <div className = "flex flex-row mr-auto">
                                                        <Button classes = {`btn-outline-danger w-16 mr-2 mt-${index === 0 ? '10' : '3'}`} onClick={() => arrayHelpers.remove(index)}>
                                                            Xóa
                                                        </Button>
                                                        <Button classes = {`btn-outline-primary w-16 mr-2 mt-${index === 0 ? '10' : '3'}`} onClick={() => arrayHelpers.insert(index,'')}>
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
                            name = "testcase_file"
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
            )}}
        </Formik>
        </Card>
        </Fragment>
    )
}
export default EditAssignmentForm;