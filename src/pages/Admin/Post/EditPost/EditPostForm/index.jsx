import { Fragment } from "react"
import Card from "components/UI/Card";
import { Formik } from "formik";

const EditPostForm = (props) => {


    const initialValues = {

    }

    return (
        <Fragment>
            <Card classes = "mt-5">
                <Formik
                    initialValues = {initialValues}
                >
                    { propsFormik => {
                        return (
                            <Fragment>
                                <div>HELLO</div>
                            </Fragment>
                        )
                    }}

                </Formik>
            </Card>
        </Fragment>
    )
}
export default EditPostForm;