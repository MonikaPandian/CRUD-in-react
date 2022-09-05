import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function EditUser() {

  const { id } = useParams();

  const [user, setUser] = useState("")
 
  useEffect(() => {
    fetch(`https://62e3c20ab54fc209b8903197.mockapi.io/users/${id}`, {
      method: "GET"
    })
    .then((data) => data.json())
    .then((data) => setUser(data))         
    .catch((e) => console.log(e))
  }, []);

  return (

    <div>                 
            {user ? <EditUserForm user={user} /> : "Loading..."}        
    </div>

  )
}


function EditUserForm({ user }) {

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);
 
  const navigate = useNavigate();


  return (
    <div>
      <div className="add-user">
        <TextField onChange={(event) => setName(event.target.value)}
          label="Name" value={name} variant="standard" />

        <TextField onChange={(event) => setEmail(event.target.value)}
          label="Email" value={email} variant="standard" />

        <TextField onChange={(event) => setPhone(event.target.value)}
          label="Phone" value={phone} variant="standard" />

      </div>

      <Button className="add-button" onClick={() => {
        const updatedUser = {
          name: name,
          email: email,
          phone: phone
        };

        fetch(`https://62e3c20ab54fc209b8903197.mockapi.io/users/${user.id}`, {
          method: "PUT",
          body: JSON.stringify(updatedUser),
          headers: {
            "Content-Type": "application/json",
          }
        })
          .then((data) => data.json())
          .then(toast("User Updated"))          
          .then(() => navigate("/edit-user"));           
      }}
        variant="contained">Update</Button>
        <ToastContainer/>
    </div>
  )
}

