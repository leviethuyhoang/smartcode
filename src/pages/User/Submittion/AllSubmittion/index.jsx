import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { submittionActions } from "app/slice/submittionSlice";
import { Fragment, useCallback, useEffect, useState } from "react";

import HeaderPage from "components/Page/Admin/Page/HeaderPage";
import Card from "components/UI/Card";
import Cell from "components/UI/Cell";
import Grid from "components/UI/Grid";
import SubmmittionItem from "./SubmittionItem";
import submitionApi from "api/submittionApi";
import Table from "components/UI/Table/Table";
import useHttp from "hooks/useHttp";
import Wrap from "components/UI/Wrap";
import Search from "components/UI/Feild/Search";
import Loading1 from "components/UI/Loading/Loading1";


const AllSubmittion = (props) => {

    const {sendRequest} = useHttp();
    
    
    const submittion = useSelector(state => state.submittion);
    const dispatch = useDispatch();
    
    const [listSubmittion, setListSubmittion] = useState(null)
    
    const configSubmittion = useCallback((res) => {
        dispatch(submittionActions.getMany(res))
    },[dispatch])

    const fetchSubmittion = useCallback(() => {
        submitionApi.getMany()
        .then(res => {
            console.log("res",res)
            configSubmittion(res.results)
        })
        .catch(error => {
            console.log("error",error)
        })
    },[configSubmittion])

    useEffect(()=> {
        if(submittion.data === null){
            fetchSubmittion();
        } else {
            setListSubmittion(submittion.data)
        }
    },[fetchSubmittion, sendRequest, submittion.data])

    const filterSearch = useCallback((keySearch) => {
        const allSubmitton = submittion.data;
        if(allSubmitton){
            setListSubmittion(allSubmitton.filter(item => item.userId.match(keySearch)))
        }
    },[submittion.data])
console.log("all",listSubmittion)
    return (
        <Fragment>
            <HeaderPage>
                Bảng Kết Quả
            </HeaderPage>
            <Grid mt = "5">
                <Cell>
                    <Wrap>
                        <Search
                            classes = "ml-auto"
                            filterSearch = {filterSearch}
                        />
                    </Wrap>
                </Cell>
                <Cell >
                    <Card >
                    
                    {listSubmittion ?
                    <Table
                        listHead = {[
                            {
                                title : "Coder"
                            },
                            {
                                title : "Thời Gian"
                            },
                            {
                                title : "Bài Tập"
                            },
                            {
                                title : "Ngôn Ngữ"
                            },
                            {
                                title : "Kết Quả"
                            },
                            {
                                title : "Xem"
                            },
                        ]}
                    >
                         {listSubmittion.map((item,key) => {
                            return  <SubmmittionItem
                                key = {key}
                                id = {item.id}
                                languageId = {item.languageId}
                                problem = {item.problem}
                                userName = {item.user.username}
                                results = {item.results}
                                createAt = {item.createAt}
                            />
                        })}
                    </Table>
                    :
                    <div className = "flex justify-center">
                        <Loading1/>
                    </div>
                    }
                    
                    </Card>
                </Cell>
            </Grid>
        </Fragment>
    )
}
export default AllSubmittion;