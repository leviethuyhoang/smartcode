import Cell from "components/UI/Cell";
import Wrap from "components/UI/Wrap";
import { Fragment } from "react";
import { useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import EditPostForm from "./EditPostForm";


const EditPost = (props) => {

    const match = useRouteMatch();
    const urlBackWard = match.url.split("/").slice(0,3).join("/");

    return (
        <Fragment>
            <Cell>
                <Wrap>
                    <Link to = {urlBackWard} className = "btn btn-primary ml-auto">
                        Tất Cả Bài Viết
                    </Link>
                </Wrap>
            </Cell>
            <Cell>
                <EditPostForm/>
            </Cell>
        </Fragment>
    )
}
export default EditPost;