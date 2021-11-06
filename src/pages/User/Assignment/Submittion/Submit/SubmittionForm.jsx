import {  FastField, Field, Form, Formik } from "formik";
import { Fragment, useCallback, useEffect } from "react";
import { Loading } from "assets/icons/Loading";

import Button from "components/UI/Button/Button";
import Card from "components/UI/Card";
import Cell from "components/UI/Cell";
import SelectField from "components/UI/Feild/SelectField";
import Grid from "components/UI/Grid";
import problemApi from "api/problemApi";
import submitionApi from "api/submittionApi";
import configApi from "api/configApi";
import InputFile from "components/UI/InputFile";
import CodeEditor from "components/UI/CodeEditor";
import useHttp from "hooks/useHttp";

import { configActions } from "app/slice/configSlice";
import { useDispatch  } from "react-redux";
import { useSelector } from "react-redux";
import { problemActions } from "app/slice/problemSlice";

let initial = false;

const SubmittionForm = (props) => {

    const {config : languages,problem} = useSelector(state => state)
    const dispatch = useDispatch();

    const {sendRequest} = useHttp();

    
    const handleSubmit = (value,{setSubmitting}) => {
        const params = {
            language_id : "70",
            source_code : value.source_code
        }
        console.log(params);
        submitionApi.submit(params)
        .then((res)=> {
            alert("Nộp Bài Thành Công !");
            setSubmitting(false);
        })
        .catch((error) => {
            alert("Đã Xãy Ra Lỗi !")
            setSubmitting(false);
        })
    }

    const configProblem = useCallback((res) => {
        const data = res["-Mna5ZmOGbn67nH2pAjJ"];
        dispatch(problemActions.getMany(data.map(item => {
            return {value : item.id,label : item.name,description : item.description}
        })));
    },[dispatch])

    const configLanguage = useCallback((res) => {
        const data = res["-Mn_j1WEg484MQpELS0z"];
        dispatch(configActions.getConfig(data))
    },[dispatch])

    useEffect(() => {
        
        if(!initial){
            const fetchData = async () => {
                await sendRequest(problemApi.getProblem,configProblem)
                await sendRequest(configApi.getConfig,configLanguage)
            }
            fetchData();
            initial = true
        } else {
            return
        }
    },[configLanguage, configProblem, sendRequest])

    const initialValues = {
        id : '',
        language : 0,
        source_code : "// code here\n",
        files : ""
    }

    return (
        <Fragment>
            <Grid>
                <Cell>
                <Card classes = "ml-1">
                    <Formik
                        initialValues = {initialValues}
                        onSubmit = {handleSubmit}
                        
                    >
                    {propsFormik => {
                        const {isSubmitting} = propsFormik;
                    return (
                        <Form>
                            <Grid>
                                <Cell width ="6">
                                    <Field
                                        name = "id"
                                        component = {SelectField}

                                        label = "Tên Bài Tập"
                                        options = {problem.data}
                                        placeholder = "Chọn Bài Tập"
                                        handleChange = {props.handleChangeProblem}
                                    />
                                </Cell>
                                <Cell width = "6">
                                    <Field  
                                        name = "language"
                                        component = {SelectField}

                                        label = "Ngôn Ngữ"
                                        options = {languages.data}
                                        placeholder = "Chọn Ngôn Ngữ"
                                    />
                                </Cell>
                                <Cell >
                                    <FastField
                                        name = "source_code"
                                        component = {CodeEditor}
                                    />
                                </Cell>
                                <Cell>
                                    <Field
                                        name = "files"
                                        component = {InputFile}

                                        multiple = {true}
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
export default SubmittionForm;