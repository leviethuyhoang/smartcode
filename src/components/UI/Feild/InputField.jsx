import { ErrorMessage } from "formik";
import React from "react";

const InputField =  props => {
    const {
        field,form,
        classes,label,type,placeholder
    } = props;
    const {name} = field;
    const {errors, touched} = form;
    const showError = errors[name] && touched[name];

    return (
        <div className="input-form mt-3">
            {label && <label htmlFor={name} className="form-label"><b> {label} </b></label>}
            <input 
                id={name}
                {...field}

                type={type?type:"text"}
                name={name} 
                className={`form-control ${classes?classes:''} ${showError ? "border-theme-24" : ''}`} 
                placeholder={placeholder}
            />
            <p  className = "text-theme-24 mt-2 pristine-error"><ErrorMessage name= {name} /></p>
            
        </div>
    )
}
export default InputField;