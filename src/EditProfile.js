import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditProfile = () => {
  return (
    <div>
    <div className="add-user">
    <TextField 
      label="Name" variant="standard"/>
   
    <TextField
      label="Email" variant="standard" />
    
    <TextField
      label="Phone" variant="standard"/> 

    </div>       
    
    <Button className="add-button" onClick={() => {
      toast("Profile Updated")
    
                     
    }} 
      variant="contained">Update</Button>
      <ToastContainer/>
</div>
  )
}

export default EditProfile;
