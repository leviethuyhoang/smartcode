import { Fragment } from "react";
import ResultItem from "./ResultItem";


const ShowResult = (props) => {

    const { results } = props;
    

    return (
        <Fragment>
            {results.length > 0 ? results.map((item,index) =>  {
                        return <ResultItem
                            key={index}
                            index ={index}
                            item = {item}
                        />
                    })
                    :
                        <div className="w-32 mx-auto">CHƯA CÓ KẾT QUẢ</div>    
                    }
        </Fragment>
    )
}
export default ShowResult;