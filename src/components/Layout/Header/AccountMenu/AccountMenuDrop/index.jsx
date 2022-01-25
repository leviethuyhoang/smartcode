import { Fragment } from "react";
import { authActions } from "app/slice/authSlice";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import AccountMenuDropItem from "./AccountMenuItem";
import IconHeader from "assets/icons/iconHeader";
import { useSelector } from "react-redux";



const AccountMenuDrop = (props) => {

    const dispatch = useDispatch();
    const history = useHistory();
    const auth = useSelector(state => state.auth);

    const { ACCOUNT_MENU_DROP } = IconHeader;

    const handleLogout = () => {
        dispatch( authActions.logout());
        history.replace("/")
    }
    
    return (
        <Fragment>
            <div className= "w-56" onMouseLeave={props.ToggleDopMenu} style={{position: 'absolute', inset: '0px auto auto 0px', transform: 'translate(-190.4px, 33.6px)'}}>
                <div className=" box bg-theme-11 dark:bg-dark-6 text-white mt-2 intro-y">
                    <div className="p-2" onClick={props.ToggleDopMenu}>
                        <AccountMenuDropItem icon = { ACCOUNT_MENU_DROP.PROFILE } title = "Trang Cá Nhân" url = "/profile"/>
                        { auth.isAdmin && <AccountMenuDropItem icon = {ACCOUNT_MENU_DROP.ADMIN_PAGE} title = "Trang Quản Trị" url = "/admin"/>}
                    </div>                                                                                                                                                      
                    <div className="p-2 border-t border-theme-12 dark:border-dark-3">
                    <div onClick = {handleLogout} className="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 dark:hover:bg-dark-3 rounded-md cursor-pointer"> <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-log-out w-4 h-4 mr-2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1={21} y1={12} x2={9} y2={12} /></svg> Đăng Xuất </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default AccountMenuDrop;