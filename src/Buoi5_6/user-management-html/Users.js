import React, { Component } from "react";
import UserItem from "./UserItem";

class Users extends Component {
  render() {
    const { userList,getUserDelete,getUserEdit } = this.props;
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((user) => {
              return <UserItem user={user} key={user.id} getUserDelete={getUserDelete} getUserEdit={getUserEdit}/>
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Users;
