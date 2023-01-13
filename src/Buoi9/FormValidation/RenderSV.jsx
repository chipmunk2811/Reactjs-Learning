import React, { Component } from 'react'

export default class RenderSV extends Component {
    render() {
        const { sv }=this.props;
        return (
            <tr>
                <td>{sv.maSV}</td>
                <td>{sv.hoten}</td>
                <td>{sv.phone}</td>
                <td>{sv.email}</td>
                <td>
                    <button type="button" className="btn btn-primary p-r-1"
                        onClick={() => { console.log(sv.masv) }}>EDIT</button>
                    <button type="button" className="btn btn-danger"
                        onClick={() => { console.log(sv.masv) }}>DELETE</button>
                </td>
            </tr>
        )
    }
}
