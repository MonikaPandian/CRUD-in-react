import './App.css';
import Profile from './Profile';
import { Routes, Route } from "react-router-dom";
import DeleteList from './DeleteList';
import EditList from './EditList';
import { AppProvider } from "./context";
import ListUsr from './ListUsr';
import CreateUsr from './CreateUsr';
import Logout from './Logout';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Footer from './Footer';
import EditProfile from './EditProfile';
import EditUser from './EditUser';
import DeleteUser from './DeleteUser';

function App() {

  return (
    <AppProvider>
      <div id="page-top">      
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          {/* <!-- Main Content --> */}
          <div id="content">
            <Navbar />
            <div className="container-fluid">
              <Routes>
                <Route path="/" element={<Profile />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/edit-profile/:id" element={<EditProfile />} />               
                <Route path="/list-users" element={<ListUsr/>} />
                <Route path="/create-user" element={<CreateUsr />} />
                <Route path="/edit-user" element={<EditList />} />
                <Route path="/edit-user/:id" element={<EditUser />} />
                <Route path="/delete-user" element={<DeleteList />} />
                <Route path="/delete-user/:id" element={<DeleteUser />} />
              </Routes>
            </div>
          </div>
          <Footer />
        </div>
      </div>
      <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
      </a>
      <Logout />
    </div>   
    </AppProvider>
  );
}

export default App;
