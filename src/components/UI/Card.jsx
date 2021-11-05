

const Card = (props) => {
    return (
        <div className = {`box p-${props.p ? props.p : '5'} ${props.classes ? props.classes : ""}`}>
            {props.children}
        </div>
    )
}
export default Card;