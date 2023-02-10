import styled from 'styled-components';
import mediaBreakpointUp from '../../theme/mixins/mediaBreakpointUp';

export const Header = styled.header`
    transform: translateY(0);
    display: block;
    z-index: 100;
    top: 0;
    position: fixed;
    width: 100%;
    height: var(--headerOffset);
    color: var(--header-color, ${({ theme }) => theme.colors.brand});
    transition: background-color 0.3s ease, color 0.3s ease,
        transform 0.3s linear, -webkit-transform 0.3s linear;
    ${mediaBreakpointUp('md')} {
        height: var(--headerOffset);
    }
    &.is-transform {
        transform: translateY(-100%);
    }
    &.is-scrolled {
        background-color: ${({ theme }) => theme.colors.white};
        transition: background-color 0.3s ease, color 0.3s ease,
            transform 0.3s linear, -webkit-transform 0.3s linear;
    }
`;

export const Title = styled.div``;
