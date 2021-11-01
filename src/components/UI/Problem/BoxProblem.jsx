import { Fragment } from 'react';
import WrapProblem from './WrapProblem';
import { useDispatch } from 'react-redux';
import {ProblemAction} from '../../../app/slice/problem-slice';

const BoxProblem = (props) => {
  const { content, author, title ,  id} = props;
  const dispatch = useDispatch();
  const ProblemDetial = ()=>
  {
    dispatch(ProblemAction.showProblemDetail({id : id}));
    props.getShowProblemDetail(true);
  }
  return (
    <Fragment>
      <WrapProblem>
        <div className="flex items-start px-5 pt-5">
          <div className="w-full flex flex-col lg:flex-row items-center">
            <div className="w-16 h-16 image-fit">
              <img
                alt="Icewall Tailwind HTML Admin Template"
                className="rounded-full"
                src="dist/images/profile-11.jpg"
              />
            </div>
            <div className="lg:ml-4 text-center lg:text-left mt-3 lg:mt-0">
              <p to="/submittion/submit/" className="font-medium">
                {title}
              </p>
              <div className="text-gray-600 text-xs mt-0.5">
               {author}
              </div>
            </div>
          </div>
        </div>
        <div class="text-center lg:text-left p-5">
          <div>
            {content}
          </div>
          </div>
        <div className="text-center lg:text-right p-5 border-t border-gray-200 dark:border-dark-5">
          <button className="btn btn-primary py-1 px-2 mr-2 " id={id}>làm bài</button>
          <button className="btn btn-outline-secondary py-1 px-2 mr-2 "  onClick={ProblemDetial} >xem chi tiết</button>
        </div>
      </WrapProblem>
    </Fragment>
  );
};

export default BoxProblem;
