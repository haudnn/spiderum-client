import React from 'react'
import './userssearch.scss'
import { Link } from "react-router-dom";
const UsersSearch = ({user}) => {
  return (
   <div className="user-container">
        <Link to={`/user/${user.userName}`} className="card-user">
            <img src={user.avatar ? user.avatar : "https://www.gravatar.com/avatar/262cfa0997548c39953a9607a56f27da?d=wavatar&f=y"} alt="" className="post-avt" />
            <div className="user-info">
                <Link to={`/user/${user.userName}`} className="post-username">
                    <span>{user.displayName ? user.displayName : user.userName }</span>
                </Link>
            </div>
        </Link>
  </div>
  )
}

export default UsersSearch