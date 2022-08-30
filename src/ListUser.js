import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Footer from './Footer';
import Scrolltop from './Scrolltop';
import Logout from './Logout';
import ListUsr from './ListUsr';

const ListUser = () => {

    return (
        <div>
        <div id="wrapper">
            <Sidebar />
            <div id="content-wrapper" className="d-flex flex-column">

                {/* <!-- Main Content --> */}
                <div id="content">
                    <Navbar />  
                    <ListUsr/>                     
                </div>

                <Footer />
            </div>
        </div>
        <Scrolltop />
        <Logout />
    </div>
    )
}

export default ListUser;
