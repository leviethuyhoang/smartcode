import { Fragment } from "react";
import { useRouteMatch } from "react-router";
import { Link } from "react-router-dom";

import ButtonDelete from "components/UI/Action/Delete";
import { useDispatch } from "react-redux";
import { contestAction } from "app/slice/contestSlice";
import contestApi from "api/contestApi";

const ContestItem = (props) => {

  const {id, title, endTime, startTime} = props;
  const match = useRouteMatch();

  const dispatch = useDispatch();
  
  const handleDelete = () => {
    return new Promise((resolve, reject) => {
      console.log("ex")
      contestApi.deleteOne(id)
      .then(res => {
        console.log("res",res);
        dispatch(contestAction.deleteOne(id));
        resolve("XÓA KỲ THI THÀNH CÔNG");
      })
      .catch(error => {
        console.log("error",error);
        reject("XÓA KỲ THI THẤT BẠI");
      })
    })
  }

  return (
    <Fragment>
      <tr className={`intro-y zoom-in ${props.classes} `}>

        <td className="w-40">
          <div className="text-gray-600 text-xs whitespace-nowrap mt-0.5">
            <p className="whitespace-nowrap text-center">{title}</p>
          </div>
        </td>

        <td className="w-40">
          <div className="text-gray-600 text-xs whitespace-nowrap mt-0.5">
            <p className="whitespace-nowrap text-center">{startTime}</p>
          </div>
        </td>

        <td className="w-40">
          <div className="text-gray-600 text-xs whitespace-nowrap mt-0.5">
            <p className="whitespace-nowrap text-center">{endTime}</p>
          </div>
        </td>

        <td className="table-report__action w-40">
          <div className="text-gray-600 text-xs whitespace-nowrap mt-0.5">
            <div className="flex justify-center items-center">
              <Link
                to={`${match.url}/edit/${id}`}
                className="flex items-center mr-3"
              >
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
                  className="feather feather-check-square w-4 h-4 mr-1"
                >
                  <polyline points="9 11 12 14 22 4" />
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                </svg>{" "}
                Chỉnh Sửa
              </Link>
              <ButtonDelete 
                onConfirm = {handleDelete}
              />
            </div>
          </div>
        </td>
      </tr>
    </Fragment>
  );
};
export default ContestItem;
