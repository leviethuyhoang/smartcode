import Button from "components/UI/Button/Button";
import Card from "components/UI/Card";
import Cell from "components/UI/Cell";
import SelectField from "components/UI/Feild/SelectField";
import Grid from "components/UI/Grid";
import problemApi from "api/problemApi";
import {  FastField, Field, Form, Formik } from "formik";
import { Fragment, useEffect, useState } from "react";
import { Loading } from "assets/icons/Loading";
import submitionApi from "api/submittionApi";
import configApi from "api/configApi";
import InputFile from "components/UI/InputFile";
import CodeEditor from "components/UI/CodeEditor";


const SubmittionForm = (props) => {

    const [problems,setProblem] = useState();
    const [languages,setLanguage] = useState();

    const initialValues = {
        id : '',
        language : 0,
        source_code : "// code here\n",
        files : ""
    }
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

    useEffect(() => {
        const getProblem = () => {
            problemApi.getProblem()
            .then((res)=>{
                return res.results
            })
            .then(res => {
                const listProblem = res.map(item => { return { title: item.title, value: item.id}});
                console.log("listProblem :",listProblem)
                setProblem(listProblem);
            })
            .catch((errors)=> {
                console.log(errors)
            })
        }
        const getConfig = () => {
            configApi.getConfig()
            .then((res)=>{
                console.log("res",res)
                return res.languages
            })
            .then(res => {
                const listLanguage = res.map(item => { return { title: item.name, value: item.id}});
                console.log("listConfig :",listLanguage)
                setLanguage(listLanguage);
            })
            .catch((errors)=> {
                console.log(errors)
            })
        }
        getProblem();
        getConfig();

    },[])


    return (
        <Fragment>
            <Grid>
                <Cell>
                <Card>
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
                                        options = {problems}
                                        placeholder = "Chọn Bài Tập"
                                    />
                                </Cell>
                                <Cell width = "6">
                                    <Field  
                                        name = "language"
                                        component = {SelectField}

                                        label = "Ngôn Ngữ"
                                        options = {languages}
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