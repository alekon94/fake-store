import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { ReactComponent as LogoIcon } from '../icons/header_logo.svg';

export const Icon = styled(LogoIcon)`
    stroke: none;
    fill: var(--header-color);
    transition: 0.2s;

    &:hover {
        fill: ${({ theme }) => theme.colors.grey};
        transition: 0.2s;
    }
`;

export const Logo = styled.div`
    width: auto;
    display: block;
    transition: 0.2s;
`;
export const LogoLink = styled(Link)``;
