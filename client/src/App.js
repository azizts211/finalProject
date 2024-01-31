
import './App.css';
import {Routes,Route,Link} from  "react-router-dom"
import UsersList from './UsersList';
import AddUser from './AddUser';
import AppNavbar from './pages/AppNavbar';
import Dashboard from './pages/Dashboard';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {getAuthUser} from "./redux/actions"
import { useSelector } from 'react-redux';
import Home from "./Home"
import DashboardAdmin from './pages/DashboardAdmin';
function App() {
  const dispatch=useDispatch()
  const getUser=()=>{
    dispatch(getAuthUser())
  }
  useEffect(getUser,[])
  const user=useSelector((state)=>state.user)

  return (
    <div className="App">
<AppNavbar />
     
    
<Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/users" element={<UsersList />}/>
  <Route path="/dashboard" element={<Dashboard />} />
</Routes>
  {user &&
   <Routes> 
    <Route path="/dashboardAdmin" element={<DashboardAdmin />} />
   
   </Routes>}
 


      
    </div>
  );
}

export default App;
