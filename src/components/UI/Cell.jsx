

const Cell = (props) => {

    const {width,md,sm,classes} = props;

    return (
        <div className = {`col-span-12${width?` lg:col-span-${width}`:''}${md?` md:col-span-${md}`:''}${sm?` sm:col-span-${sm}`:''} ${classes? classes:''}`}>
            {props.children}
        </div>
    )
}
export default Cell;