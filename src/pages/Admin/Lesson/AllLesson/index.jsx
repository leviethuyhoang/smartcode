import lessonApi from "api/lessonApi";
import { lessActions } from "app/slice/lessonSlice";
import HeaderPage from "components/Page/Admin/Page/HeaderPage";
import Card from "components/UI/Card";
import Cell from "components/UI/Cell";
import Search from "components/UI/Feild/Search";
import Grid from "components/UI/Grid";
import Loading1 from "components/UI/Loading/Loading1";
import Table from "components/UI/Table/Table";
import Wrap from "components/UI/Wrap";
import useHttp from "hooks/useHttp";
import { Fragment, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import LessonItem from "./LessonItem";


const AllLesson = (props) => {

    const match = useRouteMatch();

    const lessons = useSelector(state => state.lesson)
    const dispatch = useDispatch();

    const { sendRequest } = useHttp();
    
    const [data, setData] = useState(lessons.data); 

    const configData = useCallback((res) => {
        const result = Object.values( res);
        dispatch(lessActions.getMany(result))
    },[dispatch])

    const fetchLesson = useCallback(() => {
        sendRequest(lessonApi.getMany,configData)
    },[configData, sendRequest])

    useEffect(()=> {
        if(lessons.data === null){
            fetchLesson();
        }
    },[fetchLesson, lessons.data])

    const filterSearch = useCallback((keySearch)=> {
        const result = lessons.data;
        console.log("réult",result)
        if(result !== null){
            setData(result.filter(item => item.name.match(keySearch)))
        }
    },[lessons.data])

    return (
        <Fragment>
            <HeaderPage>
                Tất Cả Nhóm Bài
            </HeaderPage>
            <Grid>
                <Cell>
                    <Wrap>
                        <Link to = {`${match.url}/add`} className = "btn btn-primary mr-auto">
                            Thêm Nhóm Bài
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
                                    title : "#"
                                },
                                {
                                    title : "Tên"
                                },
                                {
                                    title : "Thao Tác"
                                },
                            ]}
                        >
                            { data.map((item,index) => {
                                return <LessonItem
                                    key = {index}
                                    id = {item.id}
                                    index = {index}
                                    name = {item.name}
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
export default AllLesson;