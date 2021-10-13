import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import Image from './ImageNotifications';

const Notifications = (props) => {
  return (
    <Fragment>
      <div className="cursor-pointer relative flex items-center ">
        <div className="w-12 h-12 flex-none image-fit mr-1">
          <Image/>
          <div className="w-3 h-3 bg-theme-10 absolute right-0 bottom-0 rounded-full border-2 border-white" />
        </div>
        <div className="ml-2 overflow-hidden">
          <div className="flex items-center">
            <NavLink to="/javascript:;"  className="font-medium truncate mr-5">
              {props.title}
            </NavLink>
            <div className="text-xs text-gray-500 ml-auto whitespace-nowrap">
              {props.time}
            </div>
          </div>
          <div className="w-full truncate text-gray-600 mt-0.5">
            {props.content}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Notifications;
