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


const AllSubmittion = (props) => {
    
    const [data, setData] = useState(null);
    const [listSubmittion, setListSubmittion] = useState(null)

    const fetchSubmittion = useCallback(() => {
        submitionApi.getMany()
        .then(res => {
            console.log("res",res)
            setData(res.results)
        })
        .catch(error => {
            console.log("error",error)
        })
    },[])

    useEffect(()=> {
        fetchSubmittion();
    },[fetchSubmittion])

    const filterSearch = useCallback((keySearch) => {
        if(data != null){
            setListSubmittion(data.filter(item => item.problemId.match(keySearch)))
        }
    },[data])
console.log("all",listSubmittion)
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
                    <Card >
                    
                    {listSubmittion ?
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
                         {listSubmittion.map((item,key) => {
                            return  <SubmmittionItem
                                key = {key}
                                infor = {item}
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
export default AllSubmittion;