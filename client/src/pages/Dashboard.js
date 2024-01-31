import {useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getAuthUser } from '../redux/actions'
function Dashboard() {
  const dispatch=useDispatch()
 
 
  const profile=useSelector((state)=>state.user)
  console.log(profile,"azerttyyyyyyyyyyy")
  const navigate=useNavigate()
  useEffect(()=>profile.isAdmin && navigate("/dashboardAdmin"),[])
  return (
    <div>   
      <h1>{profile.name}</h1>
      <h3>{profile.lastName}</h3>
      <h3>{profile.email}</h3>
    
    </div>
  )
}

export default Dashboard
