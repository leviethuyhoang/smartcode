import Table from "components/UI/Table/Table";
import Tabs from "components/UI/Tabs";
import TabContent from "components/UI/Tabs/TabContent";
import TabPane from "components/UI/Tabs/TabContent/TabPane";
import TabsNav from "components/UI/Tabs/TabsNav";
import TabItem from "components/UI/Tabs/TabsNav/TabItem";
import useTab from "hooks/useTab";
import ContestItem from "./ContestItem";
import Card from "components/UI/Card";
import { Fragment, useCallback, useEffect, useState } from "react";
import HeaderPage from "components/Page/Admin/Page/HeaderPage";
import Button from "components/UI/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import contestApi from "api/contestApi";
import { GetContest } from "app/slice/contestSlice";

const DUMMY_DATA = [
    {
        id : 1,
        title : "HELL",
    }
]

const AllContest = (props) => {

    const tab1 = useTab("tab1");

    const dispatch = useDispatch();
    const listContest = useSelector((state) => state.contest);
    const [allContest, setAllContest] = useState([]);
    
    
    const fetchData = useCallback(() => {
        contestApi.getMany()
        .then((res) => {
            dispatch(GetContest(res.results))
        })
        .catch(error => {
            dispatch(GetContest(DUMMY_DATA))
            console.log("error",error)
        })

    },[dispatch])

    useEffect(() => {
        if(listContest.data === null){
            fetchData();
        } else {
            setAllContest(listContest.data);
        }

    },[fetchData, listContest.data])
    console.log(listContest.data);
    return (
        <Fragment>
            <div className="flex flex-row">
                <HeaderPage>
                    Tất Cả Kỳ Thi
                </HeaderPage>
                <Button classes = "w-auto h-10 mt-10 btn-dark-soft ml-auto">
                    Làm mới
                    <svg xmlns="http://www.w3.org/2000/svg" width={15} height={15} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-refresh-ccw block ml-3 mr-0"><polyline points="1 4 1 10 7 10" /><polyline points="23 20 23 14 17 14" /><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" /></svg>
                </Button>
            </div>
            <Card classes = "mt-5">
                <Tabs>
                    <TabsNav>
                        <TabItem
                            name = "tab1"
                            {...tab1}                  
                        >
                            Kỳ Thi Cũ
                        </TabItem>
                    </TabsNav>
                    <TabContent>
                        <TabPane
                            name = "tab1"
                            {...tab1}
                        >
                            <Table
                                listHead = {[
                                    {
                                        title : "Tên Kỳ Thi"
                                    },
                                    {
                                        title : "Ngày Bắt Đầu"
                                    },
                                    {
                                        title : "Ngày Kết Thúc"
                                    },
                                    {
                                        title : "Đã Tham Gia"
                                    },
                                ]}
                            >
                                {allContest.map((item, key) => {
                                    return (
                                        <ContestItem
                                            key = {key}
                                            id = {item.id}
                                            title = {item.title}
                                            name = {item.name}
                                            startTime = {item.startTime}
                                        />
                                    )
                                })}
                            </Table>
                        </TabPane>
                       
                    </TabContent>
                </Tabs>
            </Card>
        </Fragment>
        
    )
}
export default AllContest;