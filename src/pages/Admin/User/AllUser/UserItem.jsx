import usertApi from "api/userApi";
import ButtonDelete from "components/UI/Action/Delete";
import { Fragment } from "react";
import { useRouteMatch } from "react-router";
import { Link } from "react-router-dom";


const UserItem = (props) => {
    
    const match = useRouteMatch();

    const {email, username, isAdmin, isActive, id } = props.infor;

    const handleDelete = () => {
        return new Promise((res, rej) => {
            usertApi.deleteOne(id)
            .then(_ => {
                res('Xóa Người Dùng Thành Công');
            })
            .catch( _ => {
                rej('Xóa Người Dùng Thất Bại');
            })
        })
    }


    return (
        <Fragment>
            <tr className = "intro-x  zoom-in">
                <td className = "w-40">
                    <div className="text-gray-600 text-xs whitespace-nowrap mt-0.5">
                        <p className = "whitespace-nowrap text-center">{email}</p>
                    </div>
                </td>

                <td className = "w-40">
                    <div className="text-gray-600 text-xs whitespace-nowrap mt-0.5">
                        <p className = "whitespace-nowrap text-center">{username}</p>
                    </div>
                </td>

                <td className = "w-40">
                    {isAdmin ? 
                        <div className="flex items-center justify-center text-theme-10"> <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check-square w-4 h-4 mr-2"><polyline points="9 11 12 14 22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg></div>
                        :
                        <div className="flex items-center justify-center text-theme-24"> <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check-square w-4 h-4 mr-2"><polyline points="9 11 12 14 22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg></div>
                    }
                </td>

                <td className = "w-40">
                    {isActive ? 
                        <div className="flex items-center justify-center text-theme-10"> <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check-square w-4 h-4 mr-2"><polyline points="9 11 12 14 22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg></div>
                        :
                        <div className="flex items-center justify-center text-theme-24"> <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check-square w-4 h-4 mr-2"><polyline points="9 11 12 14 22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg></div>
                    }
                </td>

                <td className = "table-report__action w-40">
                    <div className="text-gray-600 text-xs whitespace-nowrap mt-0.5">
                        <div className ="flex justify-center items-center">
                        <Link to = {`${match.url}/edit/${id}`} className="flex items-center mr-3" > <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check-square w-4 h-4 mr-1"><polyline points="9 11 12 14 22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg> Edit </Link>
                            <ButtonDelete
                                onConfirm = {handleDelete}
                            />
                        </div>
                    </div>
                </td>
            </tr>
        </Fragment>
    )
}
export default UserItem;