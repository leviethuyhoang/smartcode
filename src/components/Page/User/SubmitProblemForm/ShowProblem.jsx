import Card from "components/UI/Card";
import Cell from "components/UI/Cell";
import Grid from "components/UI/Grid";
import { Fragment } from "react";


const ShowProblem = (props) => {

    const { problem } = props;

    return (
        <Fragment>
                <Card classes = "mr-1 min-width h-full">
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
                                                    <td className="border-b dark:border-dark-5 w-12 text-center">{index+1}</td>
                                                    <td className="border-b dark:border-dark-5 text-center">{item.stdin}</td>
                                                    <td className="border-b dark:border-dark-5 text-center" >{item.stdout}</td>
                                                </tr>
                                            })
                                        }
                                    </tbody>
                                    </table>
                            </div>
                        </Cell>
                    </Grid>
                    :
                        <div className="w-full text-center h-full">
                            <h2>Hãy Chọn Bài Tập </h2>
                        </div>
                    }
                </Card>
        </Fragment>
    )
}
export default ShowProblem;