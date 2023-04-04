import React from 'react'
import Form from '../library/renderer/FormRenderer';
import userRegistration from "../json-data/UserRegistration.json"
import toast from 'react-hot-toast';
import axios from "axios";
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

    const submitFunc = (formData) => {


        console.log("-======= user registration form data===========")
        // console.log(formData.get('firstName'))
        // console.log(formData.get('lastName'))
        // console.log(formData.get('userName'))
        // console.log(formData.get('email'))

        axios.post('http://localhost:8080/api/v1/user', {
            data: {
                'firstName': formData.get('firstName'),
                'screenName': formData.get('screenName')
            }
        })
            .then((response) => {
                console.log(response.data);
                toast.success("Your Form has been succesfully submited")
            });
    }
    return (
        <div className='Home'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 card'>

                    <Form formObject={userRegistration} submit={(formData) => submitFunc(formData)} />
                    {/* <button type="button" className='btn btn-primary' onClick={notify}>Notify</button> */}
                </div>
            </div>
        </div>
    );
}
