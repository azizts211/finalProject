const { GET_USERS,REGISTER_USER,LOGIN_USER,GET_AUTH_USER,LOGOUT_USER} = require("./actionTypes");

const initState={
    token: localStorage.getItem('token'), //null
    user: null,
    isAuth: false,
    msg: null,
    users:[]
}

export const reducer=(state=initState,action)=>{
switch (action.type) {
    case REGISTER_USER:
    case LOGIN_USER:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        
        isAuth: true,
        msg: action.payload.msg,
  user:action.payload.user
      };
      case GET_AUTH_USER:
      return {
        ...state,
     
        isAuth: true,
        user:action.payload.user,
      };

    case GET_USERS:
        return {
            ...state,
            users:action.payload.userslist
        }
        case LOGOUT_USER:
            localStorage.removeItem('token');
            return {
              ...state,
              token: null,
              isAuth: false,
              user: null,
          
            };

    default:
        return state
}
}