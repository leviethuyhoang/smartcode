import { Fragment, useCallback, useEffect, useState } from 'react'
import { useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';

import HeaderPage from 'components/Page/Admin/Page/HeaderPage';
import Grid from 'components/UI/Grid';
import Wrap from 'components/UI/Wrap';
import Cell from 'components/UI/Cell';
import Search from 'components/UI/Feild/Search';
import Table from 'components/UI/Table/Table';
import ProblemItem from './ProblemItem';
import Card from 'components/UI/Card';
import Loading1 from 'components/UI/Loading/Loading1';
import problemApi from 'api/problemApi';
import Toastify from 'components/UI/Notification/Toastify';
import usePaging from 'hooks/usePaging';
import Paging from 'components/UI/Paging';


const AllAssignments = (props) => {

    const match = useRouteMatch();

    const [data, setData] = useState(null);
    const [listProblem, setListProblem] = useState(null);

    const {page, offset, limit, total} = usePaging(data?.total);

    const fetchProblem = useCallback(() => {
        problemApi.admin.getMany({offset, limit})
        .then( res => {
            setData(res);
        })
        .catch( error => {
            console.log(error);
            Toastify("error","Đã Xảy Ra Lỗi ! Vui Lòng Thử Lại")
        })
    },[limit, offset]);

    useEffect(()=>{

        const timer = setTimeout(fetchProblem(),0);

        return (
            clearTimeout(timer)
        )
    },[fetchProblem])
    
    const handleDelete = (id) => {
        setData(prev => prev.filter( item => item.id !== id))
    }

    // UI
    const filterSearch = useCallback((keySearch) => {
        if(data){
            setListProblem(data.results.filter(items => items.title.match(keySearch)))
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
                    <Card classes = "min-h-90">
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
                            return <ProblemItem
                                    key = {key}
                                    handleDelete = {handleDelete}
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
                    { listProblem && listProblem.length > 0 && 
                        <Paging
                            total = {total}
                            limit = {limit}
                            page = {page}
                        />
                    }
                </Cell>
            </Grid>
        </Fragment>
    )
}
export default AllAssignments;