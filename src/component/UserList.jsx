import React, { useRef } from 'react';
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import DataTable from 'react-data-table-component';
import { useDownloadExcel } from 'react-export-table-to-excel';
import { ModalPopup } from './ModalPopup';
import { Button, Modal } from 'react-bootstrap';
import UserRegistration from './UserRegistration';

export const UserList = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("");
    const [FilterUsers, setFilterUsers] = useState([]);

    useEffect(() => {
        async function fetchUserList() {
            let user = await axios.get('http://localhost:8080/api/v1/user')
            console.log("--------" + user);
            setUsers(user.data);
            setFilterUsers(user.data);
        };
        fetchUserList();

    }, []);

    useEffect(() => {
        const result = users.filter(user => {
            return user.firstName.toLowerCase().match(search.toLowerCase());
        })
        setFilterUsers(result);
        console.log("-------++++------" + users);
    }, [search]);

    //    const openEditor=()=>{
    //         alert("inside open editor");
    //         <ModalPopup ></ModalPopup>
    //     }

    const column = [
        {
            name: "User Id",
            selector: (row) => row.userId,
            sortable: true
        },
        {
            name: "Full Name",
            selector: (row) => row.firstName + " " + row.lastName,
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
            cell: row => <button className="btn btn-primary" onClick={handleShow}>Edit</button>
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
            {/* <div>hello {users.screenName}</div> */}
            <DataTable
                title="User List"
                columns={column}
                data={FilterUsers}
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

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                className='modal-lg'
            >
                <Modal.Header closeButton>
                    <Modal.Title className='text-center'>Edit User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <UserRegistration></UserRegistration>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    {/* <Button variant="primary">Understood</Button> */}
                </Modal.Footer>
            </Modal>
        </>
    )
}
