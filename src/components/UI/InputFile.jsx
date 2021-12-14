import { Fragment, useState } from "react";
import IconFile from "assets/icons/File";
import "./inputfile.scss";
import { ErrorMessage } from "formik";

const InputFile = (props) => {

    const {
        field,form,
        multiple
    } = props;

    const {name} = field;

    const [images, setImages] = useState([]);

    const handleChange = (e) => {
        try{
            let index = 0;
            //get max id
            if(field.value){
                field.value.map(item => {
                    index = item.id;
                    return 0;
                })
            }
            //get all file
            const files = e.target.files;
            // convert to array and map id
            const filesArr = Array.from(files).map((file) => {
                return {id : ++index, file}
            });

            if(files){
                //crerate link image , id
                const fileArray = filesArr.map(( fileinfor )=> {
                    const file = fileinfor.file;
                    const isImage = file.type.includes("image")
                    console.log("size",file.size);
                    if(file.size > 25600){
                        // eslint-disable-next-line no-throw-literal
                        throw "File không được quá 25KB ";
                    }
                    return {id : fileinfor.id, size :file.size, name : file.name,src : isImage ? URL.createObjectURL(file) : null}})
                // map image and data
                if(multiple){
                    setImages(prev => prev.concat(fileArray));
                    form.setFieldValue(name,[...field.value,...filesArr])
                } else {
                    setImages(fileArray);
                    form.setFieldValue(name,[...filesArr])
                }
                filesArr.map(file => URL.revokeObjectURL(file));
            }
        } catch (error) {
            alert(error)
        }
    }

    const handleRemove = (id) => {
        if(id >= 0 ){
            //filter image
            setImages(prev => prev.filter(item => item.id !== id))
            // filter data
            form.setFieldValue(name,field.value.filter(file => file.id !== id))
        }
    }

    const renderImage = (images) => {

        return images.map((image,key) => {
            return (
                <div key = {key} className = "wrap-image">
                    {image.src ? <img className = "img-file" src={image.src}  alt="" /> : IconFile.IMAGE}
                    <p className = "name">{image.name}</p>
                    <p className = "size">{(image.size/(1024)).toFixed(2)} KB</p>
                    <p onClick = {handleRemove.bind(null,image.id)} className = "close">{IconFile.REMOVE_FILE}</p>
                </div>
            )
        })
    }

    return (
        <Fragment>
            <div className="inputfile-box mt-3">
                <input {...field} value = "" type="file" id = {name}  onChange = {handleChange} multiple = {multiple}/>
                <label htmlFor = {name} className = "btn btn-elevated-rounded-dark w-32 my-auto">
                        <div className = "my-auto mr-2">Tải Lên File </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-file-plus block "><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1={12} y1={18} x2={12} y2={12} /><line x1={9} y1={15} x2={15} y2={15} /></svg>
                </label>
                <p  className = "text-theme-24 mt-2 pristine-error"><ErrorMessage name= {name} /></p>
                <div className = "files-list mt-5">
                    {renderImage(images)}
                </div>

            </div>
        </Fragment>
    )
}
export default InputFile;