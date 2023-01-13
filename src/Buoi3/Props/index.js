import React, { Component } from 'react';
import ChildClass from './childClass';
import ChildFunction from './childFunction';
import Child from './child';

export default class Communicate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "CyberSoft",
      age: 5,
    };
  }


  handleChangeUsername = () => {
    this.setState({
      username: "Change Name",
    })
  }
  handleReset = (username) => {
    this.setState({
      username,
    })
  }


  render() {
    const { username, age } = this.state;
    return (
      <div>
        <h3>*Communicate (Buổi 3)</h3>
        <p>
          Username: {username} - Age: {age}
        </p>
        <button className='btn btn-success' onClick={this.handleChangeUsername}>Change username</button>
        <br />
        <div className='row'>
          {/* Chuyền dữ liệu sang class */}
          <div className='col-4'>
            <ChildClass username={username} age={age} resetUsername={this.handleReset} />
          </div>
          {/* Chuyền dữ liệu sang function */}
          <div className='col-4'>
            <ChildFunction data={this.state} />
          </div>
          {/* Chuyền html sang con */}
          <div className='col-4'>
            <Child>
              <p>
                Username: {username} - Age: {age}
              </p>
            </Child >
          </div>
        </div>
      </div>
    )
  }
}
