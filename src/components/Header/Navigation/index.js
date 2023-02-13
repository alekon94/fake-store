import React from 'react';
import * as S from './styled';

export default function Navigation() {
    return (
        <S.Nav>
            <S.Main>
                <S.List>
                    <S.Item>
                        <S.NavMainLink to="/">Main</S.NavMainLink>
                        <S.NavMainLink to="/products">Products</S.NavMainLink>
                        <S.NavMainLink to="/cart">Cart</S.NavMainLink>
                        <S.NavMainLink to="/registration">
                            Registration
                        </S.NavMainLink>
                        <S.NavMainLink to="/login">Login</S.NavMainLink>
                        <S.NavMainLink to="/users">Users</S.NavMainLink>
                    </S.Item>
                </S.List>
            </S.Main>
        </S.Nav>
    );
}
