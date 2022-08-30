import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const DeleteList = () => {

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
                                onClick={() => navigate(`/delete-user/${usr.id}`)}                                  
                                 color="error" >
                                <DeleteIcon />
                            </IconButton>                            
                        </div>
                    </div>)
            })}
        </div>
  )
}

export default DeleteList;
