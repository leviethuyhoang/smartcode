import React, { Fragment } from 'react';
<<<<<<< HEAD
=======

>>>>>>> destruct-folder
const Breadcrumb = () => {
  return (
    <Fragment>
      <div className="-intro-x breadcrumb mr-auto">
<<<<<<< HEAD
        {' '}
        <a href>Application</a>{' '}
=======
        <div>Application</div>
>>>>>>> destruct-folder
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
<<<<<<< HEAD
        <a href className="breadcrumb--active">
          Dashboard
        </a>
=======
        <div className="breadcrumb--active">
          Dashboard
        </div>
>>>>>>> destruct-folder
      </div>
    </Fragment>
  );
};

export default Breadcrumb;
