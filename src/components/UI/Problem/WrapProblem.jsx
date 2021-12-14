import { Fragment } from 'react';

const WrapProblem = (props) => {
  return (
    <Fragment>
     
        
          <div className="intro-y col-span-12 md:col-span-6 lg:col-span-4">
            <div className="box">{props.children}</div>
          </div>
        
      
    </Fragment>
  );
};

export default WrapProblem;
