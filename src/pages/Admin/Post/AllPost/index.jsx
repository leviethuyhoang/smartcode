import { Fragment, useCallback, useEffect, useState } from "react";
import { useRouteMatch } from "react-router";
import { Link } from "react-router-dom";

import HeaderPage from "components/Page/Admin/Page/HeaderPage";
import Card from "components/UI/Card";
import Cell from "components/UI/Cell";
import Search from "components/UI/Feild/Search";
import Grid from "components/UI/Grid";
import Table from "components/UI/Table/Table";
import Wrap from "components/UI/Wrap";
import PostItem from "./PostItem";
import postApi from "api/postApi";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { postActions } from "app/slice/postSlice";

const listHead = [
    {
        title : "Tiêu Đề"
    },
    {
        title : "Chuyên Mục"
    },
    {
        title : "Thời Gian"
    },
    {
        title : "Người Đăng"
    },
    {
        title : "Tình Trạng"
    },
    {
        title : "Thao Tác"
    },
]



const AllPost = (props) => {

    const match = useRouteMatch();
    const posts = useSelector(state => state.post);
    const dispatch = useDispatch();

    const [data, setData] = useState(posts.data);    

    const fetchData =  useCallback(() => postApi.getMany()
        .then(res => {
            dispatch(postActions.getMany(res['-Mo44wb8hM3NLihnNlKW']))
        })
        .catch(error => {
            console.log("error",error)
    }),[dispatch])

    useEffect(() => {
        
        if(posts.data){
            
        } else {
            fetchData();
        }
    },[fetchData, posts])

    const filterSearch = useCallback((keySearch) => {
        if(posts.data){
            setData(posts.data.filter(item => item.title.match(keySearch)));
        }
    },[posts.data])

    return (
        <Fragment>
            <HeaderPage>
                Tất Cả Bài Viết
            </HeaderPage>
            <Grid>
                <Cell>
                    <Wrap>
                        <Link className = "btn btn-primary mr-auto" to = {`${match.url}/add`}>
                            Thêm Bài Viết
                        </Link>
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
                            {data && data.map((item, key) => {
                                return (
                                    <PostItem
                                        key = {key}
                                        id = {item.id}
                                        title = {item.title}
                                        user = {item.user}
                                        category = {item.category}
                                        date_time = {item.date_time}
                                        status = {item.status}
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
export default AllPost;