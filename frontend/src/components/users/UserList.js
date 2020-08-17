import React from "react";

const UserList = (props) => {
  return (
    <div>
      <h2>Users</h2>
      <div className="user-list">
        {props.users.map((user) => (
          <p>{user.username}</p>
        ))}
      </div>
    </div>
  );
};

export default UserList;
