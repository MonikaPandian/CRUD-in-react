import './App.css';
import Dashboard from './Dashboard';
import { Routes, Route } from "react-router-dom";
import ListUser from './ListUser';
import CreateUser from './CreateUser';
import Delete from './Delete';
import Edit from './Edit';
import EditUser from'./EditUser';
import DeleteUser from './DeleteUser';
import EditPro from './EditPro';

function App() {

  return (
    <div>  
       
      <Routes>
        <Route path="/*" element={<Dashboard />} />
        <Route path="/dashboard/*" element={<Dashboard/>}/>
        <Route path="/create-user/*" element={<CreateUser/>}/>
        <Route path="/list-users/*" element={<ListUser/>}/>
        <Route path="/edit-user/*" element={<Edit/>}/>
        <Route path="/edit-user/:id" element={<EditUser/>}/>
        <Route path="/delete-user/*" element={<Delete/>}/>
        <Route path="/delete-user/:id" element={<DeleteUser/>}/>
        <Route path="./edit-profile/*" element={<EditPro/>}/>
      </Routes>
    </div>
  );
}

export default App;
