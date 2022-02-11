import contestApi from "api/contestApi";
import Card from "components/UI/Card";
import Loading1 from "components/UI/Loading/Loading1";
import Paging from "components/UI/Paging";
import Table from "components/UI/Table/Table";
import useHttp from "hooks/useHttp";
import usePaging from "hooks/usePaging";
import { Fragment, useCallback, useEffect, useState } from "react";
import ContestItem from "../ContestItem";

const CurrentContest = (props) => {

    const [data, setData] = useState(null);
    const { isLoading, SendRequest } = useHttp();

    const {page, limit, offset, total} = usePaging(data?.total);
    
    const configData = (res) => {
        setData(res);
    }

    const fetchData = useCallback(() => {
        SendRequest(contestApi.getMany.bind(null,{offset, limit}),configData)
    },[SendRequest, limit, offset])

    useEffect(() => {
        fetchData();
    },[fetchData])

    return (
        <Fragment>
            <Card classes = "mt-5 min-h-90">
                { data && <Table
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
                    {data.results.map((item, key) => {
                        return (
                            <ContestItem
                                key = {key}
                                id = {item.id}
                                title = {item.title}
                                name = {item.name}
                                startTime = {item.startTime}
                                endTime = {item.endTime}
                                numberJoined = {item.numberjoined}
                            />
                        )
                    })}
                </Table>
                }
                { isLoading && <div className="flex justify-center">
                        <Loading1/>
                    </div>    
                }
                { !isLoading && !data && (
                    <div className="flex w-full">
                        <p>Hiện Không Có Kỳ Thi Nào</p>
                    </div>
                )}
            </Card>
            { data && data.results.length > 0 &&
                <Paging
                    limit = {limit}
                    page = {page}
                    total = {total}
                />
            }
        </Fragment>
    )
}
export default CurrentContest;