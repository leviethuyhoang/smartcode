

const TextField = (props) => {
    const {
        field,form,
        classes,label,type,placeholder,rows
    } = props;
    const {name} = field;
    const {errors, touched} = form;
    const showError = errors[name] && touched[name];
    return (
        <div className="input-form mt-3">
            {label && <label htmlFor={name} className="form-label"><b> {label}</b></label>}
            <textarea 
                id={name}
                {...field}
                type={type?type:"text"}
                name={name} 
                rows = {rows ? rows : '10'}
                className={`form-control ${classes?classes:""} ${showError ? "border-theme-24" : ''}`} 
                placeholder={placeholder}
            />
            
            {showError && <div className="pristine-error text-theme-24 mt-2">{errors[name]}</div>}
        </div>
    )
}
export default TextField;