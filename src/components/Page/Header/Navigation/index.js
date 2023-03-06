/* eslint-disable react/jsx-props-no-spreading */
import VisuallyHidden from '@components/VisuallyHidden';
import useScrollLock from '@hooks/useScrollLock';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import * as S from './styled';

export default function Navigation({ isScrolled }) {
    const [showMobile, setShowMobile] = useState(false);
    const { lockScroll, unlockScroll } = useScrollLock();
    const handleEscKey = (event) => {
        if (event.keyCode === 27) {
            setShowMobile(false);
        }
    };
    const handleResize = () => {
        setShowMobile(false);
    };
    useEffect(() => {
        if (showMobile) {
            lockScroll();
            document.addEventListener('keydown', handleEscKey);
            window.addEventListener('resize', handleResize);
        } else {
            unlockScroll();
            document.removeEventListener('keydown', handleEscKey);
            window.removeEventListener('resize', handleResize);
        }
        return () => {
            document.removeEventListener('keydown', handleEscKey);
            window.removeEventListener('resize', handleResize);
        };
    }, [lockScroll, showMobile, unlockScroll]);

    const handleButtonClick = () => {
        setShowMobile(!showMobile);
    };
    return (
        <S.Nav $isScrolled={isScrolled} $showMobile={showMobile}>
            <S.Main>
                <S.List>
                    <S.Item>
                        <S.NavMainLink to="/">Main</S.NavMainLink>
                    </S.Item>
                    <S.Item>
                        <S.NavMainLink to="/products">Products</S.NavMainLink>
                    </S.Item>

                    <S.Item>
                        <S.NavMainLink to="/users">Users</S.NavMainLink>
                    </S.Item>
                </S.List>
            </S.Main>
            <S.Mobile>
                <S.MobileButton onClick={handleButtonClick}>
                    <S.MobileBurger />
                    <VisuallyHidden>Mobile menu</VisuallyHidden>
                </S.MobileButton>
                <S.MobileTitle>Menu</S.MobileTitle>
                <S.MobileIcons>
                    <S.IconsItem>
                        <S.IconsLink to="/login">
                            <S.Search />
                        </S.IconsLink>
                    </S.IconsItem>
                    <S.IconsItem>
                        <S.IconsLink to="/cart">
                            <S.Basket />
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
Navigation.propTypes = {
    isScrolled: PropTypes.bool.isRequired,
};
