import {  FastField, Field, Form, Formik } from "formik";
import { Fragment, useCallback, useEffect, useState } from "react";
import { Loading } from "assets/icons/Loading";

import Button from "components/UI/Button/Button";
import Card from "components/UI/Card";
import Cell from "components/UI/Cell";
import Grid from "components/UI/Grid";
import CodeEditor from "components/UI/CodeEditor";
import { useDispatch  } from "react-redux";
import { useSelector } from "react-redux";
import ReactSelect from "components/UI/Feild/ReactSelect";
import configApi from "api/configApi";
import { configActions } from "app/slice/configSlice";
import * as Yup from 'yup';

const SubmitForm = (props) => {

    const { listProblems, idProblem } = props;

    const dispatch = useDispatch();

    const config = useSelector(state => state.config)

    const [problemOption, setProblemOption] = useState([])
    const [languageOptions, setLanguageOptions] = useState([])

    
    const fetchConfig = useCallback(() => {
        configApi.getMany()
        .then(res => {
            dispatch(configActions.getMany(res))
            console.log("config",res)
        })
        .catch( errors => {
            console.log("My ERROR", errors)
        })
    },[dispatch])

    useEffect(() => {
        setProblemOption(listProblems.map(item => {
            return {
                value : item.id,
                label : item.title
            }
        }))
    },[listProblems])

    useEffect(() => {
        if(config.data === null) {
            fetchConfig();
        } else {
            setLanguageOptions(config.data.languages.map(languageItem => {
                return {value : languageItem.id, label : languageItem.name}
            }));
        }
        
    },[config, fetchConfig])

    const validationSchema = Yup.object().shape({
        problemId : Yup.string().required("Bắt buộc").nullable(),
        languageId : Yup.string().required("Bắt Buộc").nullable(),
    })

    const initialValues = {
        problemId : +idProblem || null,
        languageId : null,
        sourceCode : "// code here\n",
    }

    return (
        <Fragment>
            <Grid>
                <Cell>
                <Card classes = "ml-1">
                    <Formik
                        initialValues = {initialValues}
                        onSubmit = {props.handleSubmit}
                        validationSchema = {validationSchema}
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