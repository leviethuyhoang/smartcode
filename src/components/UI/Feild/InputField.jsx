import React from "react";

const InputField =  React.forwardRef(props => {
    const {
        field,form,
        classes,label,type,placeholder,ref
    } = props;
    console.log("Form",form);
    const {name} = field;
    const {errors, touched} = form;
    const showError = errors[name] && touched[name];
    
    return (
        <div className="input-form">
            {label && <label htmlFor={name} className="form-label"> {label}</label>}
            <input 
                id={name}
                {...field}

                ref ={ref}
                type={type?type:"text"}
                name={name} 
                className={`${classes?classes:"form-control"} ${showError && "border-theme-24"}`} 
                placeholder={placeholder}
            />
            {showError && <div className="pristine-error text-theme-24 mt-2">{errors[name]}</div>}
        </div>
    )
})
export default InputField;