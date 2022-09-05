import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DeleteUser = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://62e3c20ab54fc209b8903197.mockapi.io/users/${id}`, {
      method: "DELETE",
    })
      .then(toast("Deleted Successfully!!"))
      .then(() => navigate("/delete-user"));
  }, []);

  return (
    <div>
     <ToastContainer/>
    </div>
  )
}

export default DeleteUser;
