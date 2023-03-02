import mediaBreakpointUp from '@theme/mixins/mediaBreakpointUp';
import styled from 'styled-components';

export const Footer = styled.footer`
    background-color: ${({ theme }) => theme.colors.accent};
    padding: 5.125rem 1rem 2rem;
    ${mediaBreakpointUp('sm')} {
        padding-top: 3.75rem;
    }
    ${mediaBreakpointUp('md')} {
        padding-left: 2.5rem;
        padding-right: 2.5rem;
    }
    ${mediaBreakpointUp('xl')} {
        padding: 5.125rem 5rem 3.75rem;
    }
`;
export const Container = styled.div``;
export const Middle = styled.div`
    ${mediaBreakpointUp('xl')} {
        display: flex;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
    }
`;
export const Wrapper = styled.div`
    ${mediaBreakpointUp('xl')} {
        margin-top: -2rem;
    }
`;
export const Author = styled.span`
    font-size: 0.75rem;
    display: inline-block;
    margin-top: 3.75rem;
    ${mediaBreakpointUp('sm')} {
        font-size: 1rem;
    }
    ${mediaBreakpointUp('xl')} {
        margin-top: 3.125rem;
    }
`;
