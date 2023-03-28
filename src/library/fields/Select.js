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
                    options={props.fieldConfig.options} 
                    name={props.fieldConfig.name} 
                    id={props.fieldConfig.id}
                    placeholder={props.fieldConfig.placeholder}
                    onChange={props.changed}
            />
        </div>
    );
}

export default Select;