import { Fragment } from "react";


const ProblemItem = (props) => {

    const { name } = props;

    return (
        <Fragment>
            <tr>
                <td >
                    <div className="text-gray-600 text-xs whitespace-nowrap mt-0.5">
                        <p className = "whitespace-nowrap text-center">{name}</p>
                    </div>
                </td>
                <td >
                    <div className="text-gray-600 text-xs whitespace-nowrap mt-0.5">
                        <p className = "whitespace-nowrap text-center">{0}</p>
                    </div>
                </td>
            </tr>
        </Fragment>
    )
}
export default ProblemItem;