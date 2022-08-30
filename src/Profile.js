import React from 'react';
import img from './img/profile.jpg';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';

const Profile = () => {

    const navigate = useNavigate();

    return (
        <div>
            <div className="heading"><h1>Profile Details</h1></div>
            <div className="row">
                <div className="col-lg-4">
                    <img src={img} className="profile-pic" />
                </div>
                <div className="col-lg-2 name">
                    <h1>James</h1>
                    <h5>8765423489</h5>
                </div>
                <div className="col edit-icon">
                    <IconButton
                        onClick={()=>navigate("./edit-profile")}
                        color="secondary">
                        <EditIcon />
                    </IconButton>
                </div>
            </div>
            <div className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>

        </div>
    )
}

export default Profile;
