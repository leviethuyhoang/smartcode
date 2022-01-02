import { Fragment, useCallback, useEffect, useState } from "react";
import { useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import HeaderPage from "components/Page/Admin/Page/HeaderPage";
import Cell from "components/UI/Cell";
import Grid from "components/UI/Grid";
import Wrap from "components/UI/Wrap";
import Table from "components/UI/Table/Table";
import ContestItem from "./ContestItem";
import Card from "components/UI/Card";
import { useSelector, useDispatch } from "react-redux";
import contestApi from "api/contestApi";
import Loading1 from "components/UI/Loading/Loading1"
import { GetContest } from "app/slice/contestSlice";

const AllContest = (props) => {

  const dispatch = useDispatch();
  const match = useRouteMatch();
  const listContest = useSelector((state) => state.contest);
  const [allContest, setAllContest] = useState(null);
  
 
  const fetchData = useCallback(() => {
      contestApi.getMany()
      .then((res) => {
        console.log("res",res)
        dispatch(GetContest(res.results))
      })
      .catch(error => {
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

  return (
    <Fragment>
      <HeaderPage>TẤT CẢ KỲ THI</HeaderPage>
      <Grid>
        <Cell>
          <Wrap>
            <Link className="btn btn-primary mr-auto" to={`${match.url}/add`}>
              Tạo Kỳ Thi
            </Link>
          </Wrap>
        </Cell>
        <Cell>
          <Card>
            <Table
              listHead={[
                {
                  title: "Tên",
                },
                {
                  title: "Thời Bắt Đầu",
                },
                {
                  title: "Thời Gian Kết Thúc",
                },
                {
                  title: "Thao Tác",
                },
              ]}
            >
              {allContest && allContest.map((contest, key) => (
                  <ContestItem
                    key={key}
                    id={contest.id}
                    title = {contest.title}
                    description = {contest.description}
                    password = {contest.password}
                    startTime = {contest.startTime}
                    endTime = {contest.endTime}
                  />
                ))
              }
            </Table>
            {!allContest && 
                <div className="flex flex-row justify-center w-full">
                    <Loading1/>
                </div>}
          </Card>
        </Cell>
      </Grid>
    </Fragment>
  );
};
export default AllContest;
