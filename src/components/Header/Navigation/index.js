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
    useEffect(() => {
        document.addEventListener('keydown', (e) => {
            if (e.code === 'Escape' && showMobile === true) {
                setShowMobile(!showMobile);
                unlockScroll();
            }
        });
        return () => {
            window.removeEventListener('keydown', (e) => {
                if (e.code === 'Escape' && showMobile === true) {
                    setShowMobile(!showMobile);
                    unlockScroll();
                }
            });
        };
    });
    const handleButtonClick = () => {
        console.log(showMobile);
        setShowMobile(!showMobile);
        if (showMobile === false) {
            lockScroll();
        } else {
            unlockScroll();
        }
    };
    return (
        <S.Nav>
            <S.Main>
                <S.List>
                    <S.Item>
                        <S.NavMainLink
                            $isScrolled={args.isScrolled}
                            $isHide={args.isHide}
                            $showMobile={showMobile}
                            to="/"
                        >
                            Main
                        </S.NavMainLink>
                    </S.Item>
                    <S.Item>
                        <S.NavMainLink
                            $isScrolled={args.isScrolled}
                            $isHide={args.isHide}
                            to="/products"
                        >
                            Products
                        </S.NavMainLink>
                    </S.Item>
                    <S.Item>
                        <S.NavMainLink
                            $isScrolled={args.isScrolled}
                            $isHide={args.isHide}
                            to="/cart"
                        >
                            Cart
                        </S.NavMainLink>
                    </S.Item>

                    <S.Item>
                        <S.NavMainLink
                            $isScrolled={args.isScrolled}
                            $isHide={args.isHide}
                            to="/registration"
                        >
                            Registration
                        </S.NavMainLink>
                    </S.Item>
                    <S.Item>
                        <S.NavMainLink
                            $isScrolled={args.isScrolled}
                            $isHide={args.isHide}
                            to="/login"
                        >
                            Login
                        </S.NavMainLink>
                    </S.Item>
                    <S.Item>
                        <S.NavMainLink
                            $isScrolled={args.isScrolled}
                            $isHide={args.isHide}
                            to="/users"
                        >
                            Users
                        </S.NavMainLink>
                    </S.Item>
                </S.List>
            </S.Main>
            <S.Mobile showMobile={showMobile}>
                <S.MobileButton
                    onClick={handleButtonClick}
                    showMobile={showMobile}
                    $isScrolled={args.isScrolled}
                >
                    <S.MobileBurger
                        showMobile={showMobile}
                        $isScrolled={args.isScrolled}
                    />
                    <VisuallyHidden />
                </S.MobileButton>
                <S.MobileTitle
                    showMobile={showMobile}
                    $isScrolled={args.isScrolled}
                >
                    Menu
                </S.MobileTitle>
                <S.MobileIcons showMobile={showMobile}>
                    <S.IconsItem showMobile={showMobile}>
                        <S.IconsLink to="/login">
                            <SearchIcon />
                        </S.IconsLink>
                        <S.IconsLink to="/cart">
                            <BasketIcon />
                        </S.IconsLink>
                    </S.IconsItem>
                </S.MobileIcons>
                <S.MobileList showMobile={showMobile}>
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
