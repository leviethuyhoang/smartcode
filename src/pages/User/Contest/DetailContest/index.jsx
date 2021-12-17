import submitionApi from "api/submittionApi";
import { submittionActions } from "app/slice/submittionSlice";
import HeaderPage from "components/Page/Admin/Page/HeaderPage";
import Card from "components/UI/Card";
import Loading1 from "components/UI/Loading/Loading1";
import Table from "components/UI/Table/Table";
import Tabs from "components/UI/Tabs";
import TabContent from "components/UI/Tabs/TabContent";
import TabPane from "components/UI/Tabs/TabContent/TabPane";
import TabsNav from "components/UI/Tabs/TabsNav";
import TabItem from "components/UI/Tabs/TabsNav/TabItem";
import useHttp from "hooks/useHttp";
import useTab from "hooks/useTab";
import SubmmittionItem from "pages/User/Submittion/AllSubmittion/SubmittionItem";
import { Fragment, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProblemItem from "./ProblemItem";
import RankItem from "./RankItem";

const listRank = [
    
    {
        top : 2,
        name : "Hoang1",
        submittion_quantity : "4",
        time : "20"
    },
    {
        top : 1,
        name : "Hoang",
        submittion_quantity : "5",
        time : "20"
    },
    {
        top : 4,
        name : "Hoang3",
        submittion_quantity : "2",
        time : "20"
    },
    {
        top : 3,
        name : "Hoang2",
        submittion_quantity : "3",
        time : "20"
    },
]


const DetailsContest = (props) => {

    const listproblem = useSelector(state => state.problem)
    const tabs = useTab("tab1")

    const {sendRequest} = useHttp();
    
    const submittion = useSelector(state => state.submittion)
    const dispatch = useDispatch();
    
    const [listSubmittion, setListSubmittion] = useState(null)

    const configData = useCallback((res) => {
       dispatch(submittionActions.getAll(Object.values(res)));
    },[dispatch])

    const fetchData = useCallback(() => {
        sendRequest(submitionApi.getMany,configData)
    },[configData, sendRequest])
    
    useEffect(()=> {
        if(submittion.data === null){
            fetchData();
        } else {
            setListSubmittion(submittion.data)
        }
    },[configData, fetchData, sendRequest, submittion.data])

    return (
        <Fragment>
            <div className="flex flex-row">
                <HeaderPage>
                    Chi Tiết Kỳ Thi
                </HeaderPage>

            </div>
            <Card
                classes = "mt-5"
            >
                <Tabs>
                    <TabsNav
                        classes = "justify-center"
                    >
                        <TabItem
                            name = "tab1"
                            {...tabs}
                        >
                            Đề Thi
                        </TabItem>
                        <TabItem
                            name = "tab2"
                            {...tabs}
                        >
                            Làm Bài
                        </TabItem>
                        <TabItem
                            name = "tab3"
                            {...tabs}
                        >
                            Bài Làm Cá Nhân
                        </TabItem>
                        <TabItem
                            name = "tab4"
                            {...tabs}
                        >
                            Tất Cả Bài Làm
                        </TabItem>
                        <TabItem
                            name = "tab5"
                            {...tabs}
                        >
                            Bảng Xếp Hạng
                        </TabItem>
                    </TabsNav>
                    <TabContent>
                        <TabPane
                            name = "tab1"
                            {...tabs}
                        >
                            <Table
                                listHead = {[
                                    {
                                        title : "Tên Bài Thi"
                                    },
                                    {
                                        title : "Số Giải Được"
                                    }
                                ]}
                            >
                                {listproblem.data && listproblem.data.map(item => {
                                    return <ProblemItem
                                        id = {item.id}
                                        name = {item.name}
                                    />
                                })}
                            </Table>
                        </TabPane>
                        <TabPane
                            name = "tab2"
                            {...tabs}
                        >
                            
                        </TabPane>
                        <TabPane
                            name = "tab3"
                            {...tabs}
                        >
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
                                        id = {item.id}
                                        {...item}
                                    />
                                })}
                            </Table>
                            :
                            <div className = "flex justify-center">
                                <Loading1/>
                            </div>
                            }
                        </TabPane>
                        <TabPane
                            name = "tab4"
                            {...tabs}
                        >
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
                                        id = {item.id}
                                        {...item}
                                    />
                                })}
                            </Table>
                            :
                            <div className = "flex justify-center">
                                <Loading1/>
                            </div>
                            }
                        </TabPane>
                        <TabPane
                            name = "tab5"
                            {...tabs}
                        >
                            <Table
                                listHead = {[
                                    {
                                        title : "Hạng"
                                    },
                                    {
                                        title : "Tên"
                                    },
                                    {
                                        title : "Thời Gian"
                                    },
                                    {
                                        title : "Số Bài"
                                    },
                                ]}
                            >
                                {listRank.sort((item1, item2) => {
                                    return item1.top - item2.top
                                }).map((item, key) => {
                                    return <RankItem
                                        key = {key}
                                        {...item}
                                    />
                                })}
                            </Table>
                        </TabPane>
                    </TabContent>
                </Tabs>
            </Card>
        </Fragment>
    )
}
export default DetailsContest;