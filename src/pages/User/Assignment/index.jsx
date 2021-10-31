import { Fragment } from 'react';
import BoxProblem from 'components/UI/Problem/BoxProblem';
import { useState } from 'react';
import WrapPagination from 'components/UI/Problem/WrapPagination';
import Pagination from 'components/UI/Problem/pagination';
import  ProblemDetail from 'components/UI/Problem/Problemdetial/Problemdetial'

const DUMMY_PROBLEM = [
  {
    id: '1',
    title: 'giai phuong trinh bac 2',
    content: ' a',
    author: 'loi',
  },
  {
    id: '2',
    title: 'giai phuong trinh bac 2',
    content: ' b',
    author: 'loi',
  },
  {
    id: 'loi',
    title: 'giai phuong trinh bac 2',
    content: ' c',
    author: 'loi',
  },
  {
    id: '4',
    title: 'giai phuong trinh bac 2',
    content: ' d',
    author: 'loi',
  },
  {
    id: '14',
    title: 'giai phuong trinh bac 2',
    content: ' e',
    author: 'loi',
  },
  {
    id: '5',
    title: 'giai phuong trinh bac 2',
    content: ' f',
    author: 'loi',
  },
   {
    id: '6',
    title: 'giai phuong trinh bac 2',
    content: ' g',
    author: 'loi',
  },
  {
    id: '7',
    title: 'giai phuong trinh bac 2',
    content: ' h',
    author: 'loi',
  },
  {
    id: '8',
    title: 'giai phuong trinh bac 2',
    content: ' y',
    author: 'loi',
  },
  {
    id: '9',
    title: 'giai phuong trinh bac 2',
    content: ' j',
    author: 'loi',
  },
  {
    id: '10',
    title: 'giai phuong trinh bac 2',
    content: ' k',
    author: 'loi',
  },
  {
    id: '11',
    title: 'giai phuong trinh bac 2',
    content: ' h',
    author: 'loi',
  },
  {
    id: '12',
    title: 'giai phuong trinh bac 2',
    content: ' l',
    author: 'loi',
  },
  {
    id: '13',
    title: 'giai phuong trinh bac 2',
    content: ' m',
    author: 'loi',
  },
  {
    id: '14',
    title: 'giai phuong trinh bac 2',
    content: ' n',
    author: 'loi',
  },
  
];
const Assignment = () => {

    const [problemDetail, setProblemDetail]=useState(false)

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostPerPage] = useState(6);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFristPost = indexOfLastPost - postsPerPage;
    const currentPosts = DUMMY_PROBLEM.slice(indexOfFristPost,indexOfLastPost);

    const ShowProblemDetail =() =>
    {
      setProblemDetail(true)
    }
    const hideCartHandler = () => {
      setProblemDetail(false);
    };

    const paginate = (pageNumber) =>
    {
        setCurrentPage(pageNumber)
    }


  const box = currentPosts.map((problem) => (
    <BoxProblem
      key={problem.id}
      id={problem.id}
      title={problem.title}
      content={problem.content}
      author={problem.author}
      onClick={ShowProblemDetail}
    />
  ));
  return (
    <Fragment>
    {problemDetail&&<ProblemDetail onClose={hideCartHandler} />}
      <div className="content">
        <div className="grid grid-cols-12 gap-6 mt-5">
          {box}
        </div>
      </div>
      <WrapPagination>
        <Pagination totalPost={DUMMY_PROBLEM.length} postsPerPage={postsPerPage} paginate={paginate}/>
      
        </WrapPagination>
    </Fragment>
  );
};
export default Assignment;
