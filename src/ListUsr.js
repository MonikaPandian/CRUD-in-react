import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
    IconButton,
    Typography,
    ListItem,
    ListItemSecondaryAction,
    ListItemText
} from "@mui/material";

const ListUsr = () => {

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
                    <div>{usr.phone}</div>                
                </div>)
            })}
        </div>
    )
}

export default ListUsr;
