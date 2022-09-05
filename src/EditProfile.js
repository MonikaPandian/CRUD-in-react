import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useGlobalContext } from "./context";
import { useParams,useNavigate } from 'react-router-dom';
import { useState } from 'react';

const EditProfile = () => {

  const { profileData, setProfileData } = useGlobalContext(); 
  const { id } = useParams();
  const navigate = useNavigate();    
  const [name, setName] = useState(profileData.name);
  const [mobile, setMobile] = useState(profileData.mobile);
  const [txt, setTxt] = useState(profileData.txt);
  const [profPic, setProfPic] = useState(profileData.profPic);

  function handleSubmit() {
    if (!name || !mobile || !txt || !profPic) {
      alert("Please enter the details");
    } else {
      setProfileData({
        ...profileData,
        id,
        name,
        mobile,
        txt,
        profPic
      });
      navigate("/profile");
      toast("Profile is updated !!");
    }
  }

  return (
    <div>
    <div className="add-user">
    <TextField value={name} onChange={(e)=>setName(e.target.value)}
      label="Name" variant="standard"/>
   
    <TextField value={mobile} onChange={(e)=>setMobile(e.target.value)}
      label="Phone" variant="standard" />
    
    <TextField value={txt} onChange={(e)=>setTxt(e.target.value)}
      label="Description" variant="standard"/> 

    <TextField value={profPic} onChange={(e)=>setProfPic(e.target.value)}
      label="Profile Pic" variant="standard"/> 

    </div>       
    
    <Button className="add-button" onClick={handleSubmit}                            
      variant="contained">Update</Button>
      <ToastContainer/>
</div>
  )
}

export default EditProfile;
