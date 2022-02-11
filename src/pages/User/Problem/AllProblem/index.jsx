import problemApi from "api/problemApi";
import HeaderPage from "components/Page/Admin/Page/HeaderPage";
import Card from "components/UI/Card";
import Cell from "components/UI/Cell";
import Search from "components/UI/Feild/Search";
import Grid from "components/UI/Grid";
import Loading1 from "components/UI/Loading/Loading1";
import Paging from "components/UI/Paging";
import Wrap from "components/UI/Wrap";
import usePaging from "hooks/usePaging";
import { useEffect, useState } from "react";
import { Fragment, useCallback } from "react";
import AsignmentItem from "./AsignmentItem";

const AllAssignment = (props) => {

    const [data, setData] = useState(null);
    const [listProblems, setListProblem] = useState(null);

    const {page, offset, limit, total} = usePaging(data?.total,);

    const fetchProblem = useCallback(() => {
        problemApi.getMany({offset, limit})
        .then( res => {
            setData(res);
        })
        .catch( error => {
            console.log(error)
        })
    },[limit, offset]);

    useEffect(()=>{
        fetchProblem();
    },[fetchProblem])

    const filterSearch = useCallback((keySearch) => {
        if(data){
            setListProblem(data.results.filter( problem => problem.title.match(keySearch)))
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
                        <Search
                            classes = "ml-auto"
                            filterSearch = {filterSearch}
                        />
                    </Wrap>
                </Cell>
                <Cell>
                    <Card classes = "min-h-90">
                        <Grid>
                            {listProblems ?
                                listProblems.map((item, key) => {
                                    return <Cell width = {4} key = {key}>
                                        <AsignmentItem
                                            id = {item.id}
                                            title = {item.title}
                                            description = {item.description}
                                        />
                                    </Cell>
                                })
                                :
                                <Cell>
                                    <div className="flex justify-center">
                                        <Loading1/>
                                    </div>
                                </Cell>
                            }
                            {
                                listProblems && listProblems.length <= 0 &&
                                <Cell>
                                    <div className="flex justify-center">
                                        <h2>Không Có Bài Tập</h2>
                                    </div>
                                </Cell>
                            }
                        </Grid>
                    </Card>
                    { listProblems && listProblems.length > 0 &&
                        <Paging
                            page = {page}
                            limit = {limit}
                            total = {total}
                        />
                    }
                </Cell>
            </Grid>
        </Fragment>
    )
}
export default AllAssignment;