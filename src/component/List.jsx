import axios from "axios";
import { async } from "q";
import { useEffect, useState } from "react";

export const List = () =>{

    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("");
    const [FilterUsers, setFilterUsers] = useState([]);
    useEffect(() => {
        async function fetchUserList() {
            let user = await axios.get('http://localhost:8080/api/v1/user')
            setUsers(user.data);
            setFilterUsers(user.data);
        };
        fetchUserList();
    }, []);
    useEffect(() => {
        const result = users.filter(user => {
            return null; //user.firstName.toLowerCase().match(search.toLowerCase());
        })
        setFilterUsers(result);
    }, [search]);


    return(
        <></>
    );
}