import Cell from "components/UI/Cell";
import ProblemItem from "./ProblemItem"
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";


const AllProblemContest = (props) => {

    const params = useParams()

    const { listProblem, onShowDetaiProblem, resolveProblem } = props;

    return (
        <Fragment>
            
            {listProblem && listProblem.length > 0 ?
                <Fragment>
                    <Cell>
                        <div className="flex justify-center">
                            <Link  to= {{pathname : `https://3132-2001-ee0-4b7f-25e0-3917-d16b-79a5-cfaa.ngrok.io/api/v1/admin/constest/${params.id}/exportExcel`}} className="btn btn-elevated-rounded-dark" target="_blank">
                                Tải Đề  <svg className="ml-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-corner-right-down block mx-auto"><polyline points="10 15 15 20 20 15"></polyline><path d="M4 4h7a4 4 0 0 1 4 4v12"></path></svg>
                            </Link>
                        </div>
                    </Cell>
                    {listProblem.map((item, key) => {
                        return <Cell width = {4} key = {key} >
                            <ProblemItem
                                id = {item.id}
                                title = {item.title}
                                description = {item.description}
                                onShowDetailProblem = {onShowDetaiProblem}
                                resolveProblem = {resolveProblem}
                            />
                        </Cell>
                    })}
                </Fragment>
                :
                <Fragment>
                    <Cell>
                        <div className="flex justify-center w-full">
                            <h2>Không Có Bài Thi Để Hiển Thị</h2>
                        </div>
                    </Cell>
                </Fragment>
            }
        </Fragment>
    )
}
export default AllProblemContest;