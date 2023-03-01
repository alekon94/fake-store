import * as B from '@components/Styled/buttonStyled';
import * as F from '@components/Styled/fieldStyled';
import mediaBreakpointUp from '@theme/mixins/mediaBreakpointUp';
import styled from 'styled-components';

import { ReactComponent as ButtonIcon } from './icons/button.svg';

export const Inner = styled.div`
    display: flex;
    margin-bottom: 1.5rem;
`;
export const Field = styled(F.Field)`
    width: 20rem;
    ${mediaBreakpointUp('sm')} {
        width: 23.75rem;
    }
    ${mediaBreakpointUp('xl')} {
        width: 20rem;
    }
`;
export const Icon = styled(ButtonIcon)`
    stroke: ${({ theme }) => theme.colors.brand};
    transition: 0.2s;
`;
export const Button = styled(B.ButtonIcon)`
    &:hover {
        ${Icon} {
            stroke: ${({ theme }) => theme.colors.white};
        }
    }
`;
