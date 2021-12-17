
import "./styleTabs.scss"

const Tabs = (props) => {

    return (
        <div className={`tabs ${props.classes ? props.classes : ''}`}>
            {props.children}
        </div>
    )
}
export default Tabs;