import React from 'react';
import { useNavigate,useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Footer from './Footer';
import Scrolltop from './Scrolltop';
import Logout from './Logout';

const DeleteUser = () => {

    const { id } = useParams();   
    const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://62e3c20ab54fc209b8903197.mockapi.io/users/${id}`, {
        method: "DELETE",
    })
    .then(toast("Deleted Successfully!!"))
    .then(() =>navigate("/delete-user"));
  },[]);

  return (
    <div>
            <div id="wrapper">
                <Sidebar />
                <div id="content-wrapper" className="d-flex flex-column">
                    {/* <!-- Main Content --> */}
                    <div id="content">
                        <Navbar />
                        <ToastContainer/>
                    </div>
                    <Footer />
                </div>
            </div>
            <Scrolltop />
            <Logout />
        </div>
  )
}

export default DeleteUser;
