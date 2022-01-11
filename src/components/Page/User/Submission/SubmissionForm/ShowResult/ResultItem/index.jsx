import Cell from "components/UI/Cell";
import Grid from "components/UI/Grid";
import { Fragment, useState } from "react";

const ResultItem = (props) => {

    const {item, index} = props;

    const [toggle, setToggle] = useState(false)

    const onShowResult = () => {
        setToggle(prev => !prev)
    }

    return (
        <Fragment>
            <div key = {index} className = {`${toggle ? 'h-auto' : 'h-10'} btn ${item.status.description === "Accepted" ? "btn-success-soft" : item.status.description === 'Pending' ? "btn-warning-soft": "btn-danger-soft" } w-full mr-1 mb-2 block`} onClick={onShowResult}>
                    <Grid>
                        {index+1}
                        {
                            toggle ? 
                            <Fragment>
                                <Cell width = {4}> 
                                    <div className="flex"><b className="whitespace-nowrap mr-2">Input |</b><span className="truncate white-space-pre h-32">{item.stdin}</span></div>
                                </Cell>
                                <Cell width = {4}> 
                                <div className="flex"><b className="whitespace-nowrap mr-2">Output |</b> <span className="truncate white-space-pre h-32"> {item.stdout}</span></div>
                                </Cell>
                                <Cell width = {3}> 
                                    <div className="flex "><b className="whitespace-nowrap mr-2">Kết Quả |</b><span className="truncate white-space-preh-32">{`${item.status.description}`}</span></div>
                                </Cell>
                            </Fragment>
                            :
                            <Fragment>
                                <Cell width = {4}> 
                                    <div className="flex"><b className="whitespace-nowrap mr-2">Input |</b><span className="truncate">{item.stdin}</span></div>
                                </Cell>
                                <Cell width = {4}> 
                                <div className="flex"><b className="whitespace-nowrap mr-2">Output |</b> <span className="truncate"> {item.stdout}</span> </div>
                                </Cell>
                                <Cell width = {3}> 
                                    <div className="flex "><b className="whitespace-nowrap mr-2">Kết Quả |</b><span className="truncate">{`${item.status.description}`}</span></div>
                                </Cell>
                            </Fragment>
                        }
                    </Grid>
                </div>
        </Fragment>
    )
}
export default ResultItem;