import React from 'react';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const navigate = useNavigate();

    return (

        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            {/* <!-- Sidebar - Brand --> */}
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">Admin Dashboard</div>
            </a>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider my-0" />

            {/* <!-- Nav Item - Dashboard --> */}
            <li className="nav-item active">
                <a className="nav-link" href="#" onClick={() => navigate("/dashboard")}>
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span></a>
            </li>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider" />

            {/* <!-- Heading --> */}
            <div className="sidebar-heading">
                Menu
            </div>

            {/* <!-- Nav Item - List user --> */}
            <li className="nav-item">
                <a className="nav-link" href=""  onClick={() => navigate("/list-users")}>
                    <span className="nav-items"><i className="fa-solid fa-list"></i>List User</span></a>
            </li>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider" />
            {/* <!-- Nav Item - Create user --> */}
            <li className="nav-item">
                <a className="nav-link" href=""  onClick={() => navigate("/create-user")}>
                    <span className="nav-items"><i className="fa-solid fa-plus"></i>Create User</span></a>
            </li>


            {/* <!-- Divider --> */}
            <hr className="sidebar-divider" />

            {/* <!-- Nav Item - List user --> */}
            <li className="nav-item">
                <a className="nav-link" href=""  onClick={() => navigate("/edit-user")}>
                    <span className="nav-items"><i className="fa-solid fa-pencil"></i>Edit User</span></a>
            </li>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider" />

            {/* <!-- Nav Item - List user --> */}
            <li className="nav-item">
                <a className="nav-link" href=""  onClick={() => navigate("/delete-user")}>
                    <span className="nav-items"><i className="fa-solid fa-trash-can"></i>Delete User</span></a>
            </li>


            {/* <!-- Divider --> */}
            <hr className="sidebar-divider d-none d-md-block" />
           
        </ul>
        //  {/* <!-- End of Sidebar --> */}
    )
}

export default Sidebar;
