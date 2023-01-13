import React, { Component } from 'react';
import RenderingElements from "./rendering-elements";
import HandlingEvents from "./handling-events";
import State from "./state";
import RenderColorCar from "./stateColorCar";
import ListKeys from "./list-keys";

export default class Buoi2 extends Component {
    render() {
        return (
            <>
                {/* Buổi 2 */}
                <hr />
                <RenderingElements />
                <hr />
                <HandlingEvents />
                <hr />
                <State />
                <hr />
                <RenderColorCar />
                <hr />
                <ListKeys />
            </>
        )
    }
}
