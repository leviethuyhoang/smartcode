import problemApi from "api/problemApi";
import HeaderPage from "components/Page/Admin/Page/HeaderPage";
import Cell from "components/UI/Cell";
import Grid from "components/UI/Grid";
import Loading1 from "components/UI/Loading/Loading1";
import Wrap from "components/UI/Wrap";
import { useCallback } from "react";
import { Fragment, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


const DetailAssignment = (props) => {

    const params = useParams();
    const id = params.id;
    const [assignmentDetail, setAssignmentDetail] = useState(null);

    const fetchAssignment = useCallback(() => {
        problemApi.getOne(id)
        .then( res => {
            setAssignmentDetail(res);
        })
        .catch( error => {
            console.log("error", error);
        })
    },[id])

    useEffect(() => {
        fetchAssignment();
    },[fetchAssignment])

    return (
        <Fragment>
            <HeaderPage>
                XEM BÀI TẬP
            </HeaderPage>
            <Grid>
                <Cell>
                    <Wrap>
                        <Link to = "/assignment" className = "btn btn-primary ml-auto">
                            Tất cả bài tập
                        </Link>
                    </Wrap>
                </Cell>
                <Cell>
                    { assignmentDetail ? 
                        <Fragment>
                            <div className="flex flex-col items-center w-full border-b border-gray-200 dark:border-dark-5 pb-5">
                            <h1>{assignmentDetail.title}</h1>
                            <p className="mt-5 ml-32" style={{whiteSpace:'pre-wrap',wordBreak:'break-word'}}>{assignmentDetail.description}</p>
                            <div className="flex flex-wrap lg:flex-nowrap items-center justify-center p-3">
                                <Link to = {`/submit?id=${id}`} className="btn btn-outline-secondary py-1 px-2">Làm Bài</Link>
                            </div>
                        </div>
                        </Fragment>
                    :
                        <div className="flex justify-center">
                            <Loading1/>
                        </div>

                    }
                </Cell>
            </Grid>
            
        </Fragment>
    )
}
export default DetailAssignment;