import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const Logo = styled.div`
    width: auto;
    display: block;
    transition: 0.2s;
`;
export const LogoLink = styled(NavLink)`
    svg {
        stroke: none;
        fill: var(--header-color);
        ${({ $isScrolled }) =>
            $isScrolled
                ? css`
                      fill: ${({ theme }) => theme.colors.brand};
                  `
                : ''}
        &:hover {
            fill: ${({ theme }) => theme.colors.grey};
            transition: 0.2s;
            ${({ $isScrolled }) =>
                $isScrolled
                    ? css`
                          fill: ${({ theme }) => theme.colors.grey};
                          transition: 0.2s;
                      `
                    : ''}
        }
    }
`;
