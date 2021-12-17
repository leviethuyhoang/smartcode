import Cell from "components/UI/Cell";
import Grid from "components/UI/Grid";
import Table from "components/UI/Table/Table";
import Tabs from "components/UI/Tabs";
import TabContent from "components/UI/Tabs/TabContent";
import TabPane from "components/UI/Tabs/TabContent/TabPane";
import TabsNav from "components/UI/Tabs/TabsNav";
import TabItem from "components/UI/Tabs/TabsNav/TabItem";
import useTab from "hooks/useTab";
import { Fragment } from "react";

import "./style.scss"


const Profile = (props) => {

    const tabs1 = useTab('tab1')

    return (
        <Fragment>
            <Grid>
                <Cell>
                <div className="intro-y box px-5 pt-5 mt-5">
                    <div className="flex flex-col lg:flex-row border-b border-gray-200 dark:border-dark-5 pb-5 -mx-5">
                        <div className="flex flex-1 px-5 items-center justify-center lg:justify-start">
                            <div className="w-40 h-40 sm:w-24 sm:h-24 flex-none lg:w-32 lg:h-32 image-fit relative">
                            <img alt="Icewall Tailwind HTML Admin Template" className="rounded-full" src="/dist/images/profile-12.jpg" />
                            </div>
                            <div className="ml-5">
                            <div className="w-24 sm:w-40 truncate sm:whitespace-normal font-nomal text-lg">Kevin Spacey</div>
                            <div className="text-gray-600">Backend Engineer</div>
                            </div>
                        </div>
                        <div className="mt-6 lg:mt-0 flex-1 dark:text-gray-300 px-5 border-l border-r border-gray-200 dark:border-dark-5 border-t lg:border-t-0 pt-5 lg:pt-0">
                            <div className="font-medium text-center lg:text-left lg:mt-3">Contact Details</div>
                            <div className="flex flex-col justify-center items-center lg:items-start mt-4">
                            <div className="truncate sm:whitespace-normal flex items-center"> <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail w-4 h-4 mr-2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg> kevinspacey@left4code.com </div>
                            <div className="truncate sm:whitespace-normal flex items-center mt-3"> <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram w-4 h-4 mr-2"><rect x={2} y={2} width={20} height={20} rx={5} ry={5} /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg> Instagram Kevin Spacey </div>
                            <div className="truncate sm:whitespace-normal flex items-center mt-3"> <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter w-4 h-4 mr-2"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg> Twitter Kevin Spacey </div>
                            </div>
                        </div>
                        <div className="mt-6 lg:mt-0 flex-1 flex items-center justify-center px-5 border-t lg:border-0 border-gray-200 dark:border-dark-5 pt-5 lg:pt-0">
                            <div className="text-center rounded-md w-20 py-3">
                            <div className="text-gray-600">Bài Đã Làm</div>
                            <div className="font-medium text-theme-17 dark:text-theme-3 text-xl">201</div>
                            </div>
                            <div className="text-center rounded-md w-40 py-3">
                            <div className="text-gray-600">Kỳ Thi Đã Tham Gia</div>
                            <div className="font-medium text-theme-17 dark:text-theme-3 text-xl">1k</div>
                            </div>
                            <div className="text-center rounded-md w-20 py-3">
                            <div className="text-gray-600">Top</div>
                            <div className="font-medium text-theme-17 dark:text-theme-3 text-xl">492</div>
                            </div>
                        </div>
                    </div>
                    <Tabs>
                        <TabsNav>
                            <TabItem
                                name = "tab1"
                                {...tabs1}
                            >
                                Bài Tập Đã Làm
                            </TabItem>
                            <TabItem
                                name = "tab2"
                                {...tabs1}

                            >
                                Kỳ Thi Đã Tham Gia
                            </TabItem>
                        </TabsNav>
                        <TabContent>
                            <TabPane
                                name = "tab1"
                                {...tabs1}

                            >
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
                                    
                                </Table>
                                </TabPane>
                            <TabPane
                                name = "tab2"
                                {...tabs1}

                            >
                                <Table
                                    listHead = {[
                                        {
                                            title : "#"
                                        },
                                        {
                                            title : "Tên Kỳ Thi"
                                        },
                                        {
                                            title : "Số Bài Làm"
                                        },
                                        {
                                            title : "Xếp Hạng"
                                        }
                                    ]}
                                >
                                </Table>
                            </TabPane>
                        </TabContent>
                    </Tabs>
                </div> 
                </Cell>
            </Grid>
        </Fragment>
    )
}
export default Profile;