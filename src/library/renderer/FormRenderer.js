import React, { useState } from 'react';
import Renderer from './FieldRenderer';
import toast from 'react-hot-toast';
import axios from "axios";
const Form = (props) => {
    const { formObject } = props;
    const [fieldArray, setFieldArray] = useState(formObject.fields);
    const [formData, setFormData] = useState([]);
    const submit = (e) => {
        e.preventDefault();
        var form = new FormData();
        fieldArray.map((item, index) => {
            console.log('item..', item.value)
            if (item.value != "") {
                form.append(item.name, item.value);

            }
        })

        axios.post(props.url, form, {
            headers: {
                "Content-Type": "application/json"
            }
        }).then((response) => {
            console.log(response.data);
            toast.success("Your Form has been succesfully submitted");
        }).catch((err) => {
            console.error(err);
            toast.error("Opps ! Something went wrong")
        })



    }
    return (
        <div className='container Form'>
            <h3 className='text-center'>{props.formObject.title}</h3>
            {console.log("Form-Submit data--->", formData)}
            <form onSubmit={(event) => { submit(event) }}>
                <Renderer fieldArray={fieldArray} fieldData={props.data} setFieldArray={setFieldArray} />
                <div className='text-center m-3'>
                    <button type='submit' className='btn btn-lg btn-primary '>Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Form;