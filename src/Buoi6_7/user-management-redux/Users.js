import React, { Component } from "react";
import UserItem from "./UserItem";
import { connect } from "react-redux";



class Users extends Component {
  render() {
    let { userList, keyWord } = this.props;
    // Search
    if (keyWord) {
      userList = userList.filter(user => user.fullname.toLocaleLowerCase().indexOf(keyWord.toLocaleLowerCase()) !== -1)
    };
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
              return <UserItem user={user} key={user.id}/>
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

// Nhận giá trị từ redux
const mapStateToProps = (state) => {
  return {
    userList: state.userReducer.userList,
    keyWord: state.userReducer.keyWord,
  };
};

export default connect(mapStateToProps, null)(Users);
