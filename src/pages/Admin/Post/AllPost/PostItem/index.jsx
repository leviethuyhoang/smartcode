import ButtonDelete from "components/UI/Action/Delete";
import { Fragment } from "react";
import { useRouteMatch } from "react-router";
import { Link } from "react-router-dom";


const PostItem = (props) => {

    const match = useRouteMatch();

    return (
        <Fragment>
            <tr className = "intro-y zoom-in">
                <td className = "w-4">
                    <div className="text-gray-600 text-xs whitespace-nowrap mt-0.5">
                        <p className = "whitespace-nowrap text-center">{props.title}</p>
                    </div>
                </td>
                <td className = "w-4">
                    <div className="text-gray-600 text-xs whitespace-nowrap mt-0.5">
                        <p className = "whitespace-nowrap text-center">{props.date_time}</p>
                    </div>
                </td>
                <td className = "w-4">
                    <div className="text-gray-600 text-xs whitespace-nowrap mt-0.5">
                        <p className = "whitespace-nowrap text-center">{props.user}</p>
                    </div>
                </td>
                <td className = "w-4">
                    <div className="text-gray-600 text-xs text-center items-center whitespace-nowrap mt-0.5">
                        {props.published ? <p className="text-center text-theme-10">
                             Đã Đăng
                        </p> : <p className="text-center text-theme-24">
                             Chưa Đăng
                        </p>}
                    </div>
                </td>
                <td className = "table-report__action w-40">
                    <div className="text-gray-600 text-xs whitespace-nowrap mt-0.5">
                        <div className ="flex justify-center items-center">
                        <Link to = {`${match.url}/edit/${props.id}`} className="flex items-center mr-3 " > <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check-square w-4 h-4 mr-1"><polyline points="9 11 12 14 22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg> Edit </Link>
                            {<ButtonDelete/>}
                        </div>
                    </div>
                </td>
            </tr>
        </Fragment>
    )
}
export default PostItem;