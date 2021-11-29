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
import useHttp from "hooks/useHttp";

const AllPost = (props) => {

    const match = useRouteMatch();
    const {sendRequest } = useHttp();
    const posts = useSelector(state => state.post);
    const dispatch = useDispatch();

    const [data, setData] = useState(posts.data);    

    const configData = useCallback((res) => {
        const result = Object.values(res);
        if(result[0] !== null){
            dispatch(postActions.getMany(Object.values(res)))
        }
    },[dispatch])

    const fetchData = useCallback(() => {
        sendRequest(postApi.getMany,configData)
    },[configData, sendRequest])

    useEffect(() => {
        if(posts.data === null){
            fetchData();
        }
    },[fetchData, posts.data])

    const filterSearch = useCallback((keySearch) => {
        console.log("filter",posts.data)
        if(posts.data !== null){
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
                            listHead = {[
                                {
                                    title : "Tiêu Đề"
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
                            ]}
                        >
                            {data && data.map((item, key) => {
                                return (
                                    <PostItem
                                        key = {key}
                                        id = {item.id}
                                        title = {item.title}
                                        user = {item.user}
                                        published = {item.published}
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