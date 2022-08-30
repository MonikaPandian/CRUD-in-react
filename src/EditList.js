import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import React from 'react';

const EditList = () => {

    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    function getUsers() {
        fetch("https://62e3c20ab54fc209b8903197.mockapi.io/users", {
            method: "GET"
        })
            .then((data) => data.json())
            .then((users) => setUsers(users))
            .catch((e) => console.log(e));
    }

    useEffect(() => getUsers(), []);

    return (
        <div>
            <div className=''><h1>List of User Details</h1></div>
            {users.map((usr) => {
                return (
                    <div className="list-users">
                        <h3>{usr.id}.{usr.name}</h3>
                        <div>{usr.email}</div>
                        <div>{usr.phone}
                            <IconButton
                                onClick={() => navigate(`/edit-user/${usr.id}`)}
                                color="secondary">
                                <EditIcon />
                            </IconButton>
                        </div>
                    </div>)
            })}
        </div>
    )
}

export default EditList;
