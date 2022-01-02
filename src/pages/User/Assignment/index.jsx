import { Fragment, useEffect, useState, useCallback} from 'react';
import BoxProblem from 'components/UI/Problem/BoxProblem';
import WrapPagination from 'components/UI/Problem/WrapPagination';
import Pagination from 'components/UI/Problem/pagination';
import  ProblemDetail from 'components/UI/Problem/Problemdetial/Problemdetial';
import { useSelector, useDispatch } from 'react-redux';
import problemApi from 'api/problemApi';
import { problemActions } from 'app/slice/problemSlice';


const Assignment = (props) => {
    const [allProblem, setAllProblem]  = useState([{id : 1},{id : 2}]);
    const [data, setData] = useState(false);
    const dispatch = useDispatch();
    const show = useSelector(state => state.problem.data);

    const fetchData = useCallback(() => {
      problemApi.getMany()
      .then((res) => { 
        console.log('result',res);
        dispatch(problemActions.getMany(res.results))
      })
      .catch(error => {
        console.log("error",error)
      })
  },[dispatch])


    useEffect(()=>
    {
      if(show === null){
        fetchData();
      } else {
        setAllProblem(show);
        setData(true);
      }
    },[fetchData, show]);

    console.log('data',allProblem);

    const [problemDetail, setProblemDetail]=useState(false)

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(9);


    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFristPost = indexOfLastPost - postsPerPage;
    const currentPosts = allProblem.slice(indexOfFristPost,indexOfLastPost);

    const HideProblemHandler = () => {
      setProblemDetail(false);
    };

    const paginate = (pageNumber) =>
    {
        setCurrentPage(pageNumber)
    }
    const ShowProblemHandler = ()=>
    {
      setProblemDetail(true);
    }
  

  const box = currentPosts.map((problem) => (
    <BoxProblem
      key={problem.id}
      id={problem.id}
      title={problem.title}
      content={problem.description}
      author={problem.author}
      getShowProblemDetail={ShowProblemHandler}
    />
  ));
  return (
    <Fragment>
      {!data&&<p>no data</p>}
      {data && problemDetail && <ProblemDetail onClose={HideProblemHandler} />}
        <div className="content">
          <div className="grid grid-cols-12 gap-6 mt-5">
            {box}
          </div>
        </div>
        <WrapPagination>
          <Pagination totalPost={allProblem.length} postsPerPage={postsPerPage}  paginate={paginate}/>
        </WrapPagination>
    </Fragment>
  );
};

export default Assignment;
