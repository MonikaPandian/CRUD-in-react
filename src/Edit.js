import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Footer from './Footer';
import Scrolltop from './Scrolltop';
import Logout from './Logout';
import EditList from './EditList';

const Edit = () => {

    return (
        <div>
        <div id="wrapper">
            <Sidebar />
            <div id="content-wrapper" className="d-flex flex-column">
                    {/* <!-- Main Content --> */}
                <div id="content">
                    <Navbar />  
                    <EditList/>                     
                </div>
                <Footer />
            </div>
        </div>
        <Scrolltop />
        <Logout />
    </div>
    )
}

export default Edit;
