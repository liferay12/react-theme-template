import React from 'react'
import { useState } from "react"
import axios from "axios"
import { useEffect } from "react"
export const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        let data = []
        axios.get('http://localhost:8080/api/v1/user').then((response) => {
            console.log(response.data);
            response.data.map((user) => {
                console.log(user);
                data.push(user)
            })
            console.log("data...")
            console.log(data)
            setUsers(data);
        });
    }, []);

    return (
        <div>
            {
                users.map((user) =>
                    <>
                        {
                            user.firstName
                        }
                    </>
                )
            }
        </div>
    )
}
