import lessonApi from "api/lessonApi";
import { lessActions } from "app/slice/lessonSlice";
import HeaderPage from "components/Page/Admin/Page/HeaderPage";
import Card from "components/UI/Card";
import Cell from "components/UI/Cell";
import Search from "components/UI/Feild/Search";
import Grid from "components/UI/Grid";
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

    const { sendRequest : fetchLesson} = useHttp();
    
    const [data,setData] = useState(lessons.data); 

    const configData = useCallback((res) => {
        console.log("res",res['-Mo4UqWubDW-uJMOvxaF'])
        dispatch(lessActions.getMany(res['-Mo4UqWubDW-uJMOvxaF']))
        setData(res['-Mo4UqWubDW-uJMOvxaF'])
    },[dispatch])

    useEffect(()=> {
        if(lessons.data === null){
            console.log("fetch")
            fetchLesson(lessonApi.getMany,configData)
        } else {
            console.log("HELLO",lessons)
        }
    },[configData, fetchLesson, lessons, lessons.data])

    const filterSearch = useCallback((keySearch)=> {
        if(lessons.data !== null)
        setData(lessons.data.filter(item => item.name.match(keySearch)))
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
                    <Card>
                    <Table
                        listHead = {[
                            {
                                title : "ID"
                            },
                            {
                                title : "Tên"
                            },
                            {
                                title : "Thao Tác"
                            },
                        ]}
                    >
                        {data && data.map((item,key) => {
                            console.log("item asd",item)
                            return <LessonItem
                                key = {key}
                                id = {item.id}
                                name = {item.name}
                            />
                        })}
                    </Table>
                    </Card>
                </Cell>
            </Grid>
        </Fragment>
    )
}
export default AllLesson;