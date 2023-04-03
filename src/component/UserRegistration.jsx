import React from 'react'
import Form from '../library/renderer/FormRenderer';
import userRegistration from "../json-data/UserRegistration.json"
import form from '../json-data/UserRegistration.json';
import toast from 'react-hot-toast';
export default function UserRegistration() {

    const notify = () => {
        toast.success('Here is your toast Here is your toast.', {
            style: {
                borderRadius: '10px',
                background: '#333',
                color: '#fff',
            }
        });
    }

    const submitFunc = (event) => {
        // event.preventDefault();
        console.log(event);
    }
    return (
        <div className='Home'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 card'>

                    <Form formObject={userRegistration} submit={(event) => submitFunc(event)} />
                    {/* <button type="button" className='btn btn-primary' onClick={notify}>Notify</button> */}
                </div>
            </div>
        </div>
    );
}
