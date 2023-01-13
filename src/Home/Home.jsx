import React, { Component } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <>
                <div className="list-group">
                    <NavLink to="/Buoi1" className="list-group-item list-group-item-action" style={({ isActive }) => isActive ? { fontWeight: 'bold', color: 'white' } : {}}
                    >(Buổi 1) Class Component và Function Component </NavLink>
                    <NavLink to="/Buoi2" className="list-group-item list-group-item-action list-group-item-success" style={({ isActive }) => isActive ? { fontWeight: 'bold', color: 'white' } : {}}
                    >(Buổi 2)</NavLink>
                    <NavLink to="/Buoi3" className="list-group-item list-group-item-action list-group-item-secondary" style={({ isActive }) => isActive ? { fontWeight: 'bold', color: 'white' } : {}}
                    >(Buổi 3) Class Props và Function Props và Chuyển cả html vào thư mục con </NavLink>
                    <NavLink to="/Buoi4" className="list-group-item list-group-item-action list-group-item-info" style={({ isActive }) => isActive ? { fontWeight: 'bold', color: 'white' } : {}}
                    >(Buổi 4) Bài tập Props</NavLink>
                    <NavLink to="/Buoi5" className="list-group-item list-group-item-action list-group-item-warning" style={({ isActive }) => isActive ? { fontWeight: 'bold', color: 'white' } : {}}
                    >(Buổi 5-6) Onchange_Form_HandleID_DOM React_componentWillReceiveProps_Search</NavLink>
                    <NavLink to="/Buoi7" className="list-group-item list-group-item-action list-group-item-danger" style={({ isActive }) => isActive ? { fontWeight: 'bold', color: 'white' } : {}}
                    >(Buổi 7) Redux</NavLink>
                    <NavLink to="/Buoi8" className="list-group-item list-group-item-action list-group-item-primary" style={({ isActive }) => isActive ? { fontWeight: 'bold', color: 'white' } : {}}
                    >(Buổi 8) Router_DOM</NavLink>
                    <NavLink to="/Buoi9-1" className="list-group-item list-group-item-action list-group-item-dark" style={({ isActive }) => isActive ? { fontWeight: 'bold', color: 'white' } : {}}
                    >(Buổi 9) Form Validation</NavLink>
                    <NavLink to="/Buoi9-2" className="list-group-item list-group-item-action list-group-item-light" style={({ isActive }) => isActive ? { fontWeight: 'bold', color: 'white' } : {}}
                    >(Buổi 9) Life Circle</NavLink>
                </div>
                <hr />
                <hr />
                <hr />
                <div style={{ minHeight: '75vh' }}>
                    <Outlet />
                </div>
            </>
        )
    }
}
