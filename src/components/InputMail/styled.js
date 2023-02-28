import * as B from '@components/Button/styled';
import * as F from '@components/Field/styled';
import mediaBreakpointUp from '@theme/mixins/mediaBreakpointUp';
import styled from 'styled-components';

import { ReactComponent as ButtonIcon } from './icons/footer_button.svg';

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
`;
export const Button = styled(B.ButtonIcon)`
    &:hover {
        ${Icon} {
            transition: 0.2s;
            stroke: ${({ theme }) => theme.colors.white};
        }
    }
`;
