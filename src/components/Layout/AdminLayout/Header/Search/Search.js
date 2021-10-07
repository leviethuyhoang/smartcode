import { Fragment } from 'react';

const Search = () => {
  return (
    <Fragment>
      <div className="intro-x relative mr-3 sm:mr-6">
        <div className="search hidden sm:block">
          <input
            type="text"
            className="search__input form-control dark:bg-dark-1 border-transparent placeholder-theme-8"
            placeholder="Search..."
          />
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
            className="feather feather-search search__icon dark:text-gray-300"
          >
            <circle cx={11} cy={11} r={8} />
            <line x1={21} y1={21} x2="16.65" y2="16.65" />
          </svg>
        </div>
      </div>
    </Fragment>
  );
};

export default Search;
