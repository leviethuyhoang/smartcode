

const Card = (props) => {
    return (
        <div className = {`intro-y box p-${props.p ? props.p : '5'}`}>
            {props.children}
        </div>
    )
}
export default Card;