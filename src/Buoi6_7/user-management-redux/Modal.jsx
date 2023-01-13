import React, { Component } from "react";
import { connect } from "react-redux";
import { actSubmit } from "../../redux/reducers/user/action/action";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      username: "",
      fullname: "",
      email: "",
      phoneNumber: "",
      type: "USER",
    };

    this.closeModal = React.createRef();
  }

  // lấy Form từ constructor
  handleOnChange = (word) => {
    const { name, value } = word.target;
    this.setState({
      [name]: value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.submitUser(this.state);
    this.closeModal.current.click();
  }

  UNSAFE_componentWillReceiveProps(nextprops) {
    console.log(this.props, nextprops)

    if (nextprops && nextprops.getUserEdit) {
      const { id, username, email, fullname, phoneNumber, type } = nextprops.getUserEdit;
      this.setState({
        id,
        username,
        email,
        fullname,
        phoneNumber,
        type,
      })
    } else {
      this.setState({
        id: "",
        username: "",
        fullname: "",
        email: "",
        phoneNumber: "",
        type: "USER",
      })
    }
  }

  render() {
    return (
      <div
        className="modal fade"
        id="modelIdUser"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                {this.props.getUserEdit ? "EDIT USER" : "ADD USER"}
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                ref={this.closeModal}
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">

              <form onSubmit={this.handleSubmit}>

                <div className="form-group">
                  <label>Username</label>
                  <input type="text" className="form-control"
                    onChange={this.handleOnChange}
                    name="username"
                    value={this.state.username}
                  />
                </div>
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" className="form-control"
                    onChange={this.handleOnChange}
                    name="fullname"
                    value={this.state.fullname}
                  />

                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="text" className="form-control"
                    onChange={this.handleOnChange}
                    name="email"
                    value={this.state.email}
                  />

                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="text" className="form-control"
                    onChange={this.handleOnChange}
                    name="phoneNumber"
                    value={this.state.phoneNumber}
                  />
                </div>
                <div className="form-group">
                  <label>Type</label>
                  <select className="form-control"
                    onChange={this.handleOnChange}
                    name="type">
                    value={this.state.type}
                    <option>USER</option>
                    <option>VIP</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-success">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  };
};

// Gữi action lên redux
const mapDispathchToProps = (dispatch) => {

  return {
    submitUser: (user) => {
      dispatch(actSubmit(user));
    },
  };
};
const mapStateToProps = (state) => {
  return {
    getUserEdit: state.userReducer.editUser,
  };
};

export default connect(mapStateToProps, mapDispathchToProps)(Modal);
