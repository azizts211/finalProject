import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'

import { getUsers } from './redux/actions'
import UserCard from "./UserCard"

function UsersList() {
    const dispatch=useDispatch()
    const getall=()=>{
        dispatch(getUsers())
    }
    useEffect(getall,[])
const userss=useSelector((state)=>state.users)
console.log(userss,"asiiiiiia")
  return (
    <div style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap"}}>
  
{
  userss.map((el)=>(
    <UserCard el={el}/>
  ))
}

   </div>
  )
}

export default UsersList
