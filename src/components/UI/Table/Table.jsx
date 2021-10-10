

const Table = (props) => {

    const {listHead} = props;

    return (
        <table className = "table table-report -mt-2">
            <thead>
                <tr>
                    {listHead.map((item,key) => 
                        <th key = {key}  className = {item.classes}>{item.title}</th>
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