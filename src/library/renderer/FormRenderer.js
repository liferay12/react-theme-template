import React, { useState } from 'react';
import Renderer from './FieldRenderer';

const Form = (props) => {
    const { formObject } = props;
    const [fieldArray, setFieldArray] = useState(formObject.fields);
    const [formData, setFormData] = useState([]);
    // console.log(fieldArray);
    const submit = (e) => {
        // e.preventDefault();
        let a = [];
        var form = new FormData();
        
        fieldArray.map((item, index) => {
            console.log('item..', item.value)
            if (item.value != "") {
                form.append(item.name, item.value);
                a.push(item.value)
            }
        })
        console.log("-======= form data===========")
        console.log(form)
        props.submit(form);
        setFormData(a)

    }
    return (
        <div className='container Form'>
            <h1>{props.formObject.title}</h1>
            {console.log("Form-Submit data--->", formData)}
            <form onSubmit={() => { submit() }}>
                <Renderer fieldArray={fieldArray} setFieldArray={setFieldArray} />
                <div className='text-center mt-3'>
                    <button type='submit' className='btn btn-primary form-control'>Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Form;