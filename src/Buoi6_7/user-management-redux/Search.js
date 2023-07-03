import React, { Component } from "react";
import { connect } from "react-redux";
import { actKeyWord } from "../../redux/reducers/user/action/action";


class Search extends Component {
  render() {
    return <input type="text" className="form-control mb-3 w-50" onChange={this.handleOnChange} />;
  }
}

const mapDispathchToProps = (dispatch) => {
  return {
    searchUser: (keyword) => {
      dispatch(actKeyWord(keyword));
    },
  };
};

export default connect(null, mapDispathchToProps)(Search);
