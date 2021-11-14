import { Fragment } from "react";
import { useRouteMatch } from "react-router";
import { Link } from "react-router-dom";


import Cell from "components/UI/Cell";
import Wrap from "components/UI/Wrap";
import AddPostForm from "./AddPostForm";
import Grid from "components/UI/Grid";
import HeaderPage from "components/Page/Admin/Page/HeaderPage";


const AddPost = (props) => {

    const match = useRouteMatch();
    const urlBackWard = match.url.split("/").slice(0,-1).join("/");

    return (
        <Fragment>
            <HeaderPage>
                Thêm Bài Viết
            </HeaderPage>
            <Grid>
                <Cell>
                    <Wrap>
                        <Link to = {urlBackWard} className = "btn btn-primary ml-auto">
                            Tất Cả Bài Viết
                        </Link>
                    </Wrap>
                </Cell>
                <Cell>
                    <AddPostForm/>
                </Cell>
            </Grid>
        </Fragment>
    )
}
export default AddPost;