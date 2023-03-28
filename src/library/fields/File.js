import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function File(props) {
 
return (
            <div className="form-group mt-3">   
                <label htmlFor={props.fieldConfig.label}>Upload Resume</label>
                <input 
                        className={props.fieldConfig.classes}
                        type={props.fieldConfig.type}
                        name={props.fieldConfig.name}
                        id={props.fieldConfig.id}
                        required={props.fieldConfig.validation.required}
                        accept={props.fieldConfig.config.accept}
                        disabled={props.fieldConfig.config.disabled}
                        multiple={props.fieldConfig.multiple}/>
            </div>
        );
}
export default File;