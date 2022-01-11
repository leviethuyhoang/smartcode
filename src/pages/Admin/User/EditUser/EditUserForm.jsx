import usertApi from "api/userApi";
import { Loading } from "assets/icons/Loading";
import Button from "components/UI/Button/Button";
import Card from "components/UI/Card";
import Cell from "components/UI/Cell";
import ChoseAvatar from "components/UI/ChoseAvatar";
import InputField from "components/UI/Feild/InputField";
import Grid from "components/UI/Grid";
import Toastify from "components/UI/Notification/Toastify";
import Switch from "components/UI/Switch";
import { Field, Form, Formik } from "formik";
import { Fragment, useCallback, useEffect, useState } from "react";
import { useParams } from "react-router";

const EditUserForm = (props) => {

    const params = useParams();
    const [onEditMode, setOnEditMode] = useState(false);
    const [detailUser, setDetailUser] = useState({
        id : '',
        email : '',
        password : '',
        username : '',
        avatar : "https://scontent.fdad1-3.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-5&_nc_sid=7206a8&_nc_ohc=5OEPdEIQJikAX8zPNjy&tn=m6q7MCaTqWp189Cr&_nc_ht=scontent.fdad1-3.fna&oh=00_AT_uJlPsmlXws0MibJ8PoKp-suB4jgRj9TQkP9ixsD_Rjw&oe=6200C278",
        isAdmin : false,
        isActive : false,
    });

    const fetchData = useCallback(() => {
        usertApi.getOne(params.id)
        .then( res => {
            console.log("res",res);
            setDetailUser( prev => prev = {...prev, ...res});
        })
        .catch( error => {
            Toastify("error",'Đã Xảy Ra Lỗi')
            console.log(error)
        })
    },[ params.id])

    useEffect( () => {
        fetchData();
    },[fetchData])

    const submitHandle = (...config) => {
        props.handleSubmit(...config,setOnEditMode)
    }

    return (
        <Fragment>
            <Formik
                initialValues = {detailUser}
                enableReinitialize = {true}
                onSubmit = {submitHandle}
            >
                {formikProps => {
                    const {values, isSubmitting, resetForm} = formikProps;
                    
                    return (
                        <Card>
                            <Form>
                            <Grid>
                                <Cell classes = "flex flex-col items-center justify-center h-full" width = {4}>
                                    <Field
                                        name = "avatar"
                                        component = {ChoseAvatar}

                                        onEdit = {onEditMode}
                                    />
                                </Cell>
                                <Cell width = {4} classes = "flex flex-row items-center justify-start mt-3">
                                    <div className = "flex flex-col justify-start h-auto">
                                        { onEditMode ? 
                                            <Fragment>
                                                <Field
                                                    name = "username"
                                                    component = {InputField}

                                                    label = "Tên Người Dùng"
                                                />
                                                <Field
                                                    name = "email"
                                                    component = {InputField}

                                                    label = "Email"
                                                />
                                                <Field
                                                    name = "school"
                                                    component = {InputField}

                                                    label = "Trường Học"
                                                />
                                                <Field
                                                    name = "password"
                                                    component = {InputField}

                                                    label = "Mật Khẩu"
                                                    type  = "password"
                                                />
                                            </Fragment>
                                        :
                                            <Fragment>
                                                <h1 className="font-medium">{values.username}</h1>
                                                    <div className="mt-6 lg:mt-0 flex-1 dark:text-gray-300 dark:border-dark-5 border-t lg:border-t-0 pt-5 lg:pt-0">
                                                    <div className="flex flex-col justify-center items-center lg:items-start mt-4">
                                                        <div className="truncate sm:whitespace-normal flex items-center mt-2">
                                                            <svg className="mr-3" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                                                            {values.email}
                                                        </div>
                                                        <div className="truncate sm:whitespace-normal flex items-center mt-2">
                                                            <svg className="mr-3" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>{values.school}
                                                        </div>
                                                    </div>
                                                </div>
                                            </Fragment>
                                        }
                                        
                                    </div>
                                </Cell>
                                
                                <Cell width = {4}>
                                    <Grid gap = {2}>
                                        <Cell width = {4}>
                                            <Field
                                                name = "isAdmin"
                                                component = {Switch}

                                                label = "Quyền Quản Trị"
                                                disabled = {!onEditMode}
                                            />
                                        </Cell>
                                        <Cell width = {3}>
                                            <Field
                                                name = "isActive"
                                                component = {Switch}

                                                label = "Kích Hoạt"
                                                disabled = {!onEditMode}
                                            />
                                        </Cell>
                                        <br />
                                        <Cell width = {4}>
                                            { !onEditMode ? 
                                                <Button
                                                    classes = "btn-rounded-dark w-full h-10"
                                                    onClick = {() => {setOnEditMode(prev => !prev)}}
                                                >
                                                    <span>Chỉnh Sửa </span><svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-edit block ml-2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
                                                </Button>
                                            :
                                                <div className="flex flex-col">
                                                    <Button 
                                                        type = "submit"
                                                        classes = "btn-rounded btn-primary-soft w-full h-10"
                                                    >
                                                        {
                                                            isSubmitting ?
                                                            <Loading/>
                                                            :
                                                            <Fragment>
                                                                <span>Lưu</span> <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-save ml-2"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" /><polyline points="17 21 17 13 7 13 7 21" /><polyline points="7 3 7 8 15 8" /></svg>
                                                            </Fragment>
                                                        }
                                                    </Button>
                                                    <Button 
                                                        classes = "btn-rounded btn-danger-soft w-full mt-5 h-10"
                                                        onClick = {() => {
                                                            resetForm();
                                                            setOnEditMode(false);
                                                        }}
                                                    >
                                                        <span>Hủy</span> <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash ml-2"><polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>
                                                </Button>
                                                </div>
                                            }
                                        </Cell>
                                    </Grid>
                                </Cell>
                            </Grid>
                        </Form>
                        </Card>
                    )
                }}

            </Formik>
        </Fragment>
    )
}
export default EditUserForm;