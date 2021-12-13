import Button from "components/UI/Button/Button";
import Card from "components/UI/Card";
import Cell from "components/UI/Cell";
import Grid from "components/UI/Grid";
import SplitView from "components/UI/SplitView";
import { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import SubmitForm from "./SubmitForm";


const ShowProblem = (props) => {

    const listProblems = useSelector(state => state.problem);
    const [problem, setProblem] = useState(null);
    const [isShowHint, setIsShowHint] = useState(false);

    const handleChangeProblem = (id) => {
        setProblem(listProblems.data.find(item => item.id === +id))
        setIsShowHint(false);
    }

    const onShowHint = () => {
        setIsShowHint(true);
    }

    return (
        <Fragment>
           
            <SplitView>
                <Card classes = "mr-1 min-width">
                    {problem ? 
                    <Grid >
                        <Cell width = {3}>
                            <b>Người Đăng</b>
                            <p className = "mt-3" style = {{whiteSpace : "pre"}}>{problem.user}</p>
                        </Cell>
                        <Cell width = {3}>
                            <b>Giới Hạn Thời Gian</b>
                            <p className = "mt-3" style = {{whiteSpace : "pre"}}>{problem.time_limit}</p>
                        </Cell>
                        <Cell width = {3}>
                            <b>Giới Hạn Bộ Nhớ</b>
                            <p className = "mt-3" style = {{whiteSpace : "pre"}}>{problem.memory_limit}</p>
                        </Cell>
                        <Cell>
                            <b>Đề Bài</b>
                            <p className = "mt-3" style = {{whiteSpace : "pre"}}>{problem.description}</p>
                        </Cell>
                        <Cell width = {6}>
                            <b>Input</b>
                            <p style = {{whiteSpace : "pre"}}>{problem.input_description}</p>
                        </Cell>
                        <Cell width = {6}>
                            <b>Output</b>
                            <p style = {{whiteSpace : "pre"}}>{problem.output_description}</p>
                        </Cell>
                        {isShowHint ? 
                            <Cell>
                                <b>Hướng Dẫn</b>
                                <p style = {{whiteSpace : "pre"}}>{problem.hint}</p>
                            </Cell>
                        :
                        <Cell>
                            <Button onClick = {onShowHint}> Xem Hướng Dẫn</Button>
                        </Cell>
                        }
                    </Grid>
                    :
                    <p>Hãy Chọn Bài Tập</p>
                    }
                </Card>  
                <SubmitForm
                    handleChangeProblem = {handleChangeProblem}
                />
            </SplitView>
        </Fragment>
    )
}
export default ShowProblem;