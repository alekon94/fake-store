import { ReactComponent as LogoIcon } from '@assets/images/logo.svg';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Icon = styled(LogoIcon)`
    stroke: none;
    fill: var(--header-color);
    transition: 0.2s;

    &:hover {
        fill: ${({ theme }) => theme.colors.grey};
    }
`;

export const Logo = styled.div`
    width: auto;
    display: block;
    transition: 0.2s;
`;
export const LogoLink = styled(Link)``;
