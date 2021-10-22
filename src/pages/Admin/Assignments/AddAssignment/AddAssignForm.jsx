import Button from "components/UI/Button/Button";
import Cell from "components/UI/Cell";
import InputField from "components/UI/Feild/InputField";
import ReactSelect from "components/UI/Feild/ReactSelect";
import TextField from "components/UI/Feild/TextField";
import Grid from "components/UI/Grid";
import Switch from "components/UI/Switch";
import { FastField, Field, FieldArray, Form, Formik } from "formik";
import { Fragment } from "react";
import { useHistory } from "react-router";

const options = [
    {label : "1",value : "a"},
    {label : "2",value : "b"},
    {label : "3",value : "c"},
    {label : "4",value : "d"},
    {label : "5",value : "e"},
    {label : "6",value : "f"},
]

const AddAssignmentForm = (props) => {

    const history = useHistory();

    const handleCancel = (e) => {
        e.preventDefault();
        history.goBack();
    }

    const handleSubmit = (values) => {
        alert("Submitting : ", {values})
    }

    const initialValues = {
        name : "",
        category : '',
        content : "",
        time_limit : "1.00",
        memory_limit : "128",
        types : [],
        published : false,
        testcases : [],
        input : "",
        output : ""
    }

    return (
        <Fragment>
        
        <Formik
            initialValues = {initialValues}
            onSubmit = {handleSubmit}
        >
            {formikProps => {
                const {values} = formikProps;
                console.log(values)
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

                            options = {options}
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

                            lable = "Xuất Bản"
                        />
                    </Cell>
                    
                    <Cell>
                        <FastField
                            name="content"
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
                    <Cell >
                    <FieldArray
                        name="testcases"
                        render = { arrayHelpers => (
                            <Fragment>
                                <label className="form-label mx-auto"><b> TESTCASE</b></label><br />
                                {values.testcases && values.testcases.length > 0 ? (
                                    <Fragment>
                                        {values.testcases.map((friend, index) => (
                                            <Grid key = {index} index = {index}>
                                                <Cell width = "4">
                                                    <Field name={`testcases.${index}.input`} component = {TextField} label = {index === 0 ? "Input" : null} rows = "1"/>
                                                </Cell>
                                                <Cell width = "4">
                                                    <Field name={`testcases.${index}.output`} component = {TextField} label = {index === 0 ? "Output" : null} rows = "1"/>
                                                </Cell>
                                                <Cell width = "2">
                                                    <Button classes = {`btn-outline-danger w-16 mr-2 mt-${index === 0 ? '10' : '3'}`} onClick={() => arrayHelpers.remove(index)}>
                                                        Xóa
                                                    </Button>
                                                    <Button classes = {`btn-outline-primary w-16 mr-2 mt-${index === 0 ? '10' : '3'}`} onClick={() => arrayHelpers.insert(index,'')}>
                                                        Thêm
                                                    </Button>

                                                </Cell>
                                            </Grid>
                                        ))}
                                        
                                    </Fragment>
                                    ) : (
                                        <Button classes = "btn-elevated-rounded-primary w-32 " onClick={() => arrayHelpers.push('')}>Thêm Testcase</Button>
                                )}
                            </Fragment>
                            )}
                    />
                    </Cell>
                    <Cell>
                        <FastField
                            name="resolve"
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
        </Fragment>
    )
}
export default AddAssignmentForm;