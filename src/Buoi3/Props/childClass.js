import React, { Component } from 'react'

export default class ChildClass extends Component {
  handleResetUsername=()=>{
    this.props.resetUsername(
      "Chuyền từ con sang cha",
      )
  }

  render() {
    const { username, age }=this.props;
    return (
      <div>Child Class
        <p>
        Username: {username} - Age: {age}
        </p>
        <button className='btn btn-danger' onClick={this.handleResetUsername}>Reset username</button>
      </div>
    )
  }
}
