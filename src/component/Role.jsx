import React from 'react'
import RoleForm from "../json-data/role.json"
import Form from '../library/renderer/FormRenderer';
export const Role = () => {
    const submitFunc = (event) => {
        // event.preventDefault();
        console.log(event);
    }
    return (
        <div className='Home'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 card'>

                    <Form formObject={RoleForm} submit={(event) => submitFunc(event)} />
                    {/* <button type="button" className='btn btn-primary' onClick={notify}>Notify</button> */}
                </div>
            </div>
        </div>
    )
}
