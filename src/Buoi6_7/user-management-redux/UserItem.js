import React, { Component } from "react";
import { connect } from "react-redux";
import { actDeleteUser, actEditUser } from "../../redux/reducers/user/action/action";

class UserItem extends Component {
  render() {
    const { user } = this.props;
    return (
      <tr>
        <td>{user.fullname}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>{user.phoneNumber}</td>
        <td>{user.type}</td>
        <td>
          <button
            className="btn btn-info mr-2"
            data-toggle="modal"
            data-target="#modelIdUser"
            onClick={() => { this.props.getUserEdit(user) }}
          >
            Edit
          </button>
          <button className="btn btn-danger" onClick={() => { this.props.deleteUser(user.id) }}>Delete</button>
        </td>
      </tr>
    );
  }
}

// Gữi action lên redux
const mapDispathchToProps = (dispatch) => {

  return {
    deleteUser: (id) => {
      dispatch(actDeleteUser(id));
    },
    getUserEdit: (user) => {
      dispatch(actEditUser(user));
    },
  };
};

export default connect(null, mapDispathchToProps)(UserItem);
