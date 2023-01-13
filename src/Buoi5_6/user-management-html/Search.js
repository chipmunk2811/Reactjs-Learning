import React, { Component } from "react";


class Search extends Component {
  handleOnChange = (key) => {
    this.props.getKeyWord(key.target.value)
  }

  render() {
    return <input type="text" className="form-control mb-3 w-50" onChange={this.handleOnChange} />;
  }
}

export default Search;
