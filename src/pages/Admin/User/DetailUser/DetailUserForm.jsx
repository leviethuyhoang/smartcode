import usertApi from "api/userApi";
import Card from "components/UI/Card";
import Cell from "components/UI/Cell";
import ChoseAvatar from "components/UI/ChoseAvatar";
import Grid from "components/UI/Grid";
import Toastify from "components/UI/Notification/Toastify";
import { Field, Form, Formik } from "formik";
import { Fragment, useCallback, useEffect, useState } from "react";
import { Switch } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";


const DetailUserForm = (props) => {

    const params = useParams();
    const [detailUser, setDetailUser] = useState({
        id : '',
        email : '',
        username : '',
        avatar : "https://toigingiuvedep.vn/wp-content/uploads/2021/01/hinh-anh-cute-de-thuong.jpg",
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

    return (
        <Fragment>
            <Fragment>
            <Formik
                initialValues = {detailUser}
                enableReinitialize = {true}
            >
                {formikProps => {
                    const {values} = formikProps;
                    
                    return (
                        <Card>
                            <Form>
                            <Grid>
                                <Cell width = {4}>
                                    <Field
                                        name = "avatar"
                                        component = {ChoseAvatar}
                                    />
                                </Cell>
                                <Cell width = {4} classes = "flex flex-row items-center justify-start mt-3">
                                    <div className = "flex flex-col justify-start h-auto">
                                        <div className="w-24 sm:w-40 truncate sm:whitespace-normal font-medium text-lg">{values.username}</div>
                                        <div className="mt-6 lg:mt-0 flex-1 dark:text-gray-300 dark:border-dark-5 border-t lg:border-t-0 pt-5 lg:pt-0">
                                            <div className="flex flex-col justify-center items-center lg:items-start mt-4">
                                                <div className="truncate sm:whitespace-normal flex items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail w-4 h-4 mr-2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                                                    {values.email}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Cell>
                                
                                <Cell width = {4}>
                                    <Grid gap = {2}>
                                        <Cell width = {4}>
                                            <Field
                                                name = "isAdmin"
                                                component = {Switch}

                                                label = "Quyền Quản Trị"
                                            />
                                        </Cell>
                                        <Cell width = {3}>
                                            <Field
                                                name = "isActive"
                                                component = {Switch}

                                                label = "Kích Hoạt"
                                            />
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
        </Fragment>
    )
}
export default DetailUserForm;