

const Table = (props) => {

    const {listHead} = props;

    return (
        <table className = "table table-report -mt-2">
            <thead>
                <tr className = "bg-theme-17 text-white toastify-rounded">
                    {listHead.map((item,key) => 
                        <th key = {key}  className = {`text-center ${item.classes ? item.classes : ''}`}>{item.title}</th>
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