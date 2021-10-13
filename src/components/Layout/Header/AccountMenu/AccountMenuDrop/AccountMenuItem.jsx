import { Link } from "react-router-dom";


const AccountMenuDropItem = ({url,icon,title}) => {
    return (
        <Link to = {url} className="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 dark:hover:bg-dark-3 rounded-md"> {icon} {title}</Link>
    )
}
export default AccountMenuDropItem;