import { useRouteMatch } from "react-router-dom";
import { Link } from "react-router-dom";
import ConvertDate from "util/ConvertDate";

const ContestItem = (props) => {

    const { id, title, startTime, endTime, numberJoined } = props;
    const match = useRouteMatch();

    return (
        <tr className = "zoom-in intro-x cursor-none">
            <td className = "w">
                <Link to = {`${match.url}/${id}`} className="text-gray-600 text-xs whitespace-nowrap mt-0.5">
                    <p className = "whitespace-nowrap text-center">{title}</p>
                </Link>
            </td>
            <td className = "">
                <div className="text-gray-600 text-xs whitespace-nowrap mt-0.5">
                    <p className = "whitespace-nowrap text-center">{ConvertDate.getDateNomal(startTime)}</p>
                </div>
            </td>
            <td className = "">
                <div className="text-gray-600 text-xs whitespace-nowrap mt-0.5">
                    <p className = "whitespace-nowrap text-center">{ConvertDate.getDateNomal(endTime)}</p>
                </div>
            </td>
            <td className = "">
                <div className="text-gray-600 text-xs whitespace-nowrap mt-0.5">
                    <p className = "whitespace-nowrap text-center">{numberJoined}</p>
                </div>
            </td>
        </tr>
    )
}
export default ContestItem;