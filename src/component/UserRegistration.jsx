import React, { useEffect, useState } from 'react'
import Form from '../library/renderer/FormRenderer';
import userRegistration from "../json-data/UserRegistration.json"
import toast from 'react-hot-toast';
import axios from "axios";

export default function UserRegistration() {


    let userData = "";
    useEffect(() => {
        fetchUser();
    }, []);
    async function fetchUser() {
        userData = await axios.get(`http://localhost:8080/api/v1/user/1`);
        console.log(userData)
    };

    return (
        <div className='Home'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 card'>

                    <Form formObject={userRegistration} data={userData} url={'http://localhost:8080/api/v1/user/1'} />

                </div>
            </div>
        </div>
    );
}
