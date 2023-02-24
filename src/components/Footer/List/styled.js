import mediaBreakpointUp from '@theme/mixins/mediaBreakpointUp';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const List = styled.ul`
    display: flex;
    list-style-type: none;
    height: 7.5rem;
    margin-bottom: 2.375rem;

    flex-wrap: wrap;

    flex-direction: column;
    ${mediaBreakpointUp('sm')} {
        margin-bottom: 4rem;
        height: 8.625rem;
    }

    ${mediaBreakpointUp('xl')} {
        margin-bottom: 0;
    }
`;

export const Item = styled.ul`
    margin-bottom: 0.75rem;
    line-height: 1;
    width: 50%;

    ${mediaBreakpointUp('sm')} {
        width: auto;
        margin-bottom: 1.25rem;
    }
    ${mediaBreakpointUp('md')} {
        margin-right: 7rem;
    }
    ${mediaBreakpointUp('xl')} {
        margin-right: 9.8125rem;
    }
`;
export const Link = styled(NavLink)`
    font-size: 0.75rem;
    text-transform: uppercase;
    ${mediaBreakpointUp('sm')} {
        font-size: 1rem;
    }
`;
