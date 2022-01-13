

const Table = (props) => {

    const {listHead, exclude} = props;



    return (
        <table className = "table table-report -mt-2">
            <thead>
                <tr className = "bg-theme-17 text-white toastify-rounded">
                    {listHead.map((item,key) => {

                        if(exclude && exclude.includes(item.title)){
                            return null;
                        }
                        return <th key = {key}  className = {`text-center ${item.classes ? item.classes : ''}`}>{item.title}</th>
                    }
                        
                    )}
                </tr>
            </thead>
            <tbody>
                {props.children}
            </tbody>
        </table>
    )
}
export default Table;