import IconStyled from '@components/Styled/iconStyled';
import mediaBreakpointUp from '@theme/mixins/mediaBreakpointUp';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { ReactComponent as BasketIcon } from '../icons/basket.svg';
import { ReactComponent as SearchIcon } from '../icons/search.svg';

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
export const IconsLink = styled(Link)`
    text-transform: uppercase;
    display: flex;
    color: inherit;
    transition: 0.2s;
`;

export const Basket = styled(IconStyled).attrs({ as: BasketIcon })``;
export const Search = styled(IconStyled).attrs({ as: SearchIcon })``;
export const Bar = styled.div`
    display: flex;
    -webkit-box-pack: end;
    justify-content: flex-end;
    width: 30%;
    --icon-width: auto;
    --icon-height: auto;
`;
