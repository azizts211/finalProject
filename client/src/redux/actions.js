
import axios from "axios"
import {GET_USERS,LOGIN_USER,REGISTER_USER,GET_AUTH_USER,LOGOUT_USER} from "./actionTypes"



// Register USer
export const registerUser = (formData) => async (dispatch) => {

    try {
      const res = await axios.post('http://localhost:5000/api/register', formData);
      dispatch({
        type: REGISTER_USER,
        payload: res.data, // { msg: 'User registred with success', user, token }
      });
    } catch (error) {
      console.log(error);
    }
  };
  
  // Login User
  export const loginUser = (formData,navigate) => async (dispatch) => {
  
  
    try {
      const res = await axios.post('http://localhost:5000/api/login', formData);
      dispatch({
        type: LOGIN_USER,
        payload: res.data, // { msg: 'Logged in with success', user, token }
      })
      res.data.isAdmin?
      navigate("/dashboardAdmin")
      :
     navigate('/dashboard')
    } catch (error) {
      console.dir(error);
  
     
    }
  };

  // Get auth user
export const getAuthUser = () => async (dispatch) => {


  try {
    //headers
    const config = {
      headers: {
        'x-auth-token': localStorage.getItem('token'),
      },
    };
    const res = await axios.get('http://localhost:5000/api/user', config);
    dispatch({
      type: GET_AUTH_USER,
      payload: res.data, // {user: req.user}
    });
  } catch (error) {
    console.log(error);
    
  }
};

export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT_USER,
  });
};


export const getUsers=()=>async(dispatch)=>{
    try{
const res=await axios.get("http://localhost:5000/api/getall")
dispatch({
    type:GET_USERS,
    payload:res.data
})
    }
    catch(err){
        console.log(err)
    }
}

export const deleteUser=(id)=>async(dispatch)=>{
    try{
const res=await axios.delete(`http://localhost:5000/api/delete/${id}`)
dispatch(getUsers())
    }
    catch(err){
        console.log(err)
    }

}


//add newUser

export const addUser=(newUser)=>async(dispatch)=>{
    try{
const res=await axios.post("http://localhost:5000/api/addUser",newUser)
dispatch(getUsers())
    }
catch(err){console.log(err)}
}
//edit user

export const editUser=(editedUser,id)=>async(dispatch)=>{
    try {
        const res=await axios.put(`http://localhost:5000/api/edit/${id}`,editedUser)
        dispatch(getUsers())
    }
    catch(err){
        console.log(err)
    }
}

