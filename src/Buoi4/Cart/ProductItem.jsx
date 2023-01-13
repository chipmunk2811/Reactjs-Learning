import React, { Component } from 'react'

export default class ProductItem extends Component {


    Click = () => {
        this.props.getProduct(this.props.Product)
     }

    render() {
        const { Product } = this.props;
        return (
            <div className="col-4"> <div className="card">
                <img src={Product.hinhAnh} alt="" />
                <div className="card-body">
                    <h4 className="card-title">{Product.tenSP}</h4>
                    <p className="card-text">{Product.giaBan}</p>
                    <button onClick={this.Click} className='btn btn-primary' data-toggle="modal" data-target="#modelId">Thêm vào giỏ <i className='fa fa-cart-plus'></i></button>
                </div>
                </div>
            </div>
            
        )
    }
}
