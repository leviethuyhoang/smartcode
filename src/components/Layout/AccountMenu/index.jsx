import { Fragment, useState } from "react";
import AccountMenuDrop from "./AccountMenuDrop";


const AccountMenu = (props) => {

    const [isShowDropMenu,setIsShowDropMenu] = useState(false);
    const [status,seStatus] = useState(false);


    const ToggleDopMenu  = () => {
        seStatus(prev => !prev);
        setTimeout(()=>{
            setIsShowDropMenu(prev => !prev)
        },[100])
    }

    return (
        <Fragment>
            <div  className="intro-x dropdown w-8 h-8">
                <div onClick = {ToggleDopMenu} className="dropdown w-8 h-8 rounded-full overflow-hidden shadow-lg image-fit zoom-in scale-110" role="button" aria-expanded="true">
                <img alt="Icewall Tailwind HTML Admin Template" src="dist/images/profile-14.jpg" />
                </div>
                { status && <AccountMenuDrop  isShow = {isShowDropMenu}/>}
            </div>
        </Fragment>
    )
}
export default AccountMenu;