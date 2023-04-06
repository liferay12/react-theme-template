import React from 'react'
import RoleForm from "../json-data/role.json"
import Form from '../library/renderer/FormRenderer';
import toast from 'react-hot-toast';
import axios from "axios";
export const Role = () => {
    const submitFunc = (formData) => {
        console.log("role form .........")
        console.log(formData.get("userName"));
        console.log(formData.get("name"));
        console.log(formData.get("title"));
        console.log(formData.get("type"));
        console.log(formData.get("subType"));

    }
    return (
        <div className='Home'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 card'>
                    <Form formObject={RoleForm} data={''} url={'http://localhost:8080/api/v1/role'} />
                </div>
            </div>
        </div>
    )
}
