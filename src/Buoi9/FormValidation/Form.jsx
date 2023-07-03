import React, { Component } from 'react';
import { connect } from "react-redux";
import { actADDSV } from '../../redux/reducers/formSV/action/action';

class FormSV extends Component {
    constructor(props) {
        super(props);
        this.state = {
            maSV: "",
            hoten: "",
            phone: "",
            email: "",
            errors: {
                maSV: "",
                hoten: "",
                phone: "",
                email: "",
            },
            formValid: false,
            masvValid: false,
            hotenValid: false,
            phoneValid: false,
            emailValid: false,
        };
    }
    // lấy Form từ constructor
    handleOnChange = (word) => {
        const { name, value } = word.target;
        this.setState({
            [name]: value,
        })
    }

    handleError = (word) => {
        const { name, value } = word.target;

        let mess = value.trim() === "" ? `(*) Vui lòng nhập ${name}` : "";

        let { masvValid, hotenValid, phoneValid, emailValid } = this.state;
        switch (name) {
            case "maSV":
                masvValid = mess === "" ? true : false;
                if (value && value.length < 3) {
                    mess = "Vui lòng nhập từ 3 ký tự trỡ lên"
                    masvValid = false;
                }
                break;
            case "hoten":
                hotenValid = mess === "" ? true : false;
                break;
            case "phone":
                phoneValid = mess === "" ? true : false;
                break;
            case "email":
                emailValid = mess === "" ? true : false;
                if (value && !value.match("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$")) {
                    mess = "Vui lòng nhập đúng định dạng mail"
                    masvValid = false;
                } else { masvValid = true; }
                break;
            default:
                break;
        }

        this.setState({
            errors: { ...this.state.errors, [name]: mess },
            masvValid,
            hotenValid,
            phoneValid,
            emailValid,
            formValid: masvValid && hotenValid && phoneValid && emailValid,
        }
            , () => { console.log(this.state) }
        )
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.submitSV(this.state)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h1 className="bg-dark text-white p-3">Thông tin sinh viên</h1>
                <div className='row'>
                    <div className="col-6 form-group">
                        <label htmlFor>Mã Sinh Viên</label>
                        <input type="text" className="form-control form-control-sm" id aria-describedby="helpId1" placeholder
                            onChange={this.handleOnChange}
                            name="maSV"
                            onBlur={this.handleError}
                        />
                        {this.state.errors.maSV
                            && (<small id="helpId1" className="form-text text-red bg-danger">{this.state.errors.maSV}</small>)}

                    </div>
                    <div className="col-6 form-group">
                        <label htmlFor>Họ Tên</label>
                        <input type="text" className="form-control form-control-sm" id aria-describedby="helpId2" placeholder
                            onChange={this.handleOnChange}
                            name="hoten"
                            onBlur={this.handleError}

                        />
                        {this.state.errors.hoten
                            && (<small id="helpId2" className="form-text text-red bg-danger">{this.state.errors.hoten}</small>)}
                    </div>
                    <div className="col-6 form-group">
                        <label htmlFor>Số Điện Thoại</label>
                        <input type="number" className="form-control form-control-sm" id aria-describedby="helpId3" placeholder
                            onChange={this.handleOnChange}
                            name="phone"
                            onBlur={this.handleError}
                        />
                        {this.state.errors.phone
                            && (<small id="helpId3" className="form-text text-red bg-danger">{this.state.errors.phone}</small>)}
                    </div>
                    <div className="col-6 form-group">
                        <label htmlFor>Email</label>
                        <input type='email' className="form-control form-control-sm" id aria-describedby="helpId4" placeholder
                            onChange={this.handleOnChange}
                            name="email"
                            onBlur={this.handleError}
                        />
                        {this.state.errors.email
                            && (<small id="helpId4" className="form-text text-red bg-danger">{this.state.errors.email}</small>)}
                    </div>

                </div>
                <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={!this.state.formValid}
                >Thêm Sinh Viên</button>
            </form>
        )
    }
}
const mapDispathchToProps = (dispatch) => {
    return {
        submitSV: (sv) => {
            dispatch(actADDSV(sv));
        },
    };
};

export default connect(null, mapDispathchToProps)(FormSV);