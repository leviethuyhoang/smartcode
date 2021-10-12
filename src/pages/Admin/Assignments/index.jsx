import { Fragment } from 'react'
import { useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';

import HeaderPage from 'components/Page/Admin/Page/HeaderPage';
import Grid from 'components/UI/Grid';
import Wrap from 'components/UI/Wrap';
import Cell from 'components/UI/Cell';
import Search from 'components/UI/Feild/Search';
import Table from 'components/UI/Table/Table';
import AssignmentItem from './components/AssignmentItem';

const AllAssignments = (props) => {

    const match = useRouteMatch();

    const listHeadTable = [
        {
            title : "Tên",
        },
        {
            title : "Danh Mục",
        },
        {
            title : "Nội Dung",
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
            category : "Đệ Quy",
            content : "Lorem ",
            actions : "delete/edit"
        },
        {
            id : 1,
            name : "Tháp Hà Nội",
            category : "Đệ Quy",
            content : "Lorem ",
            actions : "delete/edit"
        },
        {
            id : 2,
            name : "Tháp Hà Nội",
            category : "Đệ Quy",
            content : "Lorem ",
            actions : "delete/edit"
        },
        {
            id : 3,
            name : "Tháp Hà Nội",
            category : "Đệ Quy",
            content : "Lorem ",
            actions : "delete/edit"
        },
    ]

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
                        <Search/>
                    </Wrap>
                </Cell>
                <Cell>
                    <Table
                        listHead = {listHeadTable}
                    >
                        {DUMMY_DATA.map((item,key) => 
                            <AssignmentItem
                                key = {key}
                                id = {item.id}
                                name = {item.name}
                                category = {item.category}
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