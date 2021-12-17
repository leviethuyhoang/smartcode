import { Fragment } from 'react';
import WrapProblem from './WrapProblem';
import { useDispatch } from 'react-redux';
import { problemActions } from 'app/slice/problemSlice';

const BoxProblem = (props) => {
  const { content, author, title ,  id} = props;
  const dispatch = useDispatch();
  const ProblemDetial = ()=>
  {
    dispatch(problemActions.showDetail(id));
    props.getShowProblemDetail(true);
  }

  return (
    <Fragment>
      <WrapProblem>
        <div className="flex items-start px-5 pt-5">
          <div className="w-full flex flex-col lg:flex-row items-center" style={{width:'100%'}}>
            <div className="lg:ml-4 text-center margin0 mt-3 lg:mt-0" style={{width:'100%'}} >
              <p to="/submittion/submit/" className="font-medium" style={{
                overflow : 'hidden',
                whiteSpace: 'pre-wrap',
                textOverflow: 'ellipsis',
                textAlign :'left',
              }}>
                {title}
              </p>
              <div className="text-gray-600 text-xs mt-0.5" style={{
                overflow : 'hidden',
                whiteSpace: 'pre-wrap',
                textOverflow: 'ellipsis',
                textAlign :'left',
              }}>
               {author}
              </div>
            </div>
          </div>
        </div>
        <div class="text-center lg:text-left p-5" style={{width:'100%',height:'5rem'}} >
          <p style={{
                overflow : 'hidden',
                textOverflow: 'ellipsis',
                textAlign :'left',
                WebkitLineClamp: '3',// số dòng muốn hiển thị
                WebkitBoxOrient: 'vertical',
                 height:'100%',
                 width:'100%',
                 display : 'WebkitBox',
              }}>
            {content}
          </p>
          </div>
        <div className="text-center lg:text-right p-5 border-t border-gray-200 dark:border-dark-5">
          <button className="btn btn-primary py-1 px-2 mr-2 " id={id}>làm bài</button>
          <button className="btn btn-outline-secondary py-1 px-2 mr-2 "  onClick={ProblemDetial} id={id}>xem chi tiết</button>
        </div>
      </WrapProblem>
    </Fragment>
  );
};

export default BoxProblem;
