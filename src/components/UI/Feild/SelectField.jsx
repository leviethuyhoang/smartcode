

const SelectField = (props) => {

    const {
        field,form,
        classes,label,placeholder
    } = props;
    const {name} = field;
    const {errors, touched} = form;
    const showError = errors[name] && touched[name];

    const handleChange = (selectedOption) => {
        const selectedValue = selectedOption ? selectedOption.target.value : selectedOption;
        const changeEvent = {
            target : {
                name : name,
                value : selectedValue
            }
        }
        if(props.handleChange){
            props.handleChange(selectedValue);
        }

        field.onChange(changeEvent);
    }
    return (
            <div className=" mt-3">
            {label && <label htmlFor={name} className="form-label"><b> {label} </b></label>}
            <select 
                id={name}
                {...field}

                onChange = {handleChange}
                className={`form-select w-full ${classes?classes:""} ${showError ? "border-theme-24" : ''}`} 
                placeholder={placeholder}
            >
                <option value= "" hidden>{placeholder}</option>
                {props.options && props.options.map((item,key)=> (
                    <option key = {key} value = {item.value} >{item.label}</option>
                ))}

            </select>
              

            {showError && <div className="pristine-error text-theme-24 mt-2">{errors[name]}</div>}
            </div>

    )
}
export default SelectField;