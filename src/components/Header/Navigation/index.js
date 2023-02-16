/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import useScrollLock from '../../../Hooks/useScrollLock';
import VisuallyHidden from '../../VisuallyHidden';
import * as S from './styled';
import { ReactComponent as BasketIcon } from '../icons/header_bascet.svg';
import { ReactComponent as SearchIcon } from '../icons/header_search.svg';

// eslint-disable-next-line react/prop-types
export default function Navigation({ ...args }) {
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
        <S.Nav>
            <S.Main>
                <S.List>
                    <S.Item>
                        <S.NavMainLink
                            $isScrolled={args.isScrolled}
                            $showMobile={showMobile}
                            to="/"
                        >
                            Main
                        </S.NavMainLink>
                    </S.Item>
                    <S.Item>
                        <S.NavMainLink
                            $isScrolled={args.isScrolled}
                            to="/products"
                        >
                            Products
                        </S.NavMainLink>
                    </S.Item>

                    <S.Item>
                        <S.NavMainLink
                            $isScrolled={args.isScrolled}
                            to="/users"
                        >
                            Users
                        </S.NavMainLink>
                    </S.Item>
                </S.List>
            </S.Main>
            <S.Mobile $showMobile={showMobile}>
                <S.MobileButton
                    onClick={handleButtonClick}
                    $showMobile={showMobile}
                    $isScrolled={args.isScrolled}
                >
                    <S.MobileBurger
                        $showMobile={showMobile}
                        $isScrolled={args.isScrolled}
                    />
                    <VisuallyHidden />
                </S.MobileButton>
                <S.MobileTitle
                    $showMobile={showMobile}
                    $isScrolled={args.isScrolled}
                >
                    Menu
                </S.MobileTitle>
                <S.MobileIcons $showMobile={showMobile}>
                    <S.IconsItem $showMobile={showMobile}>
                        <S.IconsLink $showMobile={showMobile} to="/login">
                            <SearchIcon />
                        </S.IconsLink>
                        <S.IconsLink $showMobile={showMobile} to="/cart">
                            <BasketIcon />
                        </S.IconsLink>
                    </S.IconsItem>
                </S.MobileIcons>
                <S.MobileList $showMobile={showMobile}>
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
// Navigation.propTypes = {
//     iscrolled: PropTypes.number.isRequired,
//     hide: PropTypes.number.isRequired,
// };
