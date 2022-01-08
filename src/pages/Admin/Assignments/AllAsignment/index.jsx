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
import Loading1 from 'components/UI/Loading/Loading1';
import problemApi from 'api/problemApi';


const AllAssignments = (props) => {

    const match = useRouteMatch();

    const [data, setData] = useState(null);
    const [listProblem, setListProblem] = useState(null);


    const fetchProblem = useCallback(() => {
        problemApi.getMany()
        .then( res => {
            setData(res.results);
        })
        .catch( error => {
            console.log(error)
        })
    },[]);

    useEffect(()=>{

        const timer = setTimeout(fetchProblem(),0);

        return (
            clearTimeout(timer)
        )
    },[fetchProblem])
    
    // UI
    const filterSearch = useCallback((keySearch) => {
        if(data){
            setListProblem(data.filter(items => items.title.match(keySearch)))
        }
    },[data])
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
                    {listProblem ?
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
                            { listProblem.map((item,key) => {
                            return <AssignmentItem
                                    key = {key}
                                    fetchData = {fetchProblem}
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