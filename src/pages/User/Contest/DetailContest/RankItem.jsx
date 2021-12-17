import { Fragment } from "react";


const RankItem = (props) => {

    const { top, name, submittion_quantity, time } = props;

    return (
        <Fragment>
            <tr>
                <td>
                    <div className="text-gray-600 text-xs whitespace-nowrap mt-0.5">
                        <p className = "whitespace-nowrap text-center">{top}</p>
                    </div>
                </td>
                <td>
                    <div className="text-gray-600 text-xs whitespace-nowrap mt-0.5">
                        <div className="flex items-center">
                            <div className="w-10 h-10 image-fit zoom-in">
                                <img alt="Icewall Tailwind HTML Admin Template" className="tooltip rounded-full" src="/dist/images/preview-7.jpg" />
                            </div>
                            <p className = "whitespace-nowrap text-center ml-2">{name}</p>
                        </div>
                    </div>
                </td>
                <td>
                    <div className="text-gray-600 text-xs whitespace-nowrap mt-0.5">
                        <p className = "whitespace-nowrap text-center">{submittion_quantity}</p>
                    </div>
                </td>
                <td>
                    <div className="text-gray-600 text-xs whitespace-nowrap mt-0.5">
                        <p className = "whitespace-nowrap text-center">{time}</p>
                    </div>
                </td>
            </tr>
        </Fragment>
    )
}
export default RankItem;