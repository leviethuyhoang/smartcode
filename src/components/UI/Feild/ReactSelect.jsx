import Select from "react-select";

const ReactSelect = (props) => {

    const {
        field,form,
        classes,label,placeholder,options,isMulti
    } = props;
    const {name ,value} = field;
    const {errors, touched} = form;
    const showError = errors[name] && touched[name];
    
    const getValues = () => {
        if (options) {
            return isMulti
              ? options.filter(option => value.indexOf(option.value) >= 0)
              : options.find(option => option.value === value);
          } else {
            return isMulti ? [] : "";
          }
    }


    const handleChange = (selectedOptions) => {
        const selectedValue = selectedOptions ? selectedOptions.value : selectedOptions;
        form.setFieldValue(
            name,
            isMulti
            ? selectedOptions.map((item => item.value)): selectedValue
        );
    }

    return (
        <div className=" mt-3">
            {label && <label htmlFor={name} className="form-label"><b> {label} </b></label>}
            <Select
                id = {name}
                {...field}
                name = {name}
                value = {getValues()}
                onChange={handleChange}

                options={options}
                placeholder = {placeholder}
                isMulti = {isMulti}
                className={`w-full ${classes?classes:""} border-theme-24`}
            />
            {showError && <div className="pristine-error text-theme-24 mt-2">{errors[name]}</div>}
        </div>
    )
}
export default ReactSelect;
