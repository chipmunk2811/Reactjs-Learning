import React, { Component } from 'react'
import Cart from './Cart'
import ProductList from './ProductList'

export default class CartDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gioHang: [{
        maSP: 3,
        tenSP: 'Iphone XS Max',
        giaBan: '27000000',
        hinhAnh: './images/applephone.jpg',
        soLuong: 1,
      }]
    };
  }

  themGioHang = (productClick) => {
    productClick.soLuong=1
    this.state.gioHang.push(productClick);
    this.setState({
      gioHang: this.state.gioHang
    });
  }


  render() {
    return (
      <div className='container'>
        <h3>* Bài tập Giỏ Hàng (Buổi 4)</h3>
        <Cart gioHang={this.state.gioHang} />
        <ProductList getProduct={this.themGioHang} />
      </div>
    )
  }
}
