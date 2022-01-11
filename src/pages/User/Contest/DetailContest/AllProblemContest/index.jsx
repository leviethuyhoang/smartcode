import Cell from "components/UI/Cell";
import ProblemItem from "./ProblemItem"
import { Fragment } from "react";


const AllProblemContest = (props) => {


    const { listProblem, onShowDetaiProblem, resolveProblem } = props;

    return (
        <Fragment>
            
            {listProblem && listProblem.length > 0 ?
                <Fragment>
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