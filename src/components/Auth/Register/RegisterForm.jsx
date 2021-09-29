import Button from "components/UI/Button";
import InputFeild from "components/UI/Feild/InputField";
import { FastField, Form, Formik } from "formik";
import { Fragment } from "react";
import { useHistory } from "react-router";
import * as Yup from "yup";
import {Loading} from "views/icons/Loading";


const RegisterForm = (props) => {

    const history = useHistory()

    const handleLoginClick = ()=>{
        history.push("/login")
    }

    const initialValues = {
        fullName : "",
        userName : "",
        password : "",
        passwordConfirm : ""
    }

    const validationSchema = Yup.object().shape({
        fullName : Yup
            .string()
            .required("Không được để trống"),
        userName : Yup
            .string()
            .required("Không được để trống")
            .min(6,"Ít nhất 6 ký tự")
            .max(15,'Nhiều nhất 15 ký tự')
            .test('Unique User Name','Tên người dùng đã được sử dụng', // <- key, message
                function (value) {
                    console.log("test");
                    // test, sau này sẽ gắn API
                    if(value === "admin")
                        return false;
                    return true;
                }
            ),
        password : Yup
            .string()
            .required()
            .required("Không được để trống")
            .min(8,"Ít nhất 8 ký tự"),
        passwordConfirm : Yup
            .string()
            .oneOf([Yup.ref('password'),null],"Mật khẩu không khớp")
            .required("Không được để trống")
    })

    return (
        <Formik
            initialValues = {initialValues}
            validationSchema = {validationSchema}
            onSubmit = {props.onSubmit}
        >
        {formikProps => {
            const {isSubmitting } = formikProps;
        return(
            <Fragment>
                <div className="h-screen xl:h-auto flex py-5 xl:py-0 my-10 xl:my-0">
                <div className="my-auto mx-auto xl:ml-20 bg-white dark:bg-dark-1 xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto">
                    <h2 className="intro-x font-bold text-2xl xl:text-3xl text-center xl:text-left">
                        Đăng Ký
                    </h2>
                    <Form>
                    <div className="intro-x mt-8">
                        <FastField
                            name = "fullName"
                            component = {InputFeild}

                            classes = "intro-x login__input form-control py-3 px-4 border-gray-300 block mt-4"
                            placeholder = "Tên Đầy Đủ"
                        />
                        <FastField
                            name = "userName"
                            component = {InputFeild}

                            classes = "intro-x login__input form-control py-3 px-4 border-gray-300 block mt-4"
                            placeholder = "Tên Người Dùng"
                        />
                        <FastField
                            name = "password"
                            component = {InputFeild}

                            classes = "intro-x login__input form-control py-3 px-4 border-gray-300 block mt-4"
                            placeholder = "Mật Khẩu"
                            type = "password"
                        />
                        
                        <FastField
                            name = "passwordConfirm"
                            component = {InputFeild}

                            classes = "intro-x login__input form-control py-3 px-4 border-gray-300 block mt-4"
                            placeholder = "Xác Nhận Mật Khẩu"
                            type = "password"
                        />
                        
                    </div>
                    
                    <div className="intro-x mt-5 xl:mt-8 text-center xl:text-left">
                        <Button
                            classes ="btn btn-primary py-3 px-4 w-full xl:w-32 xl:mr-3 align-top"
                            // onClick = {handleRegisterClick}
                            type = "submit"
                        >
                            {isSubmitting ? <Loading width = "6" height = "6"/> :" Đăng Ký" }
                        </Button>
                        <Button
                            classes = "btn btn-outline-secondary py-3 px-4 w-full xl:w-32 mt-3 xl:mt-0 align-top"
                            onClick = {handleLoginClick}
                        >
                            Đăng Nhập
                        </Button>
                    </div>
                    </Form>
                </div>
            </div>
            </Fragment>
        )  
        }}
        </Formik>
    )
}
export default RegisterForm;