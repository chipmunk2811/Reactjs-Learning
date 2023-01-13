import React, { Component } from 'react'

export default class Item extends Component {

    Click = () => {
       this.props.getDetail(this.props.shoe)
    }


    render() {
        const { shoe } = this.props;
        return (
            <div className='col-4 mb-4'>
                <div className="card">
                    <img className="card-img-top" src={shoe.image} alt='' />
                    <div className="card-body">
                        <h4 className="card-title">{shoe.name}</h4>
                        <p className="card-text">{shoe.price} $</p>
                        <button className='btn btn-info' onClick={this.Click}>Detail</button>
                    </div>
                </div>
            </div>
        )
    }
}
