

const Grid = (props) => {
    const {col,gap,mt} = props;
    return (
        <div className = {`grid grid-cols-${col?col:12} gap-${gap?gap:6} ${mt?`mt-${mt}`:''}`}>
            {props.children}
        </div>
    )
}
export default Grid;