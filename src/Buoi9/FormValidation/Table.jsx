import React, { Component } from 'react'
import { connect } from "react-redux";
import { actDelete } from '../../redux/reducers/formSV/action/action';


class Table extends Component {
    render() {
        let { SVList } = this.props;
        return (
            <>
                <table className="table">
                    <thead>
                        <tr className='bg-dark text-white'>
                            <th>Mã SV</th>
                            <th>Họ Tên</th>
                            <th>Số Điện Thoại</th>
                            <th>Email</th>
                            <th>Custom</th>
                        </tr>
                    </thead>
                    <tbody>
            
                    </tbody>
                </table>
            </>
        )
    }
}
// Nhận giá trị từ redux
const mapStateToProps = (state) => {
    return {
        SVList: state.userReducer.SVList,
    };
};
const mapDispathchToProps = (dispatch) => {
    return {
        DeleteSV: (maSV) => {
            dispatch(actDelete(maSV));
        },
    };
};
export default connect(mapStateToProps, mapDispathchToProps)(Table);