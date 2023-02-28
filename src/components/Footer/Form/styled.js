import mediaBreakpointUp from '@theme/mixins/mediaBreakpointUp';
import styled from 'styled-components';

export const Form = styled.form``;

export const Success = styled.div`
    ${mediaBreakpointUp('sm')} {
        font-size: 1.5rem;
        display: none;
        margin-bottom: 0.625rem;
    }
`;
export const SuccessText = styled.p``;
