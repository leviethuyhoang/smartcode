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
import contestApi from "api/contestApi";
import Loading1 from "components/UI/Loading/Loading1"
import Search from "components/UI/Feild/Search";

const AllContest = (props) => {

  const match = useRouteMatch();
  const [data, setData] = useState(null);
  const [listContest, setListContest] = useState(null);
  
  console.log(data)

  const fetchData = useCallback(() => {
      contestApi.getMany()
      .then((res) => {
        setData(res.results);
      })
      .catch(error => {
        console.log("error",error)
      })

  },[])

  useEffect(() => {
      fetchData();
  },[fetchData])

  const handleDelete = (id) => {
    setData(prev => prev.filter( item => item.id !== id ));
  }

  const filterSearch = useCallback((keySearch) => {
    if(data){
      setListContest(data.filter(item => item.title.match(keySearch)))
    }
},[data])

  return (
    <Fragment>
      <HeaderPage>TẤT CẢ KỲ THI</HeaderPage>
      <Grid>
        <Cell>
            <Wrap>
                <Link className = "btn btn-primary mr-auto" to = {`${match.url}/add`}>
                    Thêm Kỳ Thi
                </Link>
                <Search
                  filterSearch = {filterSearch}
                />
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
              {listContest && listContest.map((contest, key) => (
                  <ContestItem
                    key={key}
                    id={contest.id}
                    title = {contest.title}
                    description = {contest.description}
                    password = {contest.password}
                    startTime = {contest.startTime}
                    endTime = {contest.endTime}
                    handleDelete ={handleDelete}
                  />
                ))
              }
            </Table>
            {!listContest && 
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
