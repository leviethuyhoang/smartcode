import { Fragment, useCallback, useEffect, useState } from 'react'
import { useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';

import HeaderPage from 'components/Page/Admin/Page/HeaderPage';
import Grid from 'components/UI/Grid';
import Wrap from 'components/UI/Wrap';
import Cell from 'components/UI/Cell';
import Search from 'components/UI/Feild/Search';
import Table from 'components/UI/Table/Table';
import AssignmentItem from './AssignmentItem';
import Card from 'components/UI/Card';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import useHttp from 'hooks/useHttp';
import problemApi from 'api/problemApi';
import { problemActions } from 'app/slice/problemSlice';


const AllAssignments = (props) => {

    const match = useRouteMatch();

    const problems = useSelector(state => state.problem);
    const dispatch = useDispatch();
    const { sendRequest } = useHttp();
    const [data, setData] = useState(problems.data);

    const configData = useCallback((res) => {
        const result = Object.values(res)
        dispatch(problemActions.getMany(result));
    },[dispatch])

    const fetchProblem = useCallback(() => {
        sendRequest(problemApi.getMany,configData);
    },[configData, sendRequest]);

    useEffect(()=>{
        if(problems.data === null){
            fetchProblem();
        }
    },[fetchProblem, problems.data])
    
    const filterSearch = useCallback((keySearch) => {
        const getProblems = problems.data;
        if(getProblems){
            setData(getProblems.filter(items => items.user.match(keySearch)))
        }
    },[problems.data])

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
                    <Card>
                        <Table
                            listHead = {[
                                {
                                    title : "Tên",
                                },
                                {
                                    title : "Người Đăng",
                                },
                                {
                                    title : "Testcase",
                                },
                                {
                                    title : "Tình Trạng",
                                },
                                {
                                    title : "Thao Tác",
                                },
                            ]}
                        >
                            {data && data.map((item,key) => {
                            return <AssignmentItem
                                    key = {key}
                                    id = {item.id}
                                    name = {item.name}
                                    user = {item.user}
                                    testcase_quantity = {item.testcase_quantity}
                                    published = {item.published}
                                />
                            })}
                        </Table>
                    </Card>
                </Cell>
            </Grid>
        </Fragment>
    )
}
export default AllAssignments;