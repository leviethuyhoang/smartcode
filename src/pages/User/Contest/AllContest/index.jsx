import Tabs from "components/UI/Tabs";
import TabContent from "components/UI/Tabs/TabContent";
import TabPane from "components/UI/Tabs/TabContent/TabPane";
import TabsNav from "components/UI/Tabs/TabsNav";
import TabItem from "components/UI/Tabs/TabsNav/TabItem";
import useTab from "hooks/useTab";
import { Fragment } from "react";
import HeaderPage from "components/Page/Admin/Page/HeaderPage";
import Button from "components/UI/Button/Button";
import CurrentContest from "./CurrentContest";


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
                <Tabs>
                    <TabsNav>
                        <TabItem
                            name = "tab1"
                            {...tab1}                  
                        >
                            Kỳ Thi Đang Diễn Ra
                        </TabItem>
                    </TabsNav>
                    <TabContent>
                        <TabPane
                            name = "tab1"
                            {...tab1}
                        >
                            <CurrentContest/>
                        </TabPane>
                       
                    </TabContent>
                </Tabs>
        </Fragment>
        
    )
}
export default AllContest;