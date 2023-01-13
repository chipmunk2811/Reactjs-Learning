import React, { Component } from 'react';
import Item from './item';
import data from './data.json';

export default class BaitapProps extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listShoes: data,
            detail: data[0],
        }
    }

    handleState = (detail) => {
        this.setState({
            detail,
        });
    }

    renderShoes = () => {
        const { listShoes } = this.state;
        return listShoes.map((Shoe) => {
            return <Item key={Shoe.id} shoe={Shoe} getDetail={this.handleState} />
        });
    }

    render() {
        const { name, price, shortDescription } = this.state.detail
        return (
            <div className='text-center'>
                <h1>   Bài tập Props</h1>
                <div className='container'>
                    <div className='row'>
                        <div className='col-4'>
                            <h3> Detail Shoe</h3>
                            <table class="table">
                                <thead className='text-left'>
                                    <tr>
                                        <td>Name</td>
                                        <td>{name}</td>
                                    </tr>
                                    <tr>
                                        <td>Price</td>
                                        <td>{price}</td>
                                    </tr>
                                    <tr>
                                        <td>Description</td>
                                        <td>{shortDescription}</td>
                                    </tr>
                                </thead>

                            </table>
                        </div>
                        <div className='col-8'>
                            <div className='row'>
                                {this.renderShoes()}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
