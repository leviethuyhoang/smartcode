import Cell from "components/UI/Cell";
import InputField from "components/UI/Feild/InputField";
import SelectField from "components/UI/Feild/SelectField";
import TextField from "components/UI/Feild/TextField";
import Grid from "components/UI/Grid";
import { FastField, Form, Formik } from "formik";


const AddAssignmentForm = (props) => {


    const initialValues = {
        name : "",
        category : '',
        content : ""
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
                            label = "Tên Bài Tập"
                            placeholder = "Nhập tên bài tập ..."
                        />
                        
                    </Cell>
                    <Cell width = "4">
                        <FastField
                            name = "category"
                            component = {SelectField}

                            label = "Danh Mục"
                            placeholder = "Chọn danh mục ..."
                        />
                    </Cell>
                    <Cell>
                        <FastField
                            name="content"
                            component={TextField}
                            
                            label = "Nội dung bài tập"
                            placeholder = "Nội dung bài tập"
                        />
                    </Cell>
                    <Cell>
                        <FastField
                            name="resolve"
                            component={TextField}
                            
                            label = "Bài Giải"
                            placeholder = "Nội dung bài giải"
                        />
                    </Cell>
                </Grid>
            </Form>
            )}}
        </Formik>
    )
}
export default AddAssignmentForm;