import React from 'react';

import * as S from './styled';

export default function List() {
    return (
        <S.List>
            <S.Item>
                <S.MenuLink to="/">Main</S.MenuLink>
            </S.Item>
            <S.Item>
                <S.MenuLink to="/products">Products</S.MenuLink>
            </S.Item>
            <S.Item>
                <S.MenuLink to="/cart">Cart</S.MenuLink>
            </S.Item>
            <S.Item>
                <S.MenuLink to="/users">Users</S.MenuLink>
            </S.Item>
            <S.Item>
                <S.MenuLink to="/login">Login</S.MenuLink>
            </S.Item>
            <S.Item>
                <S.MenuLink to="/registration">Registration</S.MenuLink>
            </S.Item>
        </S.List>
    );
}
