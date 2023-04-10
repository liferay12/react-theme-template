import React, { useRef } from 'react';
import { useState } from "react";
import { useEffect } from "react";
import DataTable from 'react-data-table-component';
import { useDownloadExcel } from 'react-export-table-to-excel';
import { Button, Modal } from 'react-bootstrap';
import UserRegistration from './UserRegistration';
import columns from '../json-data/DataTableColumns.json';
import { Delete } from './Delete';


export const DataTabel = (props) => {
    const [show, setShow] = useState(false);
    const [column, setColumn] = useState([]);
    const [editrow, setEditrow] = useState();
    const [events, setEvents] = useState();
    const handleClose = () => setShow(false);

    const handleShow = (id, name) => {
        setShow(true);
        setEditrow(id);
        setEvents(name);
        
    }
    useEffect(() => {
        const fetchedButtons = [];
        columns.map((item, index) => {
            if (item.name === "Actions" && item.cell.length !== 0) {
                fetchedButtons.push({
                    "name": "Actions", cell: (row) => (<>
                        {item.cell.map((i) => {
                            return (
                                <button className={i.class} onClick={() => (handleShow(row.userId, i.name))}><i class={i.icon} aria-hidden="true">{i.lebel}</i></button>
                            )
                            // if (i.name === "edit") {
                            //     return (
                            //         <button className="btn btn-sm btn-primary" onClick={() => alert(row.userId)}><i class="fa fa-pencil"></i></button>
                            //     )
                            // } else if (i.name === "delete") {
                            //     return (
                            //         <button className="btn btn-sm btn-danger" onClick={() => alert(row.screenName)}><i class="fa fa-trash"></i></button>
                            //     )
                            // } else {
                            //     return (
                            //         <button className="btn btn-sm btn-warrnning" onClick={() => alert(row.screenName)}><i class={i.icon}></i>{i.name}</button>
                            //     )
                            // }
                        })
                        }
                    </>)
                })
            } else {
                fetchedButtons.push(item);
            }
        });
        setColumn(fetchedButtons);
    }, []);

    // Check Actions to render component in to the modal
    let modalContent;
    if (events === "edit") {
        modalContent = <UserRegistration data={editrow}></UserRegistration>;
    } else if (events === "delete") {
        modalContent = <Delete data={editrow}></Delete>;
    }else if (events === "add") {
        modalContent = <UserRegistration></UserRegistration>;
    } else {
        modalContent = <h1 className='text-danger'>Import Component to render in modal</h1>;
    }

    
    // function addUser() {
    //     console.log("Add user");
    //     modalContent = <UserRegistration></UserRegistration>
    // }

    // Fetch user list from an api
    // const [users, setUsers] = useState([]);
    // const [search, setSearch] = useState("");
    // const [FilterUsers, setFilterUsers] = useState([]);
    // useEffect(() => {
    //     async function fetchUserList() {
    //         let user = await axios.get('http://localhost:8080/api/v1/user')
    //         setUsers(user.data);
    //         setFilterUsers(user.data);
    //     };
    //     fetchUserList();
    // }, []);
    // useEffect(() => {
    //     const result = users.filter(user => {
    //         return null; //user.firstName.toLowerCase().match(search.toLowerCase());
    //     })
    //     setFilterUsers(result);
    // }, [search]);

    // To export table into excell sheet
    const tableRef = useRef(null);
    const { onDownload } = useDownloadExcel({
        currentTableRef: tableRef.current,
        filename: 'Users table',
        sheet: 'Users'
    })

    

    return (
        <>
        {console.log("from list "+props.data)}
            <DataTable
                title="User List"
                columns={column}
                data={props.data}
                pagination
                fixedHeader
                fixedHeaderScrollHeight="25rem"
                selectableRows
                selectableRowsHighlight
                highlightOnHover
                actions={(
                    <>
                        <button onClick={onDownload} className="btn btn-sm btn-info">Export</button>
                        <button onClick={handleShow} className="btn btn-sm btn-primary">+ Add User</button>
                    </>
                )}
                subHeader
                subHeaderComponent={
                    <input
                        type="text"
                        placeholder="Search here"
                        className="w-25 form-control"
                        value={props.search}
                        onChange={(e) => props.setSearch(e.target.value)}

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
                    <Modal.Title className='text-center'>{events} User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {modalContent}
                    {/* {modalCon} */}

                    {/* <UserRegistration data={editrow}></UserRegistration> */}
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
