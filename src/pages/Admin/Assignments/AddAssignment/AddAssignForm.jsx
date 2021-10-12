import Cell from "components/UI/Cell";
import InputField from "components/UI/Feild/InputField";
import SelectField from "components/UI/Feild/SelectField";
import TextField from "components/UI/Feild/TextField";
import Grid from "components/UI/Grid";
import { FastField, Field, Form, Formik } from "formik";


const AddAssignmentForm = (props) => {


    const initialValues = {
        name : "",
        category : '',
        content : "",
        input : "",
        output : ""
    }

    return (
        <Formik
            initialValues = {initialValues}
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
                    <Cell width = "4">
                        <Field
                            name = "category"
                            component = {SelectField}

                            label = "DẠNG BÀI"
                            placeholder = "Chọn dạng bài ..."
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
                            name = "input"
                            component = {TextField}

                            label = "INPUT"
                        />
                        
                    </Cell>
                    <Cell width = "6">
                        <FastField
                            name = "output"
                            component = {TextField}

                            label = "OUTPUT"
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
                </Grid>
            </Form>
            )}}
        </Formik>
    )
}
export default AddAssignmentForm;