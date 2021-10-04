import { Fragment } from "react";
import IconLogo from "./IconLogo";

const Logo = () => {
  return (
      <Fragment>
           <a href className="-intro-x hidden md:flex">
     <IconLogo/>
      <span className="text-white text-lg ml-3">
        Ice
        <span className="font-medium">wall</span>
      </span>
    </a>
      </Fragment>
   
  );
};

export default Logo;
