import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import 'jquery/dist/jquery';
const Text=(props)=>{
    return(
        <div className='form-group mt-3'>
            <label htmlFor={props.fieldConfig.id}>{props.fieldConfig.label}</label>
            <input
                    type={props.fieldConfig.type}
                    className={props.fieldConfig.classes}
                    name={props.fieldConfig.name} 
                    id={props.fieldConfig.id}
                    placeholder={props.fieldConfig.placeholder}
                    onChange={props.changed}
            />
        </div>
    );
}

export default Text;