import { useCallback, useState } from "react";
import avatar from "assets/image/DefaultAvatar.png"
import "./choseAvatar.scss";


const ChoseAvatar = (props) => {
    const {
        field,form,
    } = props;

    const [image, setImage] = useState(field.value);
    
    const handleChange = useCallback((e) => {
        
        const file = e.target.files[0];
        if(file){
            const image = URL.createObjectURL(file);
            setImage(image);
        }
        form.setFieldValue(field.name,file)
    },[field.name, form])

    return (
            <div className="relative avatar-box">
                <div className = "mx-auto">
                    <img alt="Ảnh Đại Diện" className="rounded-full avatar" src= {image ? image : avatar} />
                </div>
                <input type="file" accept="image/*" {...field} value = "" id = "avatar" onChange = {handleChange} />
                <label htmlFor="avatar" className="absolute flex items-center justify-center bottom-0 rounded-full p-2 btn btn-rounded-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-image w-4 h-4"><rect x={3} y={3} width={18} height={18} rx={2} ry={2} /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg>
                </label>
            </div>
            // <div className = "avatar-box">
            //     <div className=" mx-auto ">
            //         <img alt="Ảnh Đại Diện" className="rounded-full avatar" src= {image ? image : avatar}/>
            //     </div>
            //     <input type="file" accept="image/*" {...field} value = "" id = "avatar" onChange = {handleChange} />
            //     <label className = "btn btn-rounded-secondary mt-3" htmlFor="avatar">
            //         <p className = "mr-2">Chọn Ảnh Đại Diện</p>
            //         <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-image w-4 h-4 mr-2"><rect x={3} y={3} width={18} height={18} rx={2} ry={2} /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg>
            //     </label>
            // </div>
    )
}
export default ChoseAvatar;