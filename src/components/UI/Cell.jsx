

const Cell = (props) => {

    const {width} = props;

    return (
        <div className = {`col-span-12 ${width?`lg:col-span-${width}`:''}`}>
            {props.children}
        </div>
    )
}
export default Cell;