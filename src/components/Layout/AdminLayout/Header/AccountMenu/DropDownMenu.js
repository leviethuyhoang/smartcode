import ItemMenu from "./Menu/ItemMenu";
import Logout from "./Menu/Logout";

const DropDownMenu = (props)=>
{
    return(<div className="dropdown-menu w-56" id="_u9jtxm1t6">
    <div className="dropdown-menu__content box bg-theme-11 dark:bg-dark-6 text-white">
      <div className="p-4 border-b border-theme-12 dark:border-dark-3">
        <div className="font-medium">Sylvester Stallone</div>
        <div className="text-xs text-theme-13 mt-0.5 dark:text-gray-600">
          DevOps Engineer
        </div>
      </div>
      <ItemMenu/>
      <Logout/>
      </div>
     
      </div>)
}

export default DropDownMenu;