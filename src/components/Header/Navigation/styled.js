import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import mediaBreakpointUp from '../../../theme/mixins/mediaBreakpointUp';
import pxToRem from '../../../theme/mixins/pxToRem';

export const NavMainLink = styled(NavLink)`
    ${mediaBreakpointUp('lg')} {
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.brand};

        &:hover {
            transition: 0.2s;
            color: ${({ theme }) => theme.colors.grey};
        }
    }
    &.is-scroll {
        color: ${({ theme }) => theme.colors.brand};
    }
`;

export const Nav = styled.nav`
    width: 30%;
    -webkit-box-pack: end;
    justify-content: flex-end;
    &.is-scroll ${NavMainLink} {
        color: ${({ theme }) => theme.colors.brand};
    }
`;
export const Navg = styled.div`
    width: 100%;
    margin: 0 auto;
    padding-left: var(--contentPaddingX);
    padding-right: var(--contentPaddingX);
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    font-size: 0.875rem;
    ${mediaBreakpointUp('md')} {
        padding-left: 2.5rem;
        padding-right: 2.5rem;

        height: 100%;
    }
    ${mediaBreakpointUp('lg')} {
        font-size: 1rem;
    }
    ${mediaBreakpointUp('xl')} {
        padding-left: 5rem;
        padding-right: 5rem;
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
export const Mobile = styled.div`
    display: flex;
    align-items: center;
    ${mediaBreakpointUp('lg')} {
        display: none;
    }
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
        background-color: var(--header-color);
        position: absolute;
        left: 0;
        border-radius: 0.1875rem;
        -webkit-transition: width 0.2s, height 0.2s, -webkit-transform 0.2s;
        transition: width 0.2s, height 0.2s, -webkit-transform 0.2s;
        transition: transform 0.2s, width 0.2s, height 0.2s;
        transition: transform 0.2s, width 0.2s, height 0.2s,
            -webkit-transform 0.2s;
    }

    &::after {
        width: 100%;
        bottom: 0%;
        content: '';
        height: 0.125rem;
        background-color: var(--header-color);
        position: absolute;
        left: 0;
        border-radius: 0.1875rem;
        -webkit-transition: width 0.2s, height 0.2s, -webkit-transform 0.2s;
        transition: width 0.2s, height 0.2s, -webkit-transform 0.2s;
        transition: transform 0.2s, width 0.2s, height 0.2s;
        transition: transform 0.2s, width 0.2s, height 0.2s,
            -webkit-transform 0.2s;
    }

    &:hover {
        &::before {
            background-color: ${({ theme }) => theme.colors.grey};
            transition: 0.2s;
        }

        &::after {
            background-color: ${({ theme }) => theme.colors.grey};
            transition: 0.2s;
        }
    }
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
    background-color: var(--header-color);
    transition: 0.2s;

    &:hover {
        background-color: ${({ theme }) => theme.colors.grey};
        transition: 0.2s;
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

    &:first-child {
        display: none;
    }

    &:last-child {
        display: flex;
    }
    ${mediaBreakpointUp('sm')} {
        display: flex;
    }
    ${mediaBreakpointUp('lg')} {
        &:first-child {
            display: flex;
        }
    }
`;
export const IconsLink = styled(NavLink)`
    text-transform: uppercase;
    display: flex;
    position: relative;
`;
export const IconsIcon = styled(NavLink)`
    stroke: var(--header-color);
    fill: none;
`;
export const MobileList = styled.ul`
    display: flex;
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
export const MobileLink = styled(NavLink)`
    text-transform: initial;
    font-size: 2.8125rem;
    ${mediaBreakpointUp('sm')} {
        font-size: 4.0625rem;
    }
`;
