import { Fragment } from "react";
import ReactDOM from "react-dom";
import Button from "../Button/Button";


const DeleteModal = (props) => {

    const {isShowModal} = props;

    return (
        <Fragment>
            {ReactDOM.createPortal(
            <div onClick = {props.onCancel} id="delete-confirmation-modal" className={`modal overflow-y-auto ${isShowModal && 'show'}`} tabIndex={-1} aria-hidden="false" style={{marginTop: '0px', marginLeft: '0px', paddingLeft: '0px', zIndex: 53}}>
                <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-body p-0">
                    <div className="p-5 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x-circle w-16 h-16 text-theme-24 mx-auto mt-3"><circle cx={12} cy={12} r={10} /><line x1={15} y1={9} x2={9} y2={15} /><line x1={9} y1={9} x2={15} y2={15} /></svg> 
                        <div className="text-3xl mt-5">Are you sure?</div>
                        <div className="text-gray-600 mt-2">
                            Bạn có thực sự muốn xóa ?
                        <br />
                            Thao tác này sẽ không thể quay lại
                        </div>
                    </div>
                    <div className="px-5 pb-8 text-center">
                        <button onClick = {props.onCancel} type="button" data-dismiss="modal" className="btn btn-outline-secondary w-24 mr-1">Cancel</button>
                        <Button 
                            classes = "btn-danger w-24"
                            onClick = {props.onDelete}
                        >
                            Delete
                        </Button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            ,document.getElementById("overlay-modal")
            )}
        </Fragment>
    )
}
export default DeleteModal;