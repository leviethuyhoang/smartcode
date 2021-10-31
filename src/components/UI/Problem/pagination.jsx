import { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Pagination = ({ totalPost, postsPerPage , paginate }) => {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalPost / postsPerPage); i++) {
    pageNumber.push(i);
    console.log(pageNumber);
  }
  return (
    <Fragment>
      {pageNumber.map((number) => (
        <li key={number}>
          <a
            className="pagination__link pagination__link--active"
            onClick={()=>paginate(number)}
          >
            {number}
          </a>
        </li>
      ))}
    </Fragment>
  );
};

export default Pagination;
