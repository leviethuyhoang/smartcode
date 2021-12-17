import Select from "react-select";

const ReactSelect = (props) => {

    const {
        field,form,
        label,placeholder,options,isMulti
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

        if(props.handleChange){
            props.handleChange(isMulti ? selectedOptions.map((item => item.value)): selectedValue);
        }
    }

    const customStyles = {
        // css dropdown
        menu: (provided, state) => ({
            ...provided,
            zIndex : 5
        }),
        // css control select
        control: (provided,state) => { 
            if(showError){
                return {
                    ...provided,
                    border : '1px solid rgba(206,49,49)'
                }
            } 
            return provided;
        }}

    return (
        <div className=" mt-3">
            {label && <label htmlFor={name} className="form-label"><b> {label} </b></label>}
            <Select
                id = {name}
                {...field}
                name = {name}
                value = {getValues()}
                onChange={handleChange}
                styles = {customStyles}
                options={options}
                placeholder = {placeholder}
                isMulti = {isMulti}
            />
            {showError && <div className="pristine-error text-theme-24 mt-2">{errors[name]}</div>}
        </div>
    )
}
export default ReactSelect;
