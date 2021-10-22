import { Fragment, useCallback, useEffect, useState } from 'react'
import { useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';

import HeaderPage from 'components/Page/Admin/Page/HeaderPage';
import Grid from 'components/UI/Grid';
import Wrap from 'components/UI/Wrap';
import Cell from 'components/UI/Cell';
import Search from 'components/UI/Feild/Search';
import Table from 'components/UI/Table/Table';
import AssignmentItem from './components/AssignmentItem';

const listHeadTable = [
    {
        title : "Mã",
        classes : "text-center"
    },
    {
        title : "Tên",
        classes : "text-center"
    },
    {
        title : "Người Đăng",
        classes : "text-center"
    },
    {
        title : "Testcase",
        classes : "text-center"
    },
    {
        title : "Danh Mục",
        classes : "text-center"
    },
    {
        title : "Tình Trạng",
        classes : "text-center"
    },
    {
        title : "Thao Tác",
        classes : "text-center"
    },
]
const DUMMY_DATA = [
    {
        id : 0,
        name : "Tháp Hà Nội",
        user :"Vua IT",
        category : "Đệ Quy",
        testcase_quantity : "3",
        status : false,
        actions : "delete/edit"
    },
    {
        id : 1,
        name : "Tháp Hà Nội",
        user :"Vua IT",
        category : "Đệ Quy",
        testcase_quantity : "4",
        status : true,
        actions : "delete/edit"
    },
    {
        id : 2,
        name : "Tháp Hà Nội",
        user :"Vua IT",
        category : "Đệ Quy",
        testcase_quantity : "7",
        status : true,
        actions : "delete/edit"
    },
    {
        id : 3,
        name : "Tháp Hà Nội",
        user :"Vua IT",
        category : "Đệ Quy",
        testcase_quantity : "2",
        status : true,
        actions : "delete/edit"
    },
]

const AllAssignments = (props) => {

    const match = useRouteMatch();
    const [assignments, setAssignments] = useState([]);

    useEffect(()=>{
        setAssignments(DUMMY_DATA);
    },[setAssignments])
    
    const filterSearch = useCallback((keySearch) => {
        setAssignments(DUMMY_DATA.filter(items => items.user.includes(keySearch)))
        console.log("Filter")
    },[])

    return (
        <Fragment>
            <HeaderPage>
                TẤT CẢ BÀI TẬP
            </HeaderPage>
            <Grid>
                <Cell>
                    <Wrap>
                        <Link className = "btn btn-primary mr-auto" to = {`${match.url}/add`}>
                            Thêm Bài Tập
                        </Link>
                        <Search
                          filterSearch = {filterSearch}
                        />
                    </Wrap>
                </Cell>
                <Cell>
                    <Table
                        listHead = {listHeadTable}
                    >
                        {assignments.map((item,key) => 
                            <AssignmentItem
                                key = {key}
                                id = {item.id}
                                name = {item.name}
                                user = {item.user}
                                testcase_quantity = {item.testcase_quantity}
                                category = {item.category}
                                status = {item.status}
                                content = {item.content}
                                actions = {item.actions}
                            />
                        )}
                    </Table>
                </Cell>
            </Grid>
        </Fragment>
    )
}
export default AllAssignments;