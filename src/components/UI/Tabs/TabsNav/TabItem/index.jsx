
const TabItem = (props) => {

    const {name, activeTab} = props;
    
    const handelClick = () => {
        props.toggleTab(props.name)
    }

    return (
        <div className={`py-4 sm:mr-8 flex items-center cursor-pointer${name === activeTab ? ' active': ''}`} onClick = {handelClick}>
            {props.children}
        </div>
    )
}
export default TabItem;