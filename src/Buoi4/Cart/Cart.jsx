import React, { Component } from 'react'

export default class Cart extends Component {
 

    renderProduct = () => {
        const { gioHang } = this.props;
        return gioHang.map((product) => {
            return (<tr>
                <td>{product.maSP}</td>
                <td>
                    <img src={product.hinhAnh} alt="" width='50px' />
                </td>
                <td>{product.tenSP}</td>
                <td>
                    <button className='btn btn-primary'>-</button>
                    {product.soLuong}
                    <button className='btn btn-primary'>+</button>
                </td>
                <td>{product.giaBan.toLocaleString()}</td>
                <td>{(product.soLuong * product.giaBan).toLocaleString()}</td>
                <td>
                    <button onClick={()=>{this.xoaGioHang(product.maSP)}} className='btn btn-danger mx-2'>Xóa</button>
                </td>
            </tr>
            );
        })
    }


    render() {
        return (
            <div>
                {/* Button trigger modal */}
                {/* <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#modelId">
                    Launch
                </button> */}
                {/* Modal */}
                <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                    <div className="modal-dialog modal-xl" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Giỏ Hàng</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <table className='table'>
                                    <thead>
                                        <tr>
                                            <th>Mã Sản Phẩm</th>
                                            <th>Hình Ảnh</th>
                                            <th>Tên SP</th>
                                            <th>Số Lượng</th>
                                            <th>Đơn Giá</th>
                                            <th>Thành Tiền</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.renderProduct()}
                                    </tbody>
                                </table>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
