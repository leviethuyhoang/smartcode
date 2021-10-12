import { Fragment } from "react";


const SubmmittionItem = (props) => {
    const {id,result} = props;
    return (
        <Fragment>
            <tr>
                <td>
                    {id}
                </td>
                <td>
                    {result}
                </td>
            </tr>
        </Fragment>
    )
}
export default SubmmittionItem;