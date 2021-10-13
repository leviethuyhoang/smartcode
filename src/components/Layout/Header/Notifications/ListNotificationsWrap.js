const ListNotificationsWrap = (props) =>
{



    return(
        <div
        className="notification-content pt-2 dropdown-menu"
        id="_ecky5ixmu"
        data-popper-placement="bottom-end"
        style={{
          position: 'absolute',
          inset: '0px auto auto 0px',
          transform: 'translate(-330px, 20px)',
        }}
      >{props.children}</div>
    )
}

export default ListNotificationsWrap