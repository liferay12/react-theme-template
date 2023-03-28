import React from "react";
const Month = (props) => {
    return (
        <div className='form-group mt-3'>
            <label htmlFor={props.fieldConfig.id}>{props.fieldConfig.label}</label>
            <input
                type="month"
                id={props.fieldConfig.id}
                name={props.fieldConfig.name}
                value={props.fieldConfig.value}
                required={props.fieldConfig.required}
                hidden={props.fieldConfig.hidden}
                onChange={props.changed}
                min={props.fieldConfig.config.min}
                max={props.fieldConfig.config.max}
                className={props.fieldConfig.classes}
            />
        </div>
    );
}

export default Month;