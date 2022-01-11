import { GetProblem } from "app/slice/problemSlice";
import HeaderPage from "components/Page/Admin/Page/HeaderPage";
import Card from "components/UI/Card";
import Cell from "components/UI/Cell";
import Search from "components/UI/Feild/Search";
import Grid from "components/UI/Grid";
// import Toastify from "components/UI/Notification/Toastify";
import Wrap from "components/UI/Wrap";
import useHttp from "hooks/useHttp";
import { useEffect, useState } from "react";
import { Fragment, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import AsignmentItem from "./AsignmentItem";

const AllAssignment = (props) => {

    const dispatch = useDispatch();
    const problems = useSelector(state => state.problem);
    const [listProblems, setListProblem] = useState([]);

    const { SendRequest } = useHttp();

    const fetchProblem = useCallback(() => {
        dispatch(GetProblem(SendRequest));
    },[SendRequest, dispatch]);

    useEffect(()=>{
        if(problems.data === null){
            fetchProblem();
        }
    },[fetchProblem, problems.data])

    const filterSearch = useCallback((keySearch) => {
        if(problems.data !== null){
            setListProblem(problems.data.filter( problem => problem.title.match(keySearch)))
        }
    },[problems.data])
    console.log("allProblem", listProblems)

    return (
        <Fragment>
            <HeaderPage>
                TẤT CẢ BÀI TẬP
            </HeaderPage>
            <Grid>
                <Cell>
                    <Wrap>
                        <Search
                            classes = "ml-auto"
                            filterSearch = {filterSearch}
                        />
                    </Wrap>
                </Cell>
                <Cell>
                    <Card>
                        <Grid>
                            {
                                listProblems.map((item, key) => {
                                    return <Cell width = {4} key = {key}>
                                        <AsignmentItem
                                            id = {item.id}
                                            title = {item.title}
                                            description = {item.description}
                                        />
                                    </Cell>
                                })
                            }
                        </Grid>
                    </Card>
                </Cell>
            </Grid>
        </Fragment>
    )
}
export default AllAssignment;