import React, { useEffect, useState } from 'react'
import Form from '../library/renderer/FormRenderer';
import userRegistration from "../json-data/UserRegistration.json"
import toast from 'react-hot-toast';
import axios from "axios";

export default function UserRegistration() {

    const [userData, setUserData] = useState({});
    useEffect(() => {
        fetchUser();
    }, []);
    async function fetchUser() {
        let data = await axios.get(`http://localhost:8080/api/v1/user/1`);
        let editData = data.data;
        setUserData(editData)
    };

    return (
        <div className='Home'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 card'>
                    <Form formObject={userRegistration} editData={userData} url={'http://localhost:8080/api/v1/user/1'} />
                </div>
            </div>
        </div>
    );
}
