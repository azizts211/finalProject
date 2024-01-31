import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteUser } from './redux/actions';
import EditUser from './EditUser';

import './UserCard.css'; // Import your CSS file for styling

function UserCard({ el }) {

  return (
    <div className="user-card">
      <img alt="Sample" src="https://picsum.photos/300/200" className="user-card-image" />
      <div className="user-card-body">
        <h5 className="user-card-title">{el.name}</h5>
        <h6 className="user-card-subtitle">{el.email}</h6>
        <p className="user-card-text">{el.phone}</p>
        <div className="buttons">
       
        <EditUser el={el} />
        </div> 
      </div>
    </div>
  );
}

export default UserCard;
