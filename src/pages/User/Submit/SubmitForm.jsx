import {  FastField, Field, Form, Formik } from "formik";
import { Fragment, useCallback, useEffect, useState } from "react";
import { Loading } from "assets/icons/Loading";

import Button from "components/UI/Button/Button";
import Card from "components/UI/Card";
import Cell from "components/UI/Cell";
import Grid from "components/UI/Grid";
// import submitionApi from "api/submittionApi";
import CodeEditor from "components/UI/CodeEditor";
import { useDispatch  } from "react-redux";
import { useSelector } from "react-redux";
import ReactSelect from "components/UI/Feild/ReactSelect";
import configApi from "api/configApi";
import { configActions } from "app/slice/configSlice";
import { useLocation } from "react-router";
import queryString from "query-string";

const SubmitForm = (props) => {

    const { listProblems, handleSubmit } = props;

    const dispatch = useDispatch();
    const location = useLocation();

    const { id } = queryString.parse(location.search);

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

    if(id){
        props.handleChangeProblem(id);
    }

    const initialValues = {
        problemId : +id || null ,
        languageId : null,
        sourceCode : "// code here\n",
    }

    const onSubmit = (...config) => {
        handleSubmit.apply(null,config);
        
    }

    return (
        <Fragment>
            <Grid>
                <Cell>
                <Card classes = "ml-1">
                    <Formik
                        initialValues = {initialValues}
                        onSubmit = {onSubmit}
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