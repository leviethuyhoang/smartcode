import HeaderPage from "components/Page/Admin/Page/HeaderPage";
import SubmittionForm from "components/Page/User/Submission/SubmissionForm";
import Card from "components/UI/Card";
import Modal from "components/UI/Modal/Modal";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import ConvertDate from "util/ConvertDate";

const SubmmittionItem = (props) => {

    const {contestId, user, problem, createdAt, score, totalScore, language} = props.submissionInfor;
    const [isShowModal, setIsShowModal] = useState(false);


    const showModal = (id) => {
        setIsShowModal(true)
    }
    const hideModal = () => {
        console.log("Hide")
        setIsShowModal(false);
    }

    return (
        <Fragment>
            <tr className = "zoom-in intro-y">
                <td className = "w-40">
                    <div className="text-gray-600 text-xs whitespace-nowrap text-center mt-0.5" >
                        <Link to = {`/profile/${user.id}`} >{user.username}</Link>
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
                { score !== undefined &&
                
                    <td className = "w-40">
                        <div className="text-gray-600 text-xs whitespace-nowrap mt-0.5">
                            <p className = "whitespace-nowrap text-center">{`${score}/${totalScore}`}</p>
                        </div>
                    </td>

                }
                <td className = "w-40">
                    <div className="text-gray-600 text-xs whitespace-nowrap mt-0.5">
                        <p className = "whitespace-nowrap text-center" onClick = {showModal}>
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-clipboard block mx-auto"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /><rect x={8} y={2} width={8} height={4} rx={1} ry={1} /></svg></p>
                    </div>
                </td>
                            
            </tr>
            {isShowModal && 
                <Modal onClose = {hideModal} >
                    <Card classes = "relative">
                        <HeaderPage mt = "0" classes = "flex fixed top-0" >
                            <span className = "mr-auto">Chi Ti???t B??i L??m</span>
                            <div onClick={hideModal}>
                                <Link to = {`/submittion/${contestId}`} className = "ml-auto w-40 cursor-pointer">To??n M??n H??nh <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-maximize inline"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" /></svg></Link>
                            </div>
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