import React from 'react';
import ReactSelect from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import 'jquery/dist/jquery';
const Select=(props)=>{
    return(
        <div className='form-group mt-3'>
            <label htmlFor={props.fieldConfig.id}>{props.fieldConfig.label}</label>
            <ReactSelect

                id={props.fieldConfig.id}
                
                name={props.fieldConfig.name}
                className={props.fieldConfig.classes}
                placeholder={props.fieldConfig.placeholder}
                onChange={props.changed}
                disabled={props.fieldConfig.config.disabled}
                readOnly={props.fieldConfig.config.readOnly}
                hidden={props.fieldConfig.config.hidden}
                required={props.fieldConfig.validation.required}
                autocomplete={props.fieldConfig.validation.autocomplete}
                autofocus={props.fieldConfig.validation.autofocus}
                options={props.fieldConfig.options} 
                // multiple={props.fieldConfig.multiple}
                // suggestion={props.fieldConfig.suggestion}
            />
        </div>
    );
}

export default Select;