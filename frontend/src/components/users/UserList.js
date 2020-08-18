import React from "react";

const UserList = (props) => {
  return (
    <div>
      <h2>Users</h2>
      <div className="user-list">
        <div className="row">
          {props.users.map((user) => (
            <div className="col col-4">{user.username}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserList;
