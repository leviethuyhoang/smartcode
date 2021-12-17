
const TabPane = (props) => {

    const {name, activeTab} = props;
    
    return (
        <div className={`tab-pane${name === activeTab ? ' active':''}`}>
            {props.children}
        </div>
    )
}
export default TabPane;