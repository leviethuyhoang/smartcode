import { accountActions } from "app/slice/accountSlice";
import { Loading } from "assets/icons/Loading";
import Button from "components/UI/Button/Button";
import Card from "components/UI/Card";
import Cell from "components/UI/Cell";
import ChoseAvatar from "components/UI/ChoseAvatar";
import Grid from "components/UI/Grid";
import Switch from "components/UI/Switch";
import { Field, Form, Formik } from "formik";
import { Fragment, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

const EditUserForm = (props) => {

    const accounts = useSelector(state => state.account);
    const dispatch = useDispatch();

    const params = useParams();

    const [account, setAccount] = useState({
        name : "" ,
        real_name : "",
        avatar : "",
        admin : "",
        contest_setter : "",
        assignment_setter : "",
    });

    useEffect(()=> {
        const findAccount = () => {
            const accountList = accounts.data;
            if(accountList){
                const account = accountList.find( item => +item.id === +params.id )
                setAccount(account)
            }
        }
        findAccount();
    },[accounts.data, params.id])

    const initialValues =  {
        id : account.id,
        name : account.name ,
        real_name : account.real_name,
        avatar : "https://toigingiuvedep.vn/wp-content/uploads/2021/01/hinh-anh-cute-de-thuong.jpg",
        admin : account.admin,
        contest_setter : account.contest_setter,
        assignment_setter : account.assignment_setter,
    }

    const submitHandle = (value,{setSubmitting,setFieldError}) => {
        setTimeout(() => {
            setSubmitting(false);
        },2000)
        console.log("submit", value)
        dispatch(accountActions.updateOne(value))
    }

    return (
        <Fragment>
            <Formik
                initialValues = {initialValues}
                enableReinitialize = {true}
                onSubmit = {submitHandle}
            >
                {formikProps => {
                    const {values,isSubmitting} = formikProps;
                    return (
                        <Card>
                            <Form>
                            <Grid>
                                <Cell width = "4">
                                    <Field
                                        name = "avatar"
                                        component = {ChoseAvatar}
                                    />
                                </Cell>
                                <Cell width = "4" classes = "flex flex-row items-center justify-start mt-3">
                                    <div className = "flex flex-col justify-start h-auto">
                                        <div className="w-24 sm:w-40 truncate sm:whitespace-normal font-medium text-lg">{values.real_name}</div>    
                                        <div className="text-gray-600">{values.name}</div>
                                        <div className="mt-6 lg:mt-0 flex-1 dark:text-gray-300 dark:border-dark-5 border-t lg:border-t-0 pt-5 lg:pt-0">
                                            <div className="flex flex-col justify-center items-center lg:items-start mt-4">
                                                <div className="truncate sm:whitespace-normal flex items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail w-4 h-4 mr-2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                                                    example@example.com 
                                                </div>
                                                <div className="truncate sm:whitespace-normal flex items-center ">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram w-4 h-4 mr-2"><rect x={2} y={2} width={20} height={20} rx={5} ry={5} /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                                                    example
                                                </div>
                                                <div className="truncate sm:whitespace-normal flex items-center "> 
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter w-4 h-4 mr-2"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg>
                                                    example
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Cell>
                                
                                <Cell width = {4}>
                                    <Grid gap = {2}>
                                        <Cell width = {3}>
                                            <Field
                                                name = "admin"
                                                component = {Switch}

                                                label = "Admin"
                                            />
                                        </Cell>
                                        <Cell width = {6}>
                                            <Field
                                                name = "contest_setter"
                                                component = {Switch}

                                                label = "Tổ Chức Thi"
                                            />
                                        </Cell>
                                        <Cell width = {3}>
                                            <Field
                                                name = "assignment_setter"
                                                component = {Switch}

                                                label = "Ra Đề"
                                            />
                                        </Cell>
                                    </Grid>
                                </Cell>
                                    <Cell width = {6}>
                                        <Button type = "submit" classes = "btn-primary w-full">
                                            {isSubmitting ? <Loading/> : "LƯU" }
                                        </Button>
                                    </Cell>
                                    <Cell width = {6}>
                                        <Button classes = "btn-secondary w-full">
                                            HỦY
                                        </Button>
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