import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Footer from './Footer';
import Scrolltop from './Scrolltop';
import Logout from './Logout';
import { useNavigate } from 'react-router-dom';
import Profile from './Profile';

const Dashboard = () => {

    const navigate = useNavigate();
    
    return (
        <div>
            <div id="wrapper">
                <Sidebar />
                <div id="content-wrapper" className="d-flex flex-column">
                    {/* <!-- Main Content --> */}
                    <div id="content">
                        <Navbar />
                        <Profile/>
                    </div>
                    <Footer />
                </div>
            </div>
            <Scrolltop />
            <Logout />
        </div>
    )
}

export default Dashboard;

