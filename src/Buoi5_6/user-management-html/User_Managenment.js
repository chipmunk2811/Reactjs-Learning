import React, { Component } from "react";
import Search from "./Search";
import Users from "./Users";
import Modal from "./Modal";
import DATA from "./data.json"
class User_Managerment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: DATA,
      keyWord: null,
      editUser: null,
    };
  }

  // Delete
  _findIndex = (id) => {
    return this.state.userList.findIndex(user => user.id === id)
    // Không trùng id thì return về giá trị là -1 
  };

  handleDelete = (id) => {
    const index = this._findIndex(id);
    if (index !== -1) {
      let userList = this.state.userList;
      userList.splice(index, 1);
      this.setState({ userList })
    }
  }

  Search = (keyWord) => {
    // let userListNew = this.state.userList.filter(user => user.fullname.toLocaleLowerCase().indexOf(keyWord.toLocaleLowerCase()) !== -1)
    // this.setState({ userList: userListNew, })
    // Lỗi xóa luôn data => Khắc phục, if else để this.setSate rỗng trả về userList else trả về UserListNew

    this.setState({ keyWord })
  }

  // submit user
  handleSubmitUser = (user) => {
    if (user.id) {
      // Updata
      const index = this._findIndex(user.id);
      if (index !== -1) {
        let userList = [...this.state.userList];
        userList[index] = user;
        this.setState({
          userList,
        });
      }
    } else {
      // ADD
      const userNew = { ...user, id: new Date().getTime() };
      let userList = [...this.state.userList, userNew];
      this.setState({
        userList,
      })
    }

  }
  // EDIT User

  handleEdit = (user) => {
    this.setState({ editUser: user })
  }

  render() {
    let { userList, keyWord, editUser } = this.state;
    // Search
    if (keyWord) {
      userList = this.state.userList.filter(user => user.fullname.toLocaleLowerCase().indexOf(keyWord.toLocaleLowerCase()) !== -1)
    };

    return (
      <div className="container">
        <h1 className="display-4 text-center my-3">User Management (Buổi 5)</h1>
        <div className="d-flex justify-content-between align-items-center">
          <Search getKeyWord={this.Search} />
          <button
            onClick={() => { this.setState({ editUser: null }) }}
            className="btn btn-success" data-toggle="modal" data-target="#modelIdUser">
            Add User</button>
        </div>
        <Users userList={userList} getUserDelete={this.handleDelete} getUserEdit={this.handleEdit} />
        <Modal getUserSubmit={this.handleSubmitUser} getUserEdit={editUser} />
      </div>
    );
  }
}

export default User_Managerment;
