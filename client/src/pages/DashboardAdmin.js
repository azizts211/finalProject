import {useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {getUsers} from "../redux/actions"
import {deleteUser} from "../redux/actions"
import "./dashboard.css"
function DashboardAdmin() {
  const dispatch=useDispatch()
  const getAll=()=>{
    dispatch(getUsers())
  }
  useEffect(getAll,[])
const users=useSelector((state)=>state.users)
console.log(users,"usersssssssssssssssssssss")




  return (
    <div className="user-list">
    <h2>User List</h2>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
              <button className="edit-button">Edit</button>
              <button className="delete-button"  onClick={() => {
  dispatch(deleteUser(user._id));
}}>Delete</button>
             
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}

export default DashboardAdmin
