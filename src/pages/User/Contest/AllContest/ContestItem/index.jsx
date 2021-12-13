import { useRouteMatch } from "react-router-dom";
import { Link } from "react-router-dom";

const LessonItem = (props) => {

    const match = useRouteMatch();

    return (
        <tr className = "zoom-in intro-x">
            <td className = "w">
                <Link to = {`${match.url}/${props.id}`} className="text-gray-600 text-xs whitespace-nowrap mt-0.5">
                    <p className = "whitespace-nowrap text-center">{props.name}</p>
                </Link>
            </td>
            <td className = "">
                <div className="text-gray-600 text-xs whitespace-nowrap mt-0.5">
                    <p className = "whitespace-nowrap text-center">{props.start_time}</p>
                </div>
            </td>
            <td className = "">
                <div className="text-gray-600 text-xs whitespace-nowrap mt-0.5">
                    <p className = "whitespace-nowrap text-center">{props.deadline}</p>
                </div>
            </td>
            <td className = "">
                <div className="text-gray-600 text-xs whitespace-nowrap mt-0.5">
                    <p className = "whitespace-nowrap text-center">{props.quantity_participants}</p>
                </div>
            </td>
            
            <td className = "">
                <div className="text-gray-600 text-xs whitespace-nowrap mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-bookmark block mx-auto"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" /></svg>
                </div>
            </td>
        </tr>
    )
}
export default LessonItem;