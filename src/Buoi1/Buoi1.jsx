import React, { Component } from 'react'
import Baitap1 from './Class_Component/index';
import Baitap2 from './Function_Component/index';

export default class Buoi1 extends Component {
    render() {
        return (
            <div>
                {/* Class_Component */}
                <Baitap1 />
                {/* Function_Component */}
                <Baitap2 />
            </div>
        )
    }
}
