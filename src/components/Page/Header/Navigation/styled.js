import mediaBreakpointUp from '@theme/mixins/mediaBreakpointUp';
import pxToRem from '@theme/mixins/pxToRem';
import { Link, NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

import IconStyled from '../../../Styled/iconStyled';
import { ReactComponent as BasketIcon } from '../icons/basket.svg';
import { ReactComponent as SearchIcon } from '../icons/search.svg';

export const NavMainLink = styled(NavLink)`
    ${mediaBreakpointUp('lg')} {
        text-transform: uppercase;
        color: var(--header-color);
        transition: 0.2s;

        &:hover {
            color: ${({ theme }) => theme.colors.grey};
        }
        &.active {
            color: ${({ theme }) => theme.colors.grey};
        }
    }
`;

export const Main = styled.div`
    display: none;
    ${mediaBreakpointUp('lg')} {
        display: block;
    }
`;
export const List = styled.ul`
    display: flex;
    list-style-type: none;
`;
export const Item = styled.li`
    margin-right: 3.75rem;
    position: relative;
`;

export const MobileBurger = styled.span`
    width: 75%;
    height: 0.125rem;
    border-radius: 0.1875rem;
    position: absolute;
    left: 0;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    -webkit-transition: opacity 0.1s linear;
    transition: opacity 0.1s linear;
    background-color: var(--burger-color);
    transition: 0.2s;
`;
export const MobileButton = styled.button`
    position: relative;
    width: 1.375rem;
    height: 1.375rem;
    outline: none;
    margin: 0;

    &::before {
        width: 50%;
        top: 0%;
        content: '';
        height: 0.125rem;
        background-color: var(--burger-color);
        position: absolute;
        left: 0;
        border-radius: 0.1875rem;
        -webkit-transition: width 0.2s, height 0.2s, -webkit-transform 0.2s;
        transition: width 0.2s, height 0.2s, -webkit-transform 0.2s;
        transition: transform 0.2s, width 0.2s, height 0.2s;
        transition: transform 0.2s, width 0.2s, height 0.2s,
            -webkit-transform 0.2s;
        transition: 0.2s;
    }

    &::after {
        width: 100%;
        bottom: 0%;
        content: '';
        height: 0.125rem;
        background-color: var(--burger-color);
        position: absolute;
        left: 0;
        border-radius: 0.1875rem;
        -webkit-transition: width 0.2s, height 0.2s, -webkit-transform 0.2s;
        transition: width 0.2s, height 0.2s, -webkit-transform 0.2s;
        transition: transform 0.2s, width 0.2s, height 0.2s;
        transition: transform 0.2s, width 0.2s, height 0.2s,
            -webkit-transform 0.2s;
        transition: 0.2s;
    }

    &:hover {
        --burger-color: ${({ theme }) => theme.colors.grey};
    }
`;
export const MobileTitle = styled.div`
    display: none;
    text-align: center;

    ${mediaBreakpointUp('md')} {
        font-size: 0.75rem;
        margin-left: 0.9375rem;
        color: var(--header-color);
        display: block;
    }
`;
export const MobileIcons = styled.ul`
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: none;
    list-style-type: none;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    width: auto;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;

    ${mediaBreakpointUp('sm')} {
        width: auto;
    }
    ${mediaBreakpointUp('lg')} {
        width: 14.5rem;
        display: none;
    }
`;
export const IconsItem = styled.li`
    align-items: center;
    display: none;
    -webkit-box-align: center;
`;
export const Basket = styled(IconStyled).attrs({ as: BasketIcon })``;

export const Search = styled(IconStyled).attrs({ as: SearchIcon })``;

export const IconsLink = styled(Link)`
    --icon-width: auto;
    --icon-height: auto;
    --icon-color: ${({ theme }) => theme.colors.white};
    text-transform: uppercase;
    display: flex;
    position: relative;
`;
export const IconsIcon = styled(Link)``;
export const MobileList = styled.ul`
    display: none;
    -webkit-box-pack: justify;
    justify-content: space-between;
    list-style-type: none;
    text-transform: uppercase;
    margin-top: ${pxToRem(83)};
`;
export const MobileItem = styled.li`
    margin-bottom: 3.125rem;
    margin-right: 0;
    text-align: center;
`;
export const MobileLink = styled(Link)`
    font-family: 'Harmond', sans-serif;
    font-weight: 800;
    margin: 0;
    font-size: 3rem;
    color: ${({ theme }) => theme.colors.white};
    text-transform: initial;
    font-size: 2.8125rem;
    ${mediaBreakpointUp('sm')} {
        font-size: 4.0625rem;
    }
    ${mediaBreakpointUp('md')} {
        font-size: 4.375rem;
    }
    ${mediaBreakpointUp('xl')} {
        font-size: 6.875rem;
    }
`;

export const Mobile = styled.div`
    display: flex;
    align-items: center;

    ${mediaBreakpointUp('lg')} {
        display: none;
    }
`;
export const Nav = styled.nav`
    --burger-color: var(--header-color);

    width: 30%;
    -webkit-box-pack: end;
    justify-content: flex-end;
    ${({ $showMobile }) =>
        $showMobile &&
        css`
            ${Mobile} {
                display: flex;
                overflow: auto;
                margin-bottom: 5rem;
                -webkit-box-orient: vertical;
                -webkit-box-direction: normal;
                -webkit-flex-direction: column;
                -ms-flex-direction: column;
                flex-direction: column;
                position: absolute;
                top: 0;
                left: 0;
                z-index: 20;
                width: 100%;
                height: 100vh;
                padding: 6.25rem 0;
                -webkit-backdrop-filter: blur(${pxToRem(10)});
                backdrop-filter: blur(${pxToRem(10)});
                background: -webkit-linear-gradient(
                    bottom,
                    rgba(36, 41, 52, 0.25),
                    rgba(36, 41, 52, 0.25)
                );
                background: linear-gradient(
                    0deg,
                    rgba(36, 41, 52, 0.25),
                    rgba(36, 41, 52, 0.25)
                );
            }
            ${MobileIcons} {
                display: flex;
                width: auto;
                justify-content: center;
                grid-gap: 1rem;
                gap: 1rem;
                display: flex;
            }
            ${IconsItem} {
                display: flex;
            }
            ${MobileButton} {
                margin: 0.9375rem 1rem 2.25rem auto;
                top: 0%;
                &::before {
                    transform: translateY(-50%) rotate(45deg);
                    top: 50%;
                    width: 100%;
                    background-color: var(--burger-color);
                    content: '';
                    height: 0.125rem;
                    position: absolute;
                    left: 0;
                    border-radius: 0.1875rem;
                    transition: transform 0.2s, width 0.2s, height 0.2s,
                        -webkit-transform 0.2s;
                    transition: 0.2s;
                }
                &::after {
                    transform: translateY(-50%) rotate(-45deg);
                    top: 50%;
                    width: 100%;
                    background-color: var(--burger-color);
                    bottom: 0%;
                    content: '';
                    height: 0.125rem;
                    position: absolute;
                    left: 0;
                    border-radius: 0.1875rem;
                    transition: transform 0.2s, width 0.2s, height 0.2s,
                        -webkit-transform 0.2s;
                    transition: 0.2s;
                }
                &:hover {
                    --burger-color: ${({ theme }) => theme.colors.grey};
                }
            }
            ${MobileTitle} {
                display: block;
                color: ${({ theme }) => theme.colors.white};
                margin-bottom: 2.5rem;
                margin-left: 0;
                font-size: 1rem;
                opacity: 0.7;
                font-weight: 300;
                font-style: normal;
                margin-top: -3.2rem;
            }
            ${MobileList} {
                display: block;
            }
            ${MobileBurger} {
                opacity: 0;
            }
        `}
    ${({ $isScrolled }) =>
        $isScrolled &&
        css`
            ${NavMainLink} {
                background-color: ${({ theme }) => theme.colors.white};
                color: ${({ theme }) => theme.colors.brand};
                &:hover {
                    color: ${({ theme }) => theme.colors.grey};
                }
                &.active {
            color: ${({ theme }) => theme.colors.grey};
        }
            }
            ${MobileBurger} {
                &:hover {
                    background-color: ${({ theme }) => theme.colors.grey};
                }
            }
            ${IconsItem} {
            }
            ${MobileButton} {
                
                ${({ $showMobile }) =>
                    $showMobile &&
                    css`
                        --burger-color: ${({ theme }) => theme.colors.white};
                    `}

                }
            }
        `}
`;
