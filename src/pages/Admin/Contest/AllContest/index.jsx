import { Fragment, useEffect, useState } from "react";
import { useRouteMatch } from "react-router";
import { Link } from "react-router-dom";

import HeaderPage from "components/Page/Admin/Page/HeaderPage";
import Cell from "components/UI/Cell";
import Search from "components/UI/Feild/Search";
import Grid from "components/UI/Grid";
import Wrap from "components/UI/Wrap";
import Table from "components/UI/Table/Table";
import ContestItem from "./ContestItem";
import Card from "components/UI/Card";

const DUMMY_DATA = [
    {
        id : 0,
        user : "Hoang",
        name : "Giữa Kỳ",
        start_time : "1/1/2021",
        end_time : "2/1/2121",
        create_time : "1/1/2021",
        last_update_time : "1/1/2021"
    },
    {
        id : 1,
        user : "Vip",
        name : "Thường Kỳ",
        start_time : "1/1/2021",
        end_time : "2/1/2121",
        create_time : "1/1/2021",
        last_update_time : "1/1/2021"
    },
    {
        id : 2,
        user : "Pro",
        name : "Cuối Kỳ",
        start_time : "1/1/2021",
        end_time : "2/1/2121",
        create_time : "1/1/2021",
        last_update_time : "1/1/2021"
    },
    {
        id : 3,
        user : "No",
        name : "HSG",
        start_time : "1/1/2021",
        end_time : "2/1/2121",
        create_time : "1/1/2021",
        last_update_time : "1/1/2021"
    },
    {
        id : 4,
        user : "Mot",
        name : "Thi Cho Vui",
        start_time : "1/1/2021",
        end_time : "2/1/2121",
        create_time : "1/1/2021",
        last_update_time : "1/1/2021"
    },
    {
        id : 5,
        user : "Hai",
        name : "Lên Rank",
        start_time : "1/1/2021",
        end_time : "2/1/2121",
        create_time : "1/1/2021",
        last_update_time : "1/1/2021"
    },
    {
        id : 6,
        user : "Ba",
        name : "Thi Cho Vui",
        start_time : "1/1/2021",
        end_time : "2/1/2121",
        create_time : "1/1/2021",
        last_update_time : "1/1/2021"
    },
    
]

const AllContest = (props) => {

    const match = useRouteMatch();

    const [allContest, setAllContest] = useState([]);
    const [filterList,setFilterList ] = useState([]);

    useEffect(()=>{
        setAllContest(DUMMY_DATA);
        setFilterList(DUMMY_DATA);
    },[])

    const filterSearch = (keySearch) => {
        setFilterList(allContest.filter(contest => contest.name.includes(keySearch)))
    }

    return (
        <Fragment>
            <HeaderPage>
                TẤT CẢ KỲ THI
            </HeaderPage>
            <Grid>
                <Cell>
                    <Wrap>
                        <Link className = "btn btn-primary mr-auto" to = {`${match.url}/add`}>
                            Tạo Kỳ Thi
                        </Link>
                        <Search
                          filterSearch = {filterSearch}
                        />
                    </Wrap>
                </Cell>
                <Cell>
                    <Card>

                    <Table 
                        listHead = {[
                            {
                                title : "Người Tạo"
                            },
                            {
                                title : "Tên"
                            },
                            {
                                title : "Thời Bắt Đầu"
                            },
                            {
                                title : "Thời Gian Kết Thúc"
                            },
                            {
                                title : "Ngày Tạo"
                            },
                            {
                                title : "Cập Nhật"
                            },
                            {
                                title : "Thao Tác"
                            },
                        ]}
                    >
                        {filterList.map((contest,key) => (
                            <ContestItem
                                key = {key}
                                id = {contest.id}
                                user = {contest.user}
                                name = {contest.name}
                                start_time = {contest.start_time}
                                end_time = {contest.end_time}
                                create_time = {contest.create_time}
                                last_update_time = {contest.last_update_time}
                            />
                        ))}
                    </Table>
                    </Card>
                </Cell>
            </Grid>
        </Fragment>
    )
}
export default AllContest;