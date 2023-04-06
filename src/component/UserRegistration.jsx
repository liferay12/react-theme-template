import React, { useEffect, useState } from 'react'
import Form from '../library/renderer/FormRenderer';
import userRegistration from "../json-data/UserRegistration.json"
import toast from 'react-hot-toast';
import axios from "axios";

export default function UserRegistration(props) {
    
    const editabledata = props.data;
    console.log("inside form " + editabledata);
    const [userId, setUserId] = useState([]);
    useEffect(() => {
        async function fetchUser() {
            let userById = await axios.get(`http://localhost:8080/api/v1/user/${editabledata}`)
            setUserId(userById.data);
            //setFilterUsers(user.data);
        };
        fetchUser();
    },[]);

    console.log("fetch user by id "+userId.screenName);


    const submitFunc = (formData) => {
        axios.post('http://localhost:8080/api/v1/user', formData, {
            headers: {
                "Content-Type": "application/json"
            },
        }).then((response) => {
            console.log(response.data);
            toast.success("Your Form has been succesfully submited")
        });
    }
    return (
        <div className='Home'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 card'>
                    {/* if(editabledata)
                        <Form formObject={editabledata} submit={(formData) => submitFunc(formData)} />
                    else */}
                    <Form formObject={userId} submit={(formData) => submitFunc(formData)} />
                    {/* <button type="button" className='btn btn-primary' onClick={notify}>Notify</button> */}
                </div>
            </div>
        </div>
    );
}
