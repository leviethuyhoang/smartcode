import accountApi from "api/accountApi";
import { accountActions } from "app/slice/accountSlice";
import HeaderPage from "components/Page/Admin/Page/HeaderPage";
import Card from "components/UI/Card";
import Cell from "components/UI/Cell";
import Search from "components/UI/Feild/Search";
import Grid from "components/UI/Grid";
import Loading1 from "components/UI/Loading/Loading1";
import Table from "components/UI/Table/Table";
import Wrap from "components/UI/Wrap";
import useHttp from "hooks/useHttp";
import { Fragment, useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import UserItem from "./UserItem";

const listHead = [
    {
        title : "Tên Tài Khoản"
    },
    {
        title : "Tên Thật"
    },
    {
        title : "Điểm Tích Lũy"
    },
    {
        title : "Admin"
    },
    {
        title : "Tổ Chức Thi"
    },
    {
        title : "Ra Đề"
    },
    {
        title : "Thao Tác"
    },
    
]

// const DUMMY_DATA = [
//     {
//         id : 0,
//         name : "Lê",
//         contest_setter : true,
//         assignment_setter : false,
//         admin : false,
//         real_name : "Lê",
//         total_score : 150,
//     },
//     {
//         id : 1,
//         name : "Viết",
//         contest_setter : false,
//         assignment_setter : true,
//         admin : false,
//         real_name : "Lê",
//         total_score : 150,
//     },
//     {
//         id : 2,
//         name : "Huy",
//         contest_setter : false,
//         assignment_setter : true,
//         admin : true,
//         real_name : "Lê",
//         total_score : 150,
//     },
//     {
//         id : 3,
//         name : "Hoàng",
//         contest_setter : true,
//         assignment_setter : false,
//         admin : true,
//         real_name : "Lê",
//         total_score : 150,
//     },
//     {
//         id : 4,
//         name : "Pro",
//         contest_setter : true,
//         assignment_setter : true,
//         admin : false,
//         real_name : "Lê",
//         total_score : 150,
//     },
// ]

const AllUsers = (props) => {

    const accounts = useSelector(state => state.account);
    const dispatch = useDispatch();
    const [data, setData] = useState(accounts.data);
    const {sendRequest : getAccount} = useHttp();

    const configData = useCallback((res) => {
        const result = Object.values(res);
        dispatch(accountActions.getMany(result))
    },[dispatch])

    const fetchAccount = useCallback(() => {
        getAccount(accountApi.getMany,configData)
    },[configData, getAccount])

    useEffect(() => {
        if(accounts.data === null){
            fetchAccount();
        }
    },[accounts.data, fetchAccount])
    
    const filterSearch = useCallback((keySearch) => {
        const render = accounts.data;
        if(render){
            setData(render.filter(item => item.name.match(keySearch)))
        }
    },[accounts.data])

    return (
        <Fragment>
            <HeaderPage>
                Tất Cả Tài Khoản
            </HeaderPage>
            <Grid>
                <Cell>
                    <Wrap>
                        <Search
                            filterSearch = {filterSearch}
                            classes = "ml-auto"
                        />
                    </Wrap>
                </Cell>
                <Cell >
                    <Card classes = "min-h-screen">
                    {data ?
                        <Table
                            listHead = {listHead}
                        >
                             {data.map((item,key)=> {
                                return (
                                    <UserItem
                                        key = {key}
                                        id  = {item.id}
                                        name = {item.name}
                                        real_name = {item.real_name}
                                        total_score = {item.total_score}
                                        admin = {item.admin}
                                        contest_setter = {item.contest_setter}
                                        assignment_setter = {item.assignment_setter}
                                    />
                                )
                            })}
                        </Table>
                        :
                        <div className = "flex justify-center h-full items-center">
                            <Loading1/>
                        </div>
                        }
                    </Card>
                </Cell>
                
            </Grid>
        </Fragment>
    )
}
export default AllUsers;