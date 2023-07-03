import React, { Component } from "react";
import Search from "./Search";
import Users from "./Users";
import Modal from "./Modal";
import { connect } from "react-redux";


class Redux extends Component {

  render() {
    return (

      <div className="container">
        <h1 className="display-4 text-center my-3">User Management-Redux (Buổi 6)</h1>
        <div className="d-flex justify-content-between align-items-center">
          <Search />
          <button
            onClick={this.props.addSubmit}
            className="btn btn-success" data-toggle="modal" data-target="#modelIdUser">
            Add User</button>
        </div>

        <Users />

        <Modal />
      </div>
    );
  }
}
const mapDispathchToProps = (dispatch) => {
  return {
    addSubmit: () => {
      const action = {
        type: "EDIT_USER",
        payload: null,
      };
      dispatch(action);
    },
  };
};

export default connect(null, mapDispathchToProps)(Redux);
