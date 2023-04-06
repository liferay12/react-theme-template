import React, { useState } from 'react';
import Select from '../fields/Select';
import Text from '../fields/Text';
import TextArea from '../fields/TextArea';
import CheckBox from '../fields/CheckBox';
import Number from '../fields/Number';
import File from '../fields/File';
import Date from '../fields/Date';
import Radio from '../fields/Radio';
import AutoComplete from '../fields/AutoComplete';
import Tel from '../fields/Tel';
import Email from '../fields/Email';
import Password from '../fields/Password';
import Month from '../fields/Month';
import DateTime from '../fields/DateTime';
import Otp from '../fields/Otp';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import 'jquery/dist/jquery';

const Renderer = (props) => {
    const { fieldArray, setFieldArray } = props;

    const fieldChange = (event, field, index) => {
        setFieldArray(prev => prev.map((item, idx) => {
            if (index === idx) {
                if (field.type === 'select') {
                    item.value = event.value;
                } else if (field.type === "tel") {
                    item.value = event;
                } else {
                    item.value = event.target.value;
                }
            }
            return item;
        }));
    }


    const setField = (field, index) => {
        let element = <></>;
        switch (field.type) {
            case 'select': element = (<Select key={field.id} fieldConfig={field} changed={(event) => fieldChange(event, field, index)} />); break;
            case 'text': element = (<Text key={field.id} fieldConfig={field} changed={(event) => fieldChange(event, field, index)} />); break;
            case 'textarea': element = (<TextArea key={field.id} fieldConfig={field} changed={(event) => fieldChange(event, field, index)} />); break;
            case 'checkbox': element = (<CheckBox key={field.id} fieldConfig={field} changed={(event) => fieldChange(event, field, index)} />); break;
            case 'number': element = (<Number key={field.id} fieldConfig={field} changed={(event) => fieldChange(event, field, index)} />); break;
            case 'file': element = (<File key={field.id} fieldConfig={field} changed={(event) => fieldChange(event, field, index)} />); break;
            case 'date': element = (<Date key={field.id} fieldConfig={field} changed={(event) => fieldChange(event, field, index)} />); break;
            case 'radio': element = (<Radio key={field.id} fieldConfig={field} changed={(event) => fieldChange(event, field, index)} />); break;
            case 'autocomplete': element = (<AutoComplete key={field.id} fieldConfig={field} changed={(event) => fieldChange(event, field, index)} />); break;
            case 'email': element = (<Email key={field.id} fieldConfig={field} changed={(event) => fieldChange(event, field, index)} />); break;
            case 'tel': element = (<Tel key={field.id} fieldConfig={field} changed={(event) => fieldChange(event, field, index)} />); break;
            case 'password': element = (<Password key={field.id} fieldConfig={field} changed={(event) => fieldChange(event, field, index)} />); break;
            case 'month': element = (<Month key={field.id} fieldConfig={field} changed={(event) => fieldChange(event, field, index)} />); break;
            case 'datetime': element = (<DateTime key={field.id} fieldConfig={field} changed={(event) => fieldChange(event, field, index)} />); break;
            case 'otp': element = (<Otp key={field.id} fieldConfig={field} changed={(event) => fieldChange(event, field, index)} />); break;
            default: break;
        }
        return element;
    }

    return (
        <div className='mt-3'>
            {

                fieldArray.map((field, index) => (
                    <div key={`${field.id}_${index}`}>
                        <p>v : {field.value}</p>
                        {setField(field, index)}
                    </div>
                ))
            }
        </div>
    );
}

export default Renderer;