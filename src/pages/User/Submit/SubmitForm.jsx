import {  FastField, Field, Form, Formik } from "formik";
import { Fragment, useCallback, useEffect, useState } from "react";
import { Loading } from "assets/icons/Loading";

import Button from "components/UI/Button/Button";
import Card from "components/UI/Card";
import Cell from "components/UI/Cell";
import Grid from "components/UI/Grid";
import problemApi from "api/problemApi";
import submitionApi from "api/submittionApi";
import CodeEditor from "components/UI/CodeEditor";
import { useDispatch  } from "react-redux";
import { useSelector } from "react-redux";
import { problemActions } from "app/slice/problemSlice";
import ReactSelect from "components/UI/Feild/ReactSelect";
import configApi from "api/configApi";
import { configActions } from "app/slice/configSlice";

const SubmitForm = (props) => {

    const {config} = useSelector(state => state)
    const listProblem = useSelector(state => state.problem)
    const [problemOption, setProblemOption] = useState([])
    const [languageOptions, setLanguageOptions] = useState([])
    const dispatch = useDispatch();

    const fetchConfig = useCallback(() => {
        configApi.getMany()
        .then(res => {
            dispatch(configActions.getMany(res))
        })
        .catch( errors => {
            console.log("My ERROR", errors)
        })
    },[dispatch])

    const configData = useCallback((res) => {
        dispatch(problemActions.getMany(res));
    },[dispatch])

    const fetchProblem = useCallback(() => {
        problemApi.getMany()
        .then( res => {
            configData(res.results)
        })
        .catch(error => {
            console.log("ERROR",error)
        })
    },[configData]);


    useEffect(() => {
        if(config.data === null) {
            fetchConfig();
        } else {
            setLanguageOptions(config.data.languages.map(languageItem => {
                return {value : languageItem.id, label : languageItem.name}
            }))
        }
        if(listProblem.data === null){
            fetchProblem();
        } else {
            setProblemOption(listProblem.data.map(item => {
                return {
                    value : item.id,
                    label : item.title
                }
            }))
        }
    },[config, fetchConfig, fetchProblem, listProblem.data])

    const initialValues = {
        problemId : null,
        languageId : 0,
        sourceCode : "// code here\n",
    }

    const handleSubmit = (values,{setSubmitting}) => {
        console.log("submitting",values)

        submitionApi.submit({...values,problemId : `${values.problemId}`})
        .then(res => {
            console.log("Thanh Cong",res)
        })
        .catch(error =>{
            console.log("error",error)
        })
        .finally( () => {
            setSubmitting(false)
        }
        )
    }

    return (
        <Fragment>
            <Grid>
                <Cell>
                <Card classes = "ml-1">
                    <Formik
                        initialValues = {initialValues}
                        onSubmit = {handleSubmit}
                        enableReinitialize
                    >
                    {propsFormik => {
                        const {isSubmitting} = propsFormik;
                    return (
                        <Form>
                            <Grid>
                                <Cell width ="6">
                                    <Field
                                        name = "problemId"
                                        component = {ReactSelect}

                                        label = "Tên Bài Tập"
                                        options = {problemOption}
                                        placeholder = "Chọn Bài Tập"
                                        handleChange = {props.handleChangeProblem}
                                    />
                                </Cell>
                                <Cell width = "6">
                                    <Field  
                                        name = "languageId"
                                        component = {ReactSelect}

                                        label = "Ngôn Ngữ"
                                        options = {languageOptions}
                                        placeholder = "Chọn Ngôn Ngữ"
                                    />
                                </Cell>
                                <Cell >
                                    <FastField
                                        name = "sourceCode"
                                        component = {CodeEditor}
                                    />
                                </Cell>
                                {/* <Cell>
                                    <Field
                                        name = ""
                                        component = {InputFile}

                                        multiple = {true}
                                    />
                                </Cell> */}
                                <Cell width = "3">
                                    <Button classes = "btn-primary w-full" type = "submit">
                                            {isSubmitting ? <Loading w = "72" h = "72"/>:"Nộp Bài"}
                                    </Button>
                                </Cell>
                            </Grid>
                        </Form>
                    )}}
                    </Formik>
                    
                </Card>
                </Cell>
            </Grid>
        </Fragment>
    )
}
export default SubmitForm;