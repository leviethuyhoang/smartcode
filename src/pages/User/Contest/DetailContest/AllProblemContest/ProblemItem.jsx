import Button from "components/UI/Button/Button";
import Card from "components/UI/Card";
import Modal from "components/UI/Modal/Modal";
import { Fragment, useState } from "react";


const AsignmentItem = ({id, title, description, onShowDetailProblem, resolveProblem}) => {



    const [showDesciption, setShowDescription] = useState(false);
    const onShowDescription = () => {
        setShowDescription(true);
    }

    const onCloseModal = (e) => {
        setShowDescription(false);
    }

    // const onShowDetail = () =>{
    //     onShowDetailProblem(id);
    // }

    const resolve = (e) => {
        e.stopPropagation();
        onCloseModal();
        resolveProblem(id);
    }
    
    return (
        <Fragment>
            <div className="box btn-elevated-secondary border border-gray-400 intro-x" >
                <div className="flex flex-col lg:flex-row items-center p-5 border-b border-gray-400  h-32 cursor-pointer" onClick= {onShowDescription}>
                    <div className="w-full text-center mt-3 lg:mt-0 h-16 overflow-hidden p-2 text-overfollow-ellipsis font-medium text-xl">
                        {title}
                    </div>
                </div>
                <div className="flex flex-wrap lg:flex-nowrap items-center justify-center p-3">
                    <Button onClick = {resolve} classes="btn-outline-secondary py-1 px-2">Làm Bài</Button>
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
                            <Button onClick = {resolve} classes="btn-outline-secondary py-1 px-2">Làm Bài</Button>
                        </div>
                    </Card>
                </Modal>
            }
        </Fragment>
    )
}
export default AsignmentItem;