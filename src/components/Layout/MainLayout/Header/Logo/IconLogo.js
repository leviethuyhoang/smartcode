import { Fragment } from 'react';
import { Link } from 'react-router-dom';

const IconLogo = () => {
  return (
    <Fragment>
      <Link to = "/">
      <img
        alt="Icewall Tailwind HTML Admin Template"
        className="w-6"
        src="/dist/images/logo.svg"
      />
      </Link>
    </Fragment>
  );
};

export default IconLogo;
