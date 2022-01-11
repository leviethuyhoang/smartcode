import problemApi from "api/problemApi";
import { Loading } from "assets/icons/Loading";
import Button from "components/UI/Button/Button";
import Card from "components/UI/Card";
import Cell from "components/UI/Cell";
import InputField from "components/UI/Feild/InputField";
import TextField from "components/UI/Feild/TextField";
import Grid from "components/UI/Grid";
import Switch from "components/UI/Switch";
import { FastField, Field, FieldArray, Form, Formik } from "formik";
import { useCallback } from "react";
import { Fragment,  useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import * as Yup from "yup";

const EditAssignmentForm = (props) => {

    const params = useParams();
    const history = useHistory();

    const [ data , setData ] = useState({
        title : "",
        point : "",
        isPublished : false,
        timeLimit : "1.00",
        memoryLimit : "128",
        description : "",
        sampleTestCases : [],
        testCases: [],
    })

    const fetchProblem = useCallback(() => {
        problemApi.getOne(params.id)
        .then( res => {
            console.log(res);
            setData(prev => prev = {...prev,...res})
        })
        .catch( error => {
            console.log(error)
        })
    },[params.id])

    useEffect(() => {
        const timer = setTimeout(fetchProblem(),0);

        return (
            clearTimeout(timer)
        )
    },[fetchProblem])


    function handleCancel(e) {
    e.preventDefault();
    history.goBack();
}

    const validationSchema = Yup.object().shape({
        title : Yup.string().required("Bắt buộc"),
        description : Yup.string().required("Bắt buộc"),
        testCases : Yup.array()
        .of(
            Yup.object().shape({
                stdin : Yup.string().required("Bắt buộc"),
                stdout : Yup.string().required("Bắt buộc"),
            })
        ),
    })
    return (
        <Fragment>
        <Card>
        <Formik
            initialValues = {data}
            validationSchema = {validationSchema}
            enableReinitialize = {true}
            onSubmit = {props.handleSubmit}
        >
            {formikProps => {
                const {values, isSubmitting} = formikProps;
            return (
                
            <Form>
                <Grid>
                    
                    <Cell width = "4">
                        <FastField
                            name = "title"
                            component = {InputField}
                            label = "TÊN BÀI TẬP"
                            placeholder = "Nhập tên bài tập ..."
                        />
                        
                    </Cell>
                    <Cell width = "2">
                        <Field
                            name = "point"
                            component = {InputField}

                            label = "ĐIỂM"
                            type="number"
                        />
                    </Cell>
                    <Cell width = "2">
                        <Field
                            name = "timeLimit"
                            component = {InputField}

                            label = "GIỚI HẠN THỜI GIAN"
                            placeholder = "ms"
                        />
                    </Cell>
                    <Cell width = "2">
                        <Field
                            name = "memoryLimit"
                            component = {InputField}

                            label = "GIỚI HẠN BỘ NHỚ"
                            placeholder = "kb"
                        />
                    </Cell>
                    <Cell width = "2">
                        <Field
                            name = "isPublished"
                            component = {Switch}

                            label = "Công Khai"
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
                    <Cell>
                    <FieldArray
                        name="sampleTestCases"
                        render = { arrayHelpers => (
                            <Fragment>
                                <label className="form-label mx-auto"><b>TESTCASE VÍ DỤ</b></label><br />
                                <Button classes = "btn-elevated-rounded-primary w-full mr-5 mt-2 " onClick={() => arrayHelpers.push('')}>Thêm Ví Dụ</Button>
                                {values.sampleTestCases && values.sampleTestCases.length > 0 ? (
                                    <Fragment>
                                        {values.sampleTestCases.map((tc, index) => (
                                            <Grid key = {index} >
                                                <br />
                                                <Cell width = "4">
                                                    <Field name={`sampleTestCases.${index}.stdin`} component = {TextField} label = {index === 0 ? "Input" : null} rows = "1"/>
                                                </Cell>
                                                <Cell width = "4">
                                                    <Field name={`sampleTestCases.${index}.stdout`} component = {TextField} label = {index === 0 ? "Output" : null} rows = "1"/>
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
                    <Cell>
                    <FieldArray
                        name="testCases"
                        render = { arrayHelpers => (
                            <Fragment>
                                <label className="form-label mx-auto"><b> TESTCASE</b></label><br />
                                <Button classes = "btn-elevated-rounded-dark w-full mr-5 mt-2 " onClick={() => arrayHelpers.push('')}>Thêm Testcase</Button>
                                {values.testCases && values.testCases.length > 0 ? (
                                    <Fragment>
                                        {values.testCases.map((tc, index) => (
                                            <Grid key = {index} >
                                                <br />
                                                <Cell width = "4">
                                                    <Field name={`testCases.${index}.stdin`} component = {TextField} label = {index === 0 ? "Input" : null} rows = "1"/>
                                                </Cell>
                                                <Cell width = "4">
                                                    <Field name={`testCases.${index}.stdout`} component = {TextField} label = {index === 0 ? "Output" : null} rows = "1"/>
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
                    <Cell width = "6">
                        <Button type = "submit" classes = "btn btn-primary w-full h-10">
                            {isSubmitting ? <Loading/> : "LƯU"}
                        </Button>
                    </Cell>
                    <Cell width = "6">
                        <Button classes = "btn-outline w-full h-10" onClick = {handleCancel}>
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