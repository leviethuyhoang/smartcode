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

// const listsubmittion = [
//     {
//         id : 0,
//         userId : "",
//         user : "Hoang",
//         time : "02/06/2000",
//         problemId : 0,
//         problem : "Tính Chu Vi Hình Vuông",
//         sourceCode : 'cout << "Hello World"',
//         language : "C++",
//         timeRun : "500",
//         memory : "20",
//         result : "Hoàn Thành",
//         submittions : [
//             {
//                 input : "2",
//                 output : "8",
//                 answer : "8",
//                 result : true
//             },
//             {
//                 input : "4",
//                 output : "16",
//                 answer : "17",
//                 result : false
//             },
//             {
//                 input : "10",
//                 output : "40",
//                 answer : "40",
//                 result : true
//             },
//             {
//                 input : "0.2",
//                 output : "0.8",
//                 answer : "0",
//                 result : false
//             },
//         ]

//     },
//     {
//         id : 1,
//         userId : "",
//         user : "Hoang 1",
//         time : "01/05/2000",
//         sourceCode : 'cout << "Hello World"',
//         problemId : 0,
//         problem : "Tính Chu Vi Hình Chữ Nhật",
//         language : "C++",
//         timeRun : "500",
//         memory : "20",
//         result : "Hoàn Thành",
//         submittions : [
//             {
//                 input : "2,4",
//                 output : "12",
//                 answer : "12",
//                 result : true
//             },
//             {
//                 input : "4,4",
//                 output : "16",
//                 answer : "17",
//                 result : false
//             },
//             {
//                 input : "10,10",
//                 output : "40",
//                 answer : "40",
//                 result : true
//             },
//             {
//                 input : "0.2,0.5",
//                 output : "1.4",
//                 answer : "1",
//                 result : false
//             },
//         ]

//     }
// ]

const AllSubmittion = (props) => {

    const {sendRequest} = useHttp();
    
    
    const submittion = useSelector(state => state.submittion);
    const dispatch = useDispatch();
    
    const [listSubmittion, setListSubmittion] = useState(null)

    const configData = useCallback((res) => {
       dispatch(submittionActions.getAll(Object.values(res)));
    },[dispatch])

    const fetchData = useCallback(() => {
        sendRequest(submitionApi.getMany,configData)
    },[configData, sendRequest])
    
    useEffect(()=> {
        if(submittion.data === null){
            fetchData();
        } else {
            setListSubmittion(submittion.data)
        }
    },[configData, fetchData, sendRequest, submittion.data])

    const filterSearch = useCallback((keySearch) => {
        const allSubmitton = submittion.data;
        if(allSubmitton){
            setListSubmittion(allSubmitton.filter(item => item.user.match(keySearch)))
        }
    },[submittion.data])

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
                                {...item}
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