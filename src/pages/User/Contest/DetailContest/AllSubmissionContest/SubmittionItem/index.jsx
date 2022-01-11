import submitionApi from "api/submittionApi";
import HeaderPage from "components/Page/Admin/Page/HeaderPage";
import SubmittionForm from "components/Page/User/Submission/SubmissionForm";
import Card from "components/UI/Card";
import Modal from "components/UI/Modal/Modal";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import ConvertDate from "util/ConvertDate";


const SubmmittionItem = (props) => {

    const {id, user, problem, createdAt, score, totalScore, language} = props.submissionInfor;
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
                    <div className="text-gray-600 text-xs whitespace-nowrap text-center mt-0.5" >
                        <Link to = {`/profile/${id}`} >{user.username}</Link>
                    </div>
                </td>
                <td className = "w-40">
                    <div className="text-gray-600 text-xs whitespace-nowrap mt-0.5">
                        <p className = "whitespace-nowrap text-center">{ConvertDate.getDateNomal(createdAt)}</p>
                    </div>
                </td>
                <td className = "w-40">
                    <div className="text-gray-600 text-xs whitespace-nowrap mt-0.5">
                        <p className = "whitespace-nowrap text-center">{problem.title}</p>
                    </div>
                </td>
                <td className = "w-40">
                    <div className="text-gray-600 text-xs whitespace-nowrap mt-0.5">
                        <p className = "whitespace-nowrap text-center">{language.name}</p>
                    </div>
                </td>
                <td className = "w-40">
                    <div className="text-gray-600 text-xs whitespace-nowrap mt-0.5">
                        <p className = "whitespace-nowrap text-center">{`${score}/${totalScore}`}</p>
                    </div>
                </td>
                <td className = "w-40">
                    <div className="text-gray-600 text-xs whitespace-nowrap mt-0.5">
                        <p className = "whitespace-nowrap text-center" onClick = {showModal}>
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-clipboard block mx-auto"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /><rect x={8} y={2} width={8} height={4} rx={1} ry={1} /></svg></p>
                    </div>
                </td>
                <td className = "w-40">
                    <div className="flex justify-center">
                        <Link  to= {{pathname : `https://3132-2001-ee0-4b7f-25e0-3917-d16b-79a5-cfaa.ngrok.io/api/v1${submitionApi.getPathDownLoadFileExcel(id)}`}} className="btn btn-elevated-rounded-dark" target="_blank">
                            Tải File Excel  <svg className="ml-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-corner-right-down block mx-auto"><polyline points="10 15 15 20 20 15"></polyline><path d="M4 4h7a4 4 0 0 1 4 4v12"></path></svg>
                        </Link>
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
                        <div className = "w-full mt-5">
                        </div>
                        <SubmittionForm 
                            submissionInfor = {props.submissionInfor}
                        />
                    </Card>
                </Modal>
            }
        </Fragment>
    )
}
export default SubmmittionItem;