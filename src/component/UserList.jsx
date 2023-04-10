import React, { useRef } from 'react';
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import DataTable from 'react-data-table-component';
import { useDownloadExcel } from 'react-export-table-to-excel';
import { ModalPopup } from './ModalPopup';
import { Button, Modal } from 'react-bootstrap';
import UserRegistration from './UserRegistration';
import columns from '../json-data/DataTableColumns.json';

export const UserList = () => {
    const [show, setShow] = useState(false);
    const [column, setColumn] = useState([]);
    const [editrow, setEditrow] = useState();
    const handleClose = () => setShow(false);

    const [buttons, setButtons] = useState([]);

    useEffect(() => {
        const fetchedButtons = [];
        columns.map((item, index) => {
            if (item.name === "Actions" && item.cell.length !== 0) {
                fetchedButtons.push({
                    "name": "Actions", cell: (row) => (<>
                        {item.cell.map((i) => {
                            if (i.name === "edit") {
                                return (
                                    <button className="btn btn-sm btn-primary" onClick={() => alert(row.userId)}><i class="fa fa-pencil"></i></button>
                                )
                            } else if (i.name === "delete") {
                                return (
                                    <button className="btn btn-sm btn-danger" onClick={() => alert(row.screenName)}><i class="fa fa-trash"></i></button>
                                )
                            } else {
                                return (
                                    <button className="btn btn-sm btn-warrnning" onClick={() => alert(row.screenName)}><i class={i.icon}></i>{i.name}</button>
                                )
                            }
                        })


                        }
                    </>)

                })
            } else {
                console.log(item.sortable + "...." + item.selector, " : ", item.name)
                fetchedButtons.push(item);
            }
        });
        setColumn(fetchedButtons);
    }, []);

    const handleShow = (cell) => {
        setShow(true);
        setEditrow(cell);
        //console.log("editable data handleshow "+editrow);
    }
    console.log("editable data " + editrow);
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


    const tableRef = useRef(null);
    const { onDownload } = useDownloadExcel({
        currentTableRef: tableRef.current,
        filename: 'Users table',
        sheet: 'Users'
    })

    return (
        <>
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
                    <UserRegistration data={editrow}></UserRegistration>
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
