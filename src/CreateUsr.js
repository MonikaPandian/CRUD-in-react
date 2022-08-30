import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CreateUsr() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  
  const navigate  = useNavigate();

  return (
    <div>
        <div className="add-user">
        <TextField onChange={(event) => setName(event.target.value)}
          label="Name" variant="standard"/>
       
        <TextField onChange={(event) => setEmail(event.target.value)}
          label="Email" variant="standard" />
        
        <TextField onChange={(event) => setPhone(event.target.value)}
          label="Phone" variant="standard"/> 

        </div>       
        
        <Button className="add-button" onClick={() => {
          const newUser = {
            name: name,
            email: email,
            phone: phone           
          };
        
          fetch("https://62e3c20ab54fc209b8903197.mockapi.io/users",{
            method: "POST",
            body: JSON.stringify(newUser),
            headers: {
              "Content-Type": "application/json",
            }
          })
          .then((data) => data.json())
          .then(toast("User created successully!!"))
          .then(() => navigate("/list-users"));                  
        }} 
          variant="contained">Add User</Button>
          <ToastContainer/>
    </div>
  );
}

export default CreateUsr;