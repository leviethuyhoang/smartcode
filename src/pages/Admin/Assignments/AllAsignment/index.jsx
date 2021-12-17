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
import problemApi from 'api/problemApi';
import { problemActions } from 'app/slice/problemSlice';
import Loading1 from 'components/UI/Loading/Loading1';


const AllAssignments = (props) => {

    const match = useRouteMatch();

    const problems = useSelector(state => state.problem);
    const dispatch = useDispatch();
    const [data, setData] = useState(problems.data);

    const configData = useCallback((res) => {
        dispatch(problemActions.getMany(res));
    },[dispatch])

    const fetchProblem = useCallback(() => {
        problemApi.getMany()
        .then( res => {
            configData(res.results)
        })
        .catch(error => {
            console.log("ERROR",error)
        })
    },[configData]);

    useEffect(()=>{
        if(problems.data === null){
            fetchProblem();
        }
    },[fetchProblem, problems.data])
    
    const filterSearch = useCallback((keySearch) => {
        const getProblems = problems.data;
        if(getProblems){
            setData(getProblems.filter(items => items.title.match(keySearch)))
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
                    <Card classes = "min-h-screen">
                    {data ?
                        <Table
                            listHead = {[
                                {
                                    title : "Tên",
                                },
                                {
                                    title : "Người Tạo",
                                },
                                {
                                    title : "Test Case",
                                },
                                {
                                    title : "Ngày Tạo",
                                },
                                {
                                    title : "Thao Tác",
                                },
                            ]}
                        >
                            { data.map((item,key) => {
                            return <AssignmentItem
                                    key = {key}
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
export default AllAssignments;