

const ListItem = (props) => {
    return (
        <ul className="top-menu__sub-open">
          {props.children}
        </ul>
    )
}
export default ListItem;