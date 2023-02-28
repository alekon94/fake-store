import { ReactComponent as LogoIcon } from '@assets/images/svg_inline/logo.svg';
import mediaBreakpointUp from '@theme/mixins/mediaBreakpointUp';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Icon = styled(LogoIcon)`
    width: 100%;
    fill: ${({ theme }) => theme.colors.brand};
    &:hover {
        fill: ${({ theme }) => theme.colors.grey};
    }
`;

export const Logo = styled.div`
    margin-bottom: 1.25rem;
    ${mediaBreakpointUp('md')} {
        margin-bottom: 3.125rem;
        width: 7.1875rem;
    }
    ${mediaBreakpointUp('xl')} {
        margin-bottom: 4.375rem;
    }
`;
export const LogoLink = styled(Link)``;
