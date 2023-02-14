import React from 'react';
import VisuallyHidden from '../../VisuallyHidden';
import * as S from './styled';
import { ReactComponent as BasketIcon } from '../icons/header_bascet.svg';
import { ReactComponent as SearchIcon } from '../icons/header_search.svg';

export default function Navigation() {
    return (
        <S.Nav>
            <S.Main>
                <S.List>
                    <S.Item>
                        <S.NavMainLink to="/">Main</S.NavMainLink>
                    </S.Item>
                    <S.Item>
                        <S.NavMainLink to="/products">Products</S.NavMainLink>
                    </S.Item>
                    <S.Item>
                        <S.NavMainLink to="/cart">Cart</S.NavMainLink>
                    </S.Item>

                    <S.Item>
                        <S.NavMainLink to="/registration">
                            Registration
                        </S.NavMainLink>
                    </S.Item>
                    <S.Item>
                        <S.NavMainLink to="/login">Login</S.NavMainLink>
                    </S.Item>
                    <S.Item>
                        <S.NavMainLink to="/users">Users</S.NavMainLink>
                    </S.Item>
                </S.List>
            </S.Main>
            <S.Mobile>
                <S.MobileButton>
                    <S.MobileBurger />
                    <VisuallyHidden />
                </S.MobileButton>
                <S.MobileTitle>Menu</S.MobileTitle>
                <S.MobileIcons>
                    <S.IconsItem>
                        <S.IconsLink to="/login">
                            <SearchIcon />
                        </S.IconsLink>
                        <S.IconsLink to="/cart">
                            <BasketIcon />
                        </S.IconsLink>
                    </S.IconsItem>
                </S.MobileIcons>
                <S.MobileList>
                    <S.MobileItem>
                        <S.MobileLink to="/">Main</S.MobileLink>
                    </S.MobileItem>
                    <S.MobileItem>
                        <S.MobileLink to="/products">Products</S.MobileLink>
                    </S.MobileItem>
                    <S.MobileItem>
                        <S.MobileLink to="/users">Users</S.MobileLink>
                    </S.MobileItem>
                    <S.MobileItem>
                        <S.MobileLink to="/login">Login</S.MobileLink>
                    </S.MobileItem>
                    <S.MobileItem>
                        <S.MobileLink to="/registration">
                            Registration
                        </S.MobileLink>
                    </S.MobileItem>
                </S.MobileList>
            </S.Mobile>
        </S.Nav>
    );
}
