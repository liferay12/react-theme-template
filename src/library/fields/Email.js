import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import 'jquery/dist/jquery';
const Email=(props)=>{
    return(
        <div className='form-group mt-3'>
            <label htmlFor={props.fieldConfig.id}>{props.fieldConfig.label}</label>
            <input
                    type={props.fieldConfig.type}
                    id={props.fieldConfig.id}
                    name={props.fieldConfig.name}
                    className={props.fieldConfig.classes}
                    placeholder={props.fieldConfig.placeholder}
                    onChange={props.changed}
            />
        </div>
    );
}

export default Email;