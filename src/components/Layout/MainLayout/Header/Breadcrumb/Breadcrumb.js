import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = () => {
  return (
    <Fragment>
      <div className="-intro-x breadcrumb mr-auto">
        <Link to = "/assignment" className="breadcrumb--active">
            Bài Tập
        </Link>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-chevron-right breadcrumb__icon"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>  
        <Link to = "/submittion" className="breadcrumb--active">
            Làm Bài
        </Link>
      </div>
    </Fragment>
  );
};

export default Breadcrumb;
