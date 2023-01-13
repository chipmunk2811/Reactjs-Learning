import React, { Component } from 'react'
import Child from './Child';
import ChildPure from './ChildPure';

export default class LifeCircle extends Component {
    // Mỡ lên là chạy 1 lần 
    constructor(props) {
        super(props);
        this.state = {
            number: 0,
        }
        console.log("(constructor) Mỡ lên là chạy 1 lần")
        this.interval = null;
    }

    // Mỡ lên là chạy 1 lần 
    UNSAFE_componentWillMount() {
        console.log("(componentWilMount) Mỡ lên là chạy 1 lần");
    }

    // SET STATE MỚI CHẠY
    UNSAFE_componentWillUpdate() {
        console.log("(componentWillUpdate) setState chạy lại lần mới và chạy sau (shouldComponentUpdate)");
    }
    UNSAFE_componentDidUpdate() {
        console.log("(componentDidUpdate)");
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log("(shouldComponentUpdate) setState chạy lại lần mới", nextProps, nextState);
        if (nextState.number > 2) {
            return false;
        }
        return true;
    }



    // Mỡ lên là chạy 1 lần 
    // CALL API
    componentDidMount() {
        console.log("(componentDidMount) Mỡ lên là chạy 1 lần và chạy sau (render và render Child)");
        this.interval = setInterval(() => {
            console.log("CALL API")
        }, 3000)
    }

    // Không ảnh hưởng đến các Route khác
    componentWillUnmount() {
        clearInterval(this.interval)
    }


    // Mỡ lên là chạy 1 lần + setState chạy lại lần mới
    render() {
        console.log('(render) Mỡ lên là chạy 1 lần + setState chạy lại lần mới')
        return (
            <div>
                <h1>Life Circle</h1>
                <h3>Number: {this.state.number}</h3>
                <button className='btn btn-success' onClick={() => { this.setState({ number: this.state.number + 1 }) }}>Click</button>
                <hr />
                <hr />
                <Child number={this.state.number} />
                <hr />
                <hr />
                <ChildPure />
            </div>
        )
    }
}
