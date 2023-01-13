import React, { Component } from 'react'

export default class Child extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numberChild: 2,
            content: "Chưa Bằng",
        }
        console.log("(constructor Child) Mỡ lên là chạy 1 lần")
    }
    // Phiên bản cũ
    // UNSAFE_componentWillReceiveProps(nextProps){
    //     console.log("(componentWillReceiveProps)",nextProps)
    // }

    static getDerivedStateFromProps(nextProps, currentState) {
        console.log("(getDerivedStateFromProps Child)", nextProps, currentState)
        if (nextProps.number === currentState.numberChild) {
            return {
                content: "Đã Bằng",
            }
        }
        return null;
    }

    render() {

        console.log("(render Child)")

        return (
            <div>
                <h1 className='text-center'>Child</h1>
                <p>Number Cha Bằng Number Con: {this.state.content}</p>
            </div>

        )
    }
}
