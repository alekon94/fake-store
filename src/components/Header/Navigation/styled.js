import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
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

    ${({ $isScrolled }) =>
        $isScrolled
            ? css`
                  background-color: ${({ theme }) => theme.colors.white};
                  color: ${({ theme }) => theme.colors.brand};
                  &:hover {
                      color: ${({ theme }) => theme.colors.grey};
                      transition: 0.2s;
                  }
              `
            : ''}
`;

export const Nav = styled.nav`
    width: 30%;
    -webkit-box-pack: end;
    justify-content: flex-end;
    &.is-scroll ${NavMainLink} {
        color: ${({ theme }) => theme.colors.brand};
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
    background-color: var(--header-color);
    transition: 0.2s;
    ${({ $showMobile }) =>
        $showMobile
            ? css`
                  opacity: 0;
              `
            : ``}
    ${({ isScrolled }) =>
        isScrolled
            ? css`
                  background-color: ${({ theme }) => theme.colors.brand};
                  transition: 0.2s;
                  &:hover {
                      background-color: ${({ theme }) => theme.colors.grey};
                      transition: 0.2s;
                  }
              `
            : ``}
    &:hover {
        background-color: ${({ theme }) => theme.colors.grey};
        transition: 0.2s;
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
        ${MobileBurger} {
            background-color: ${({ theme }) => theme.colors.grey};
            transition: 0.2s;
        }
    }
    ${({ $showMobile }) =>
        $showMobile
            ? css`
                  margin: 0.9375rem 1rem 2.25rem auto;
                  top: 0%;
                  &::before {
                      transform: translateY(-50%) rotate(45deg);
                      top: 50%;
                      width: 100%;
                      background-color: ${({ theme }) => theme.colors.white};
                      content: '';
                      height: 0.125rem;
                      position: absolute;
                      left: 0;
                      border-radius: 0.1875rem;
                      transition: transform 0.2s, width 0.2s, height 0.2s,
                          -webkit-transform 0.2s;
                  }
                  &::after {
                      transform: translateY(-50%) rotate(-45deg);
                      top: 50%;
                      width: 100%;
                      background-color: ${({ theme }) => theme.colors.white};
                      bottom: 0%;
                      content: '';
                      height: 0.125rem;
                      position: absolute;
                      left: 0;
                      border-radius: 0.1875rem;
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
              `
            : ''}
    ${({ isScrolled }) =>
        isScrolled
            ? css`
                  &::before {
                      background-color: ${({ theme }) => theme.colors.brand};
                  }
                  &::after {
                      background-color: ${({ theme }) => theme.colors.brand};
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
                      ${MobileBurger} {
                          background-color: ${({ theme }) => theme.colors.grey};
                          transition: 0.2s;
                      }
                  }
              `
            : ''}
`;
export const MobileTitle = styled.div`
    display: none;
    text-align: center;
    ${({ isScrolled }) =>
        isScrolled
            ? css`
                  color: ${({ theme }) => theme.colors.brand};
              `
            : ``}
    ${({ $showMobile }) =>
        $showMobile
            ? css`
                  display: block;
                  color: ${({ theme }) => theme.colors.white};
                  margin-bottom: 2.5rem;
                  margin-left: 0;
                  font-size: 1rem;
                  opacity: 0.7;
                  font-weight: 300;
                  font-style: normal;
                  margin-top: -3.2rem;
              `
            : ``}
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
    ${({ $showMobile }) =>
        $showMobile
            ? css`
                  width: auto;
                  justify-content: center;
                  grid-gap: 1rem;
                  gap: 1rem;
                  display: flex;
              `
            : ``}
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
    ${({ $showMobile }) =>
        $showMobile
            ? css`
                  display: flex;
              `
            : ``}
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
    svg {
        stroke: var(--header-color);
        fill: none;
        ${({ $showMobile }) =>
            $showMobile
                ? css`
                      stroke: ${({ theme }) => theme.colors.white};
                      transition: 0.2s;
                      &:hover {
                          stroke: ${({ theme }) => theme.colors.grey};
                          transition: 0.2s;
                      }
                  `
                : ``}
    }
`;
export const IconsIcon = styled(NavLink)`
    stroke: var(--header-color);
    fill: none;
    ${({ $showMobile }) =>
        $showMobile
            ? css`
                  stroke: ${({ theme }) => theme.colors.white};
                  transition: 0.2s;
                  &:hover {
                      stroke: ${({ theme }) => theme.colors.grey};
                      transition: 0.2s;
                  }
              `
            : ``}
`;
export const MobileList = styled.ul`
    display: none;
    -webkit-box-pack: justify;
    justify-content: space-between;
    list-style-type: none;
    text-transform: uppercase;
    margin-top: ${pxToRem(83)};
    ${({ $showMobile }) =>
        $showMobile
            ? css`
                  display: block;
              `
            : ``}
`;
export const MobileItem = styled.li`
    margin-bottom: 3.125rem;
    margin-right: 0;
    text-align: center;
`;
export const MobileLink = styled(NavLink)`
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
    ${({ $showMobile }) =>
        $showMobile
            ? css`
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
              `
            : ''};
    ${mediaBreakpointUp('lg')} {
        display: none;
    }
`;
