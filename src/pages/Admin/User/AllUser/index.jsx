import userApi from "api/userApi";
import HeaderPage from "components/Page/Admin/Page/HeaderPage";
import Card from "components/UI/Card";
import Cell from "components/UI/Cell";
import Search from "components/UI/Feild/Search";
import Grid from "components/UI/Grid";
import Loading1 from "components/UI/Loading/Loading1";
import Toastify from "components/UI/Notification/Toastify";
import Paging from "components/UI/Paging";
import Table from "components/UI/Table/Table";
import Wrap from "components/UI/Wrap";
import { useEffect } from "react";
import { useState } from "react";
import { Fragment, useCallback} from "react";
import { Link } from "react-router-dom";
import { useRouteMatch } from "react-router-dom/cjs/react-router-dom.min";
import UserItem from "./UserItem";
import usePaging from "hooks/usePaging";

const AllUsers = (props) => {

    const match = useRouteMatch();
    const [data, setData] = useState(null);
    const [listUser, setListUser] = useState([]);
    const {offset, limit, total} = usePaging(data?.total)

    const fetchData = useCallback(() => {
        userApi.getMany({offset , limit})
        .then( res => {
            setData(res);
        })
        .catch( error => {
            Toastify("error",'Đã Xảy Ra Lỗi')
            console.log(error)
        })

    },[limit, offset])

    useEffect( () => {
        fetchData();
    },[fetchData])
    
    const filterSearch = useCallback((keySearch) => {
        if(data){
            setListUser(data.results.filter(item => item.username.match(keySearch)))
        }
    },[data])

    return (
        <Fragment>
            <HeaderPage>
                Tất Cả Tài Khoản
            </HeaderPage>
            <Grid>
                <Cell>
                    <Wrap>
                        <Link className = "btn btn-primary mr-auto" to = {`${match.url}/add`}>
                            Tạo Tài Khoản
                        </Link>
                        <Search
                            filterSearch = {filterSearch}
                            classes = "ml-auto"
                        />
                    </Wrap>
                </Cell>
                <Cell >
                { data && <Fragment>
                    <Paging
                        total = {total}
                        limit = {limit}
                        offset = {offset}
                    />
                </Fragment>}
                    <Card classes = "min-h-screen mt-5">
                    
                        {listUser.length > 0 ?
                            <Table
                                listHead = {[
                                    {
                                        title : "Email"
                                    },
                                    {
                                        title : "Tên Tài Khoản"
                                    },
                                    {
                                        title : "Quyền Quản Trị"
                                    },
                                    {
                                        title : "Kích Hoạt"
                                    },
                                    {
                                        title : "Thao Tác"
                                    },
                                    
                                ]}
                            >
                                {listUser.map((item,key)=> {
                                    return (
                                        <UserItem
                                            key = {key}
                                            infor = {item}
                                        />
                                    )
                                })}
                            </Table>
                            :
                            <div className = "flex justify-center h-full items-center">
                                <Loading1/>
                            </div>
                            }
                        </Card>
                    { data && <Fragment>
                        <Paging
                            total = {total}
                            limit = {limit}
                            offset = {offset}
                        />
                    </Fragment>}
                </Cell>
            </Grid>
            
        </Fragment>
    )
}
export default AllUsers;