import { Fragment } from "react";
import { authActions } from "app/slice/authSlice";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import AccountMenuDropItem from "./AccountMenuItem";
import IconHeader from "assets/icons/iconHeader";



const AccountMenuDrop = (props) => {

    const dispatch = useDispatch();
    const history = useHistory();

    const {ACCOUNT_MENU_DROP} = IconHeader;

    const handleLogout = () => {
        dispatch( authActions.logout());
        history.replace("/")
    }
    
    return (
        <Fragment>
                <div className= {`w-56 ${props.isShow ? 'show':''} `} id="_ay39uh2c2" data-popper-placement="bottom-end" style={{position: 'absolute', inset: '0px auto auto 0px', transform: 'translate(-190.4px, 33.6px)'}}>
                    <div className=" box bg-theme-11 dark:bg-dark-6 text-white mt-2">
                        <div className="p-2">
                            <AccountMenuDropItem icon = {ACCOUNT_MENU_DROP.ADMIN_PAGE} title = "Trang Quản Trị" url = "/admin"/>
                        </div>
                        <div className="p-2 border-t border-theme-12 dark:border-dark-3">
                        <div onClick = {handleLogout} className="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 dark:hover:bg-dark-3 rounded-md"> <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-toggle-right w-4 h-4 mr-2"><rect x={1} y={5} width={22} height={14} rx={7} ry={7} /><circle cx={16} cy={12} r={3} /></svg> Đăng Xuất </div>
                        </div>
                    </div>
                </div>
        </Fragment>
    )
}
export default AccountMenuDrop;