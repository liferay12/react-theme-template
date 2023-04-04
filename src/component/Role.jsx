import React from 'react'
import RoleForm from "../json-data/role.json"
import Form from '../library/renderer/FormRenderer';
import toast from 'react-hot-toast';
import axios from "axios";
export const Role = () => {
    const submitFunc = (formData) => {

        console.log(formData.get("userName"));
        axios.post('http://localhost:8080/api/v1/role', formData
        )
            .then((response) => {
                console.log(response.data);
                toast.success("Your Form has been succesfully submited")
            });
    }
    return (
        <div className='Home'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 card'>

                    <Form formObject={RoleForm} submit={(formData) => submitFunc(formData)} />
                </div>
            </div>
        </div>
    )
}
