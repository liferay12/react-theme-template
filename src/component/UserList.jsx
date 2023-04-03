import React, { useRef } from 'react';
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import DataTable from 'react-data-table-component';
import { useDownloadExcel } from 'react-export-table-to-excel';

export const UserList = () => {


    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("");
    const [FilterUsers, setFilterUsers] = useState([]);

    useEffect(() => {
        async function fetchUserList() {
            let user = await axios.get('http://localhost:9090/api/v1/user')
            console.log("--------" + user);
            setUsers(user.data);
            setFilterUsers(user.data);
        };
        fetchUserList();
        
    }, []);

    // useEffect(() => {
    //     const result = users.filter(user => {
    //         return user.name.toLowerCase().match(search.toLowerCase());
    //     })
    //     setFilterUsers(result);
    //     console.log("-------++++------" + users);
    // }, [search]);

    const column = [
        {
            name: "User Id",
            selector: (row) => row.userId,
            sortable: true
        },
        {
            name: "First Name",
            selector: (row) => row.firstName+row.lastName,
            sortable: true
        },
        {
            name: "Screen Name",
            selector: (row) => row.screenName,
            sortable: true
        },
        {
            name: "Email Address",
            selector: (row) => row.emailAddress,
            sortable: true
        },
        {
            name: "Company Id",
            selector: (row) => row.companyId,
            sortable: true
        },
        {
            name: "Actions",
            cell: row => <button className="btn btn-primary" onClick={() => alert(row.screenName)}>Edit</button>
        }
    ];

    const tableRef = useRef(null);
    const { onDownload } = useDownloadExcel({
        currentTableRef: tableRef.current,
        filename: 'Users table',
        sheet: 'Users'
    })

    return (
        <>
            <div>hello {users.screenName}</div>
            <DataTable
                title="User List"
                columns={column}
                data={users}
                pagination
                fixedHeader
                fixedHeaderScrollHeight="25rem"
                selectableRows
                selectableRowsHighlight
                highlightOnHover
                actions={<button onClick={onDownload} className="btn btn-sm btn-info">Export</button>}
                subHeader
                subHeaderComponent={
                    <input
                        type="text"
                        placeholder="Search here"
                        className="w-25 form-control"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}

                    />}
                subHeaderAlign="left"
            />
        </>
    )
}
