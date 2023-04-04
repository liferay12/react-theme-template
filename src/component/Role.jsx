import React from 'react'
import RoleForm from "../json-data/role.json"
import Form from '../library/renderer/FormRenderer';
export const Role = () => {
    const submitFunc = (formData) => {
        // event.preventDefault();
        console.log("Parent component......"+formData.get('FullName'));
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
