import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { submittionActions } from "app/slice/submittionSlice";
import { Fragment, useCallback, useEffect } from "react";

import HeaderPage from "components/Page/Admin/Page/HeaderPage";
import Card from "components/UI/Card";
import Cell from "components/UI/Cell";
import Grid from "components/UI/Grid";
import SubmmittionItem from "./SubmittionItem";
import submitionApi from "api/submittionApi";
import Table from "components/UI/Table/Table";
import useHttp from "hooks/useHttp";

let initial = false;

const AllSubmittion = (props) => {

    const {sendRequest} = useHttp();
    const submittion = useSelector(state => state.submittion);
    const dispatch = useDispatch();

    const configData = useCallback((res) => {
       dispatch(submittionActions.getAll(res));
    },[dispatch])

    useEffect(()=> {
        if(!initial){
            sendRequest(submitionApi.getMany,configData)
            initial = true
        } else {
            return ;
        }
    },[configData, sendRequest])

    return (
        <Fragment>
            <HeaderPage>
                Bảng Kết Quả
            </HeaderPage>
            <Grid mt = "5">
                <Cell >
                    <Card>
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
                        ]}
                    >
                        {submittion.data.map((item,key) => {
                            return  <SubmmittionItem
                                key = {key}
                                id = {item.id}
                                name = {item.name}
                                assignment = {item.assignment}
                                language = {item.language}
                                time = {item.time}
                                result = {item.result}
                            />
                        })}
                    </Table>
                    </Card>
                </Cell>
            </Grid>
        </Fragment>
    )
}
export default AllSubmittion;