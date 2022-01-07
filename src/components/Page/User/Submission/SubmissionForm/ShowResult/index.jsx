import Cell from "components/UI/Cell";
import Grid from "components/UI/Grid";
import { Fragment } from "react";


const ShowResult = (props) => {

    const { results } = props;

    return (
        <Fragment>
            {results.length > 0 ? results.map((item,index) =>  {
                        return <div key = {index} className = {`btn ${item.status.description === "Accepted" ? "btn-success-soft" : item.status.description === 'Pending' ? "btn-warning-soft": "btn-danger-soft" } w-full mr-1 mb-2 block`}>
                                <Grid>
                                    <Cell width = {2}>
                                        {index+1}
                                    </Cell>
                                    <Cell width = {4}> 
                                        <div style = {{whiteSpace : "pre" , textAlign : "left"}}> <b>Input :</b> {item.stdin} </div>
                                    </Cell>
                                    <Cell width = {4}> 
                                        <div style = {{whiteSpace : "pre", textAlign : "left"}}> <b>Output :</b> {item.stdout} </div>
                                    </Cell>
                                    <Cell width = {2}> 
                                        <div style = {{whiteSpace : "pre", textAlign : "left"}}> <b>Kết Quả : </b>{`${item.status.description}`} </div>
                                    </Cell>
                                </Grid>
                            </div>
                    })
                    :
                        <div className="w-32 mx-auto">CHƯA CÓ KẾT QUẢ</div>    
                    }
        </Fragment>
    )
}
export default ShowResult;