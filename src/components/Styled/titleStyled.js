import mediaBreakpointUp from '@theme/mixins/mediaBreakpointUp';
import styled from 'styled-components';

export const TitleStyled1 = styled.h1`
    font-family: 'Harmond', sans-serif;
    font-weight: 800;
    margin: 0;
    font-size: 3rem;
    color: ${({ theme }) => theme.colors.brand};
`;

export const TitleStyled2 = styled.h2`
    font-family: 'Harmond', sans-serif;
    font-weight: 800;
    margin: 0;
    font-size: 3rem;
    color: ${({ theme }) => theme.colors.white};
    ${mediaBreakpointUp} {
        font-size: 4.5rem;
    }
`;
