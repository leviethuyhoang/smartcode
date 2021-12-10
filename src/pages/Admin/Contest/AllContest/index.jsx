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
import { contestAction } from "app/slice/contestSlice";

const AllContest = (props) => {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.contest);
  const match = useRouteMatch();
  const [allContest, setAllContest] = useState(show.data);
  const [data , setData ] = useState(false);
  
 
  const fetchData = useCallback(() => {
      contestApi.getMany()
      .then((res) => {
        const result = Object.values(res);
        console.log('result',result);
        if(result[0] === null)
        {
          setData(false);
          return;
        }       
        dispatch(contestAction.getMany(result))
      })
      .catch(error => {
        console.log("error",error)
      })
  },[dispatch])

useEffect(() => {
  if(show.data === null){
    fetchData();
  } else {
    setAllContest(show.data);
    setData(true);
  }
},[fetchData, show.data])

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
                  title: "Người Tạo",
                },
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
                  title: "Ngày Tạo",
                },
                {
                  title: "Cập Nhật",
                },
                {
                  title: "Thao Tác",
                },
              ]}
            >
              {!data&&<p>no data</p>}
              {data&&allContest.map((contest, key) => (
                  <ContestItem
                    key={key}
                    id={contest.id}
                    user={contest.user}
                    name={contest.name}
                    start_time={contest.start_time}
                    end_time={contest.end_time}
                    create_time={contest.create_time}
                    last_update_time={contest.last_update_time}
                  />
                ))}
            </Table>
          </Card>
        </Cell>
      </Grid>
    </Fragment>
  );
};
export default AllContest;
