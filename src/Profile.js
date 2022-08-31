import React from 'react';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from "./context";

const Profile = () => {

    const navigate = useNavigate();
    const { profileData } = useGlobalContext(); 
     

    return (
        <div>
            <div className="heading"><h1>Profile Details</h1></div>
            <div className="row">
                <div className="col-lg-4">
                    <img src={profileData.profPic} className="profile-pic" />
                </div>
                <div className="col-lg-2 name">
                    <h1>{profileData.name}</h1>
                    <h5>{profileData.mobile}</h5>
                </div>
                <div className="col edit-icon">
                    <IconButton
                        onClick={() => navigate("./edit-profile/")}
                        color="secondary">
                        <EditIcon />
                    </IconButton>
                </div>
            </div>
            <div className="description">
                {profileData.txt}
            </div>

        </div>
    )
}

export default Profile;
