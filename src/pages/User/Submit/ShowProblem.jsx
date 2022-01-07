import Button from "components/UI/Button/Button";
import Card from "components/UI/Card";
import Cell from "components/UI/Cell";
import Grid from "components/UI/Grid";
import SplitView from "components/UI/SplitView";
import { Fragment, useState } from "react";
import SubmitForm from "./SubmitForm";


const ShowProblem = (props) => {

    const { listProblems, handleSubmit, idProblem } = props;
    
    const [problem, setProblem] = useState(null);
    const [isShowHint, setIsShowHint] = useState(false);
    
    const handleChangeProblem = (id) => {
        setProblem(listProblems.find(item => item.id === +id))
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
                        <Cell>
                            <div className="flex flex-row justify-space-around mb-2">
                                <p><b>ID : </b>{problem.id}</p>
                                <p><b>Giới Hạn Thời Gian Chạy : </b>{problem.timeLimit}</p>
                                <p><b>Giới Han Bộ Nhớ : </b>{problem.memoryLimit}</p>
                            </div>
                            <hr />
                            <div className="flex flex-col items-center my-5">
                                <b className="text-lg">MÔ TẢ</b>
                                <p className="mt-5" style={{whiteSpace : "pre-wrap", wordBreak : 'break-word'}}>{problem.description}</p>
                            </div>
                            <hr />
                        </Cell>
                        <Cell>
                            <div className="flex flex-col items-center">
                                <table className="table">
                                    <thead>
                                        <tr className="bg-gray-700 dark:bg-dark-1 text-white">
                                            <th className="whitespace-nowrap text-center">Ví Dụ</th>
                                            <th className="whitespace-nowrap text-center">Nhập</th>
                                            <th className="whitespace-nowrap text-center">Xuất</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        { problem.sampleTestCases && 
                                        
                                            problem.sampleTestCases.map( (item, index) => {
                                                return <tr key={index}>
                                                    <td className="border-b dark:border-dark-5 w-14 text-center">{index+1}</td>
                                                    <td className="border-b dark:border-dark-5 text-center">{item.stdin}</td>
                                                    <td className="border-b dark:border-dark-5 text-center" >{item.stdout}</td>
                                                </tr>
                                            })
                                        }
                                    </tbody>
                                    </table>
                            </div>
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
                    listProblems = {listProblems}
                    handleChangeProblem = {handleChangeProblem}
                    handleSubmit = {handleSubmit}
                    idProblem = {idProblem}
                />
            </SplitView>
        </Fragment>
    )
}
export default ShowProblem;