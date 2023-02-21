import mediaBreakpointUp from '@theme/mixins/mediaBreakpointUp';
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { ReactComponent as BasketIcon } from '../icons/header_bascet.svg';
import { ReactComponent as SearchIcon } from '../icons/header_search.svg';

export const BarIcons = styled.ul`
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
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
        width: 7.5rem;
    }
    ${mediaBreakpointUp('lg')} {
        width: 14.5rem;
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
    color: inherit;
    transition: 0.2s;

    &:hover {
        stroke: ${({ theme }) => theme.colors.grey};
        transition: 0.2s;
    }
`;

export const Basket = styled(BasketIcon)`
    stroke: var(--header-color);
    fill: none;
    transition: 0.2s;

    &:hover {
        stroke: ${({ theme }) => theme.colors.grey};
        transition: 0.2s;
    }
`;
export const Search = styled(SearchIcon)`
    stroke: var(--header-color);
    fill: none;
    transition: 0.2s;

    &:hover {
        stroke: ${({ theme }) => theme.colors.grey};
        transition: 0.2s;
    }
`;
export const Bar = styled.div`
    display: flex;
    -webkit-box-pack: end;
    justify-content: flex-end;
    width: 30%;

    ${({ $isScrolled }) =>
        $isScrolled &&
        css`
            color: var(--header-color);
            transition: 0.2s;

            ${IconsLink} {
                color: var(--header-color);
                transition: 0.2s;

                &:hover {
                }
            }
            ${Search} {
                transition: 0.2s;
            }
            ${Basket} {
                transition: 0.2s;
            }
        `}
`;
