

const Wrap = (props) => {
    return (
        <div className = "intro-y w-full flex flex-wrap sm:flex-nowrap items-center mt-2">
            {props.children}
        </div>
    )
}
export default Wrap;