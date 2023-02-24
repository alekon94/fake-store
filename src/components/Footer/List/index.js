import React from 'react';

import * as S from './styled';

export default function List() {
    return (
        <S.List>
            <S.Item>
                <S.Link to="/">Main</S.Link>
            </S.Item>
            <S.Item>
                <S.Link to="/products">Products</S.Link>
            </S.Item>
            <S.Item>
                <S.Link to="/cart">Cart</S.Link>
            </S.Item>
            <S.Item>
                <S.Link to="/users">Users</S.Link>
            </S.Item>
            <S.Item>
                <S.Link to="/login">Login</S.Link>
            </S.Item>
            <S.Item>
                <S.Link to="/registration">Registration</S.Link>
            </S.Item>
        </S.List>
    );
}
