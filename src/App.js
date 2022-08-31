import './App.css';
import ProfileUser from './ProfileUser';
import { Routes, Route } from "react-router-dom";
import ListUser from './ListUser';
import CreateUser from './CreateUser';
import Delete from './Delete';
import Edit from './Edit';
import EditUser from'./EditUser';
import DeleteUser from './DeleteUser';
import EditPro from './EditPro';
import { AppProvider } from "./context";

function App() {

  return (
    <AppProvider>
    <div>           
      <Routes>
        <Route path="/*" element={<ProfileUser />} />
        <Route path="/profile/*" element={<ProfileUser/>}/>        
        <Route path="/edit-profile/" element={<EditPro/>}/>
        <Route path="/create-user" element={<CreateUser/>}/>
        <Route path="/list-users" element={<ListUser/>}/>
        <Route path="/edit-user" element={<Edit/>}/>
        <Route path="/edit-user/:id" element={<EditUser/>}/>
        <Route path="/delete-user" element={<Delete/>}/>
        <Route path="/delete-user/:id" element={<DeleteUser/>}/>
       
      </Routes>
    </div>
    </AppProvider>
  );
}

export default App;
