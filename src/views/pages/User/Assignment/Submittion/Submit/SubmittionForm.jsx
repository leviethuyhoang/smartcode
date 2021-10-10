import Button from "components/UI/Button/Button";
import Card from "components/UI/Card";
import Cell from "components/UI/Cell";
import SelectField from "components/UI/Feild/SelectField";
import TextField from "components/UI/Feild/TextField";
import Grid from "components/UI/Grid";
import submitionApi from "api/submittionApi";
import { FastField, Field, Form, Formik } from "formik";
import { Fragment, useEffect, useState } from "react";
import { Loading } from "views/icons/Loading";


const SubmittionForm = (props) => {

    const [name,setName] = useState();

    const listLanguage = [
        {
            id : 0,
            title : 'Python'
        },
        {
            id : 1,
            title : 'C++'
        },
        {
            id : 2,
            title : 'Java'
        },
        {
            id : 3,
            title : 'Javascript'
        }
    ]

    const initialValues = {
        id : '',
        language : 1,
        souce_code : "",
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
            submitionApi.getProblem()
            .then((res)=>{
                console.log(res.data)
                setName(res.data)
            })
            .catch((errors)=> {
                console.log(errors)
            })
        }
        getProblem();

    },[setName])

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
                                <Cell width ="4">
                                    <Field
                                        name = "id"
                                        component = {SelectField}

                                        label = "Tên Bài Tập"
                                        options = {name}
                                        placeholder = "Chọn Bài Tập"
                                    />
                                </Cell>
                                <Cell width = "4">
                                    <Field  
                                        name = "language"
                                        component = {SelectField}

                                        label = "Ngôn Ngữ"
                                        options = {listLanguage}
                                        placeholder = "Chọn Ngôn Ngữ"
                                    />
                                </Cell>
                                <Cell>
                                    <FastField
                                        name = "source_code"
                                        component = {TextField}

                                        label = "Mã Nguồn"
                                        placeholder = "Nhập mã nguồn"
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