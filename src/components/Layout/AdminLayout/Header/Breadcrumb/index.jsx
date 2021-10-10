import React, { Fragment } from 'react';

const Breadcrumb = () => {
  return (
    <Fragment>
      <div className="-intro-x breadcrumb mr-auto">
        <div>Application</div>
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
        <div className="breadcrumb--active">
          Dashboard
        </div>
      </div>
    </Fragment>
  );
};

export default Breadcrumb;
