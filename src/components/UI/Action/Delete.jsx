import { Fragment, useState } from "react";
import DeleteModal from "../Modal/DeleteModal";


const ButtonDelete = (props) => {

    const [isShowMoal,setIsShowModal] = useState(false);
    const [status,setStatus] = useState(false);

    const handleShow = () => {
        setIsShowModal(true)
        setTimeout(() => setStatus(true),200);
    }
    const handleDelete = (event) => {
        handleCancel(event);
    }
    const handleCancel = (event) => {
        event.stopPropagation();
        setStatus(false)
        setTimeout(() => setIsShowModal(false),200);
    }

    return (
        <Fragment>
            <div onClick = {handleShow} className="flex items-center text-theme-24" data-toggle="modal" data-target="#delete-confirmation-modal">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash-2 w-4 h-4 mr-1">
                    <polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                    <line x1={10} y1={11} x2={10} y2={17} />
                    <line x1={14} y1={11} x2={14} y2={17} />
                </svg>
                Delete
            </div>
            {isShowMoal && 
                <DeleteModal
                    isShowModal = {status}
                    onDelete = {handleDelete}
                    onCancel = {handleCancel}
                />
            }
      </Fragment>
    )
}
export default ButtonDelete;