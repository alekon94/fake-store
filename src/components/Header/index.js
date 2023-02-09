import React from 'react';
import { NavLink } from 'react-router-dom';
import * as S from './styled';

export default function Header() {
    return (
        <S.Header className="Hello">
            <nav className="row space-between">
                <ul className="row nav">
                    <li>
                        <NavLink to="/">Main</NavLink>

                        <NavLink to="/products">Products</NavLink>
                        <NavLink to="/cart">Cart</NavLink>
                        <NavLink to="/registration">Registration</NavLink>
                        <NavLink to="/login">Login</NavLink>
                        <NavLink to="/users">Users</NavLink>
                    </li>
                </ul>
            </nav>
        </S.Header>
    );
}
