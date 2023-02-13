import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import mediaBreakpointUp from '../../../theme/mixins/mediaBreakpointUp';

export const NavMainLink = styled(NavLink)`
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
    &__list {
        display: flex;
        list-style-type: none;
    }
`;
export const Item = styled.li`
    margin-right: 3.75rem;
    position: relative;
`;
