import Card from "components/UI/Card";
import Modal from "components/UI/Modal/Modal";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";


const AsignmentItem = ({id, title, description}) => {


    const [showDesciption, setShowDescription] = useState(false);
    const onShowDescription = () => {
        setShowDescription(true);
    }

    const onCloseModal = (e) => {
        setShowDescription(false);
    }

    const showDetails = () => {

    }

    return (
        <Fragment>
            <div className="box border border-gray-400 intro-y">
                <div className="flex flex-col items-center p-5 border-b border-gray-200 h-32 cursor-pointer "  onClick= {onShowDescription}>
                    <div className="lg:ml-2 lg:mr-auto text-center mt-3 lg:mt-0 h-16 overflow-hidden p-2 text-overfollow-ellipsis font-medium text-xl" >
                        {title}
                    </div>
                </div>
                <div className="flex flex-wrap lg:flex-nowrap items-center justify-center p-3">
                    <Link to = {`/assignment/${id}`} onClick= {showDetails} className="btn btn-primary py-1 px-2 mr-2">Xem Chi Tiết</Link>
                    <Link to = {`/submit?id=${id}`} className="btn btn-outline-secondary py-1 px-2">Làm Bài</Link>
                </div>
            </div>
            { showDesciption &&
                <Modal onClose = {onCloseModal} >
                    <Card>
                        <div className="text-center mt-3 lg:mt-0 h-16 overflow-hidden p-2 text-overfollow-ellipsis font-medium text-xl w-full" >
                            {title}
                        </div>
                        <p style={{whiteSpace : "pre-wrap", wordBreak : 'break-word'}}>{description}</p>
                        <div className="flex flex-wrap lg:flex-nowrap items-center justify-center p-3">
                            <Link to = {`/assignment/${id}`} onClick= {showDetails} className="btn btn-primary py-1 px-2 mr-2">Xem Chi Tiết</Link>
                            <Link to = {`/submit?id=${id}`} className="btn btn-outline-secondary py-1 px-2">Làm Bài</Link>
                        </div>
                    </Card>
                </Modal>
            }
        </Fragment>
    )
}
export default AsignmentItem;