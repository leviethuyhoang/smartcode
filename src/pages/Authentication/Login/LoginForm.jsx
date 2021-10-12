import Button from "components/UI/Button/Button";
import { Link } from "react-router-dom";
import  {FastField, Form, Formik} from "formik";
import InputField from "components/UI/Feild/InputField";
import * as Yup from "yup";
import { Loading } from "assets/icons/Loading";


const LoginForm = (props) => {

    const initialValues = {
        userName : "",
        password : "",
        server : ""
    }
    const validationSchema = Yup.object().shape({
        userName : Yup.string().required("Không được để trống"),
        password : Yup.string().required("Không được để trống")
    })
    return (
        <Formik
            initialValues = {initialValues}
            validationSchema = {validationSchema}
            onSubmit = {props.onSubmit}
        >
        {formikProps => {
            const {isSubmitting,errors} = formikProps;
            return (
            
            <div className="h-screen xl:h-auto flex py-5 xl:py-0 my-10 xl:my-0">
            <div className="my-auto mx-auto xl:ml-20 bg-white dark:bg-dark-1 xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto">
                <h2 className="intro-x font-bold text-2xl xl:text-3xl text-center xl:text-left">
                    Đăng Nhập
                </h2>
                <Form>
                    <div className="intro-x mt-8">
                        
                        <FastField
                            name = "userName"
                            component = {InputField}

                            classes = "intro-x login__input form-control py-3 px-4 border-gray-300 block"
                            placeholder = "Tên Đăng Nhập"
                        />

                        <FastField
                            name = "password"
                            component = {InputField}

                            classes = "intro-x login__input form-control py-3 px-4 border-gray-300 block mt-4"
                            placeholder = "Mật Khẩu"
                            type = "password"
                        />
                        {errors.server && <div className="pristine-error text-theme-24 mt-2">{errors.server}</div>}
                    </div>
                    <div className="intro-x flex text-gray-700 dark:text-gray-600 text-xs sm:text-sm mt-4">
                    <div className="flex items-center mr-auto">
                        <Link to = "/register" >Chưa có tài khoản ?</Link>
                    </div>
                    <Link to = "/forgot" >Quên mật khẩu ?</Link> 
                    </div>
                    <div className="intro-x mt-5 xl:mt-8 text-center">
                        <Button
                            classes = "btn btn-primary py-3 px-4 w-full xl:w-32 xl:mr-3 align-top"
                            type = "submit"
                        >
                            {isSubmitting ? <Loading width = "6" height = "6"/> : "Đăng Nhập"}
                        </Button>
                        
                    </div>
                </Form>
            </div>
            </div>
            )
        }
        }</Formik>
    )
}
export default LoginForm;