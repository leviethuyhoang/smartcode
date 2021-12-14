import HeaderPage from "components/Page/Admin/Page/HeaderPage";
import Card from "components/UI/Card";
import Modal from "components/UI/Modal/Modal";
import { Fragment, useState } from "react";
import SubmittionForm from "../../SubmittionForm";

const SubmmittionItem = (props) => {

    const {name,time,assignment,language,result} = props;

    const [isShowModal, setIsShowModal] = useState(false);

    const showModal = (id) => {
        setIsShowModal(true)
    }

    const hideModal = () => {
        setIsShowModal(false);
    }

    return (
        <Fragment>
            <tr className = "zoom-in intro-y">
                <td className = "w-40">
                    <div className="text-gray-600 text-xs whitespace-nowrap mt-0.5" >
                        <p className = "whitespace-nowrap text-center " onClick = {showModal}>{name}</p>
                    </div>
                </td>
                <td className = "w-40">
                    <div className="text-gray-600 text-xs whitespace-nowrap mt-0.5">
                        <p className = "whitespace-nowrap text-center">{time}</p>
                    </div>
                </td>
                <td className = "w-40">
                    <div className="text-gray-600 text-xs whitespace-nowrap mt-0.5">
                        <p className = "whitespace-nowrap text-center">{assignment}</p>
                    </div>
                </td>
                <td className = "w-40">
                    <div className="text-gray-600 text-xs whitespace-nowrap mt-0.5">
                        <p className = "whitespace-nowrap text-center">{language}</p>
                    </div>
                </td>
                <td className = "w-40">
                    <div className="text-gray-600 text-xs whitespace-nowrap mt-0.5">
                        <p className = "whitespace-nowrap text-center">{result}</p>
                    </div>
                </td>
            </tr>
            {isShowModal && 
                <Modal onClose = {hideModal} >
                    <Card classes = "relative">
                        <HeaderPage mt = "0" classes = "flex fixed top-0" >
                            <span className = "mr-auto">Chi Tiết Bài Làm</span>
                            <span className = "btn btn-rounded-dark  w-8 h-8" onClick = {hideModal}>
                                x
                            </span>
                        </HeaderPage>
                        <SubmittionForm/>
                    </Card>
                </Modal>
            }
        </Fragment>
    )
}
export default SubmmittionItem;