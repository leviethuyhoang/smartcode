import { Fragment } from 'react';
import BoxProblem from 'components/UI/Problem/BoxProblem';
import { useState } from 'react';
import WrapPagination from 'components/UI/Problem/WrapPagination';
import Pagination from 'components/UI/Problem/pagination';
import  ProblemDetail from 'components/UI/Problem/Problemdetial/Problemdetial';
import { useSelector, useDispatch } from 'react-redux';


const Assignment = (props) => {
    const problem = useSelector(state=>state.problem.problem);

    const [problemDetail, setProblemDetail]=useState(false)

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostPerPage] = useState(6);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFristPost = indexOfLastPost - postsPerPage;
    const currentPosts = problem.slice(indexOfFristPost,indexOfLastPost);

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
      content={problem.content}
      author={problem.author}
      onClick={ShowProblemHandler}
      
    />
  ));
  return (
    <Fragment>
    {problemDetail&&<ProblemDetail onClose={HideProblemHandler} />}
      <div className="content">
        <div className="grid grid-cols-12 gap-6 mt-5">
          {box}
        </div>
      </div>
      <WrapPagination>
        <Pagination totalPost={problem.length} postsPerPage={postsPerPage}  paginate={paginate}/>
        </WrapPagination>
    </Fragment>
  );
};
export default Assignment;
