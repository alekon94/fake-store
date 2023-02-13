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
    &.is-position {
        transform: translateY(0);
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
export const Container = styled.div`
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
export const Title = styled.div``;
