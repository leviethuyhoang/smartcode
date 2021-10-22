

const Cell = (props) => {

    const {width,classes} = props;

    return (
        <div className = {`col-span-12 ${width?`lg:col-span-${width}`:''} ${classes}`}>
            {props.children}
        </div>
    )
}
export default Cell;