import { Fragment, useCallback, useEffect, useState } from "react";

import HeaderPage from "components/Page/Admin/Page/HeaderPage";
import Card from "components/UI/Card";
import Cell from "components/UI/Cell";
import Grid from "components/UI/Grid";
import SubmmittionItem from "./SubmittionItem";
import submitionApi from "api/submittionApi";
import Table from "components/UI/Table/Table";
import Wrap from "components/UI/Wrap";
import Search from "components/UI/Feild/Search";
import Loading1 from "components/UI/Loading/Loading1";
import Button from "components/UI/Button/Button";
import usePaging from "hooks/usePaging";
import Paging from "components/UI/Paging";


const AllSubmittion = (props) => {
    
    const [data, setData] = useState(null);
    const [listSubmittion, setListSubmittion] = useState(null)

    const [isLoading, setIsLoading] = useState(false);

    const {offset, limit, page, total} = usePaging(data?.total);

    const fetchSubmittion = useCallback(() => {
        setIsLoading(true);
        submitionApi.getMany({offset, limit})
        .then(res => {
            console.log("res",res)
            setData(res)
        })
        .catch(error => {
            console.log("error",error)
        })
        .finally( _ => {
            setIsLoading(false);
        })
    },[limit, offset])

    useEffect(()=> {
        fetchSubmittion();
    },[fetchSubmittion])

    const filterSearch = useCallback((keySearch) => {
        if(data != null){
            setListSubmittion(data.results.filter(item => item.problemId.match(keySearch)))
        }
    },[data])
    
    return (
        <Fragment>
            <HeaderPage>
                Bảng Kết Quả
            </HeaderPage>
            <Grid mt = "5">
                <Cell>
                    <Wrap>
                        <Search
                            classes = "ml-auto"
                            filterSearch = {filterSearch}
                        />
                        <Button
                            classes = "btn btn-outline ml-3"
                            onClick = {fetchSubmittion}
                        >
                            LÀM MỚI
                        </Button>
                    </Wrap>
                </Cell>
                <Cell >
                    <Card classes = 'min-h-screen' >
                    
                    <Table
                        listHead = {[
                            {
                                title : "Coder"
                            },
                            {
                                title : "Thời Gian"
                            },
                            {
                                title : "Bài Tập"
                            },
                            {
                                title : "Ngôn Ngữ"
                            },
                            {
                                title : "Kết Quả"
                            },
                            {
                                title : "Xem"
                            },
                        ]}
                    >
                        { listSubmittion && <Fragment>
                                {listSubmittion.map((item,key) => {
                                    return  <SubmmittionItem
                                        key = {key}
                                        infor = {item}
                                    />
                                })}
                            </Fragment>
                        }
                    </Table>

                    {  !isLoading && listSubmittion && listSubmittion.length <= 0 &&
                        <div className="w-full text-center font-medium mt-5">
                            <h2>Không Có Bài Nộp Nào</h2>
                        </div>
                    }
                    { isLoading &&
                        <div className = "flex justify-center mt-5">
                            <Loading1/>
                        </div>
                    }
                    
                    </Card>
                    { listSubmittion && listSubmittion.length > 0 &&
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
export default AllSubmittion;