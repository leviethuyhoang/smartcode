import { Fragment } from "react";
import { Link } from "react-router-dom";
import { useRouteMatch } from "react-router";


const AllUsers = (props) => {

    const match = useRouteMatch();
    console.log("match user : ", match.url);
    return (
        <Fragment>
            <Link to = {`${match.url}/add`}> Add User </Link>
            <h1>ALL User</h1>
        </Fragment>
    )
}
export default AllUsers;