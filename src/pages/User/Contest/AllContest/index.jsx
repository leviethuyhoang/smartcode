import Table from "components/UI/Table/Table";
import Tabs from "components/UI/Tabs";
import TabContent from "components/UI/Tabs/TabContent";
import TabPane from "components/UI/Tabs/TabContent/TabPane";
import TabsNav from "components/UI/Tabs/TabsNav";
import TabItem from "components/UI/Tabs/TabsNav/TabItem";
import useTab from "hooks/useTab";
import ContestItem from "./ContestItem";
import Card from "components/UI/Card";
import { Fragment } from "react";
import HeaderPage from "components/Page/Admin/Page/HeaderPage";
import Button from "components/UI/Button/Button";

const DUMMY_DATA = [
    {
        id : 1,
        name : "Thi Lần 1",
        start_time : "12/12/2012",
        deadline : "208",
        quantity_participants : "10",
    },
    {
        id : 2,
        name : "Thi Lần 2",
        start_time : "12/12/2013",
        deadline : "204",
        quantity_participants : "10",
    },
    {
        id : 3,
        name : "Thi Lần 3",
        start_time : "12/12/2014",
        deadline : "203",
        quantity_participants : "10",
    },
    {
        id : 4,
        name : "Thi Lần 4",
        start_time : "12/12/2015",
        deadline : "207",
        quantity_participants : "5",
    },
    {
        id : 5,
        name : "Thi Lần 5",
        start_time : "12/12/2016",
        deadline : "205",
        quantity_participants : "21",
    },
    {
        id : 6,
        name : "Thi Lần 6",
        start_time : "12/12/2017",
        deadline : "200",
        quantity_participants : "80",
    },

]


const AllContest = (props) => {

    const tab1 = useTab("tab1");
    
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
                        <TabItem
                            name = "tab2"
                            {...tab1}                  
                        >
                            Kỳ Thi Đang Diễn Ra
                        </TabItem>
                        <TabItem
                            name = "tab3"
                            {...tab1}                  
                        >
                            Kỳ Thi Sắp Tới
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
                                        title : "Thời Gian"
                                    },
                                    {
                                        title : "Sô Lượng Tham Gia"
                                    },
                                    {
                                        title : "Bảng Xếp Hạng"
                                    },
                                ]}
                            >
                                {DUMMY_DATA.map(item => {
                                    return (
                                        <ContestItem
                                            key = {item.id}
                                            id = {item.id}
                                            name = {item.name}
                                            start_time = {item.start_time}
                                            deadline = {item.deadline}
                                            quantity_participants = {item.quantity_participants}
                                        />
                                    )
                                })}
                            </Table>
                        </TabPane>
                        <TabPane
                            name = "tab2"
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
                                        title : "Thời Gian"
                                    },
                                    {
                                        title : "Sô Lượng Tham Gia"
                                    },
                                    {
                                        title : "Bảng Xếp Hạng"
                                    },
                                ]}
                            >
                                {DUMMY_DATA.map(item => {
                                    return (
                                        <ContestItem
                                            key = {item.id}
                                            id = {item.id}
                                            name = {item.name}
                                            start_time = {item.start_time}
                                            deadline = {item.deadline}
                                            quantity_participants = {item.quantity_participants}
                                        />
                                    )
                                })}
                            </Table>
                        </TabPane>
                        <TabPane
                            name = "tab3"
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
                                        title : "Thời Gian"
                                    },
                                    {
                                        title : "Sô Lượng Tham Gia"
                                    },
                                    {
                                        title : "Bảng Xếp Hạng"
                                    },
                                ]}
                            >
                                {DUMMY_DATA.map(item => {
                                    return (
                                        <ContestItem
                                            key = {item.id}
                                            id = {item.id}
                                            name = {item.name}
                                            start_time = {item.start_time}
                                            deadline = {item.deadline}
                                            quantity_participants = {item.quantity_participants}
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