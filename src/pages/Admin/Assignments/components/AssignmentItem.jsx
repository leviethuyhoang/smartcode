import { Fragment } from "react";
import { Link } from "react-router-dom";
import { useRouteMatch } from "react-router";

import ButtonDelete from "components/UI/Action/Delete";


const AssignmentItem = (props) => {

    const match = useRouteMatch();

    return (
        <Fragment>
            <tr className = "intro-x zoom-in">
                <td className = "w-40">
                    <div className="text-gray-600 text-xs whitespace-nowrap mt-0.5">
                        <p className = "whitespace-nowrap">{props.name}</p>
                    </div>
                </td>

                <td className = "w-40">
                    <div className="text-gray-600 text-xs whitespace-nowrap mt-0.5">
                        <p className = "whitespace-nowrap">{props.category}</p>
                    </div>
                </td>

                <td className = "w-40">
                    <div className="text-gray-600 text-xs whitespace-nowrap mt-0.5">
                        <p className = "whitespace-nowrap tns-ovh ??">{props.content}</p>
                    </div>
                </td>

                <td className = "table-report__action w-40">
                    <div className="text-gray-600 text-xs whitespace-nowrap mt-0.5">
                        <div className ="flex justify-center items-center">
                        <Link to = {`${match.url}/edit/${props.id}`} className="flex items-center mr-3" > <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check-square w-4 h-4 mr-1"><polyline points="9 11 12 14 22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg> Edit </Link>
                            {<ButtonDelete/>}
                        </div>
                    </div>
                </td>
            </tr>
            
        </Fragment>
    )
}
export default AssignmentItem;