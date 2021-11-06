import HeaderPage from "components/Page/Admin/Page/HeaderPage";
import Card from "components/UI/Card";
import Cell from "components/UI/Cell";
import Search from "components/UI/Feild/Search";
import Grid from "components/UI/Grid";
import Table from "components/UI/Table/Table";
import Wrap from "components/UI/Wrap";
import { Fragment } from "react";
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
        title : "Quyền"
    },
    {
        title : "Thao Tác"
    },
    
]

const DUMMY_DATA = [
    {
        id : 0,
        name : "Lê",
        real_name : "Lê",
        total_score : 150,
        role : "Admin"
    },
    {
        id : 1,
        name : "Viết",
        real_name : "Lê",
        total_score : 150,
        role : "Admin"
    },
    {
        id : 2,
        name : "Huy",
        real_name : "Lê",
        total_score : 150,
        role : "Admin"
    },
    {
        id : 3,
        name : "Hoàng",
        real_name : "Lê",
        total_score : 150,
        role : "Admin"
    },
    {
        id : 4,
        name : "Pro",
        real_name : "Lê",
        role : "Admin",
        total_score : 150,
    },
]

const AllUsers = (props) => {

    const filterSearch = (keySearch) => {

    }

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
                <Cell>
                    <Card>
                        <Table
                            listHead = {listHead}
                        >
                            {DUMMY_DATA.map((item,key)=> {
                                return (
                                    <UserItem
                                        key = {key}
                                        id  = {item.id}
                                        name = {item.name}
                                        real_name = {item.real_name}
                                        total_score = {item.total_score}
                                        role = {item.role}
                                    />
                                )
                            })}
                        </Table>
                    </Card>
                </Cell>
            </Grid>
        </Fragment>
    )
}
export default AllUsers;