import IconStyled from '@components/Styled/iconStyled';
import mediaBreakpointUp from '@theme/mixins/mediaBreakpointUp';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { ReactComponent as FacebookIcon } from '../icons/facebook.svg';
import { ReactComponent as InstagramIcon } from '../icons/instagram.svg';
import { ReactComponent as MailIcon } from '../icons/mail.svg';

export const Social = styled.ul`
    --icon-color: ${({ theme }) => theme.colors.brand};
    display: flex;
    list-style-type: none;
`;
export const SocialItem = styled.li`
    margin-right: 1.6875rem;

    &:last-child {
        margin-right: 0;
    }
    ${mediaBreakpointUp('sm')} {
        margin-right: 1.6875rem;
        &:last-child {
            margin-right: 0;
        }
    }
`;
export const SocialLink = styled(Link)`
    text-transform: uppercase;
    display: flex;
    color: inherit;
    transition: 0.2s;
`;

export const Mail = styled(IconStyled).attrs({ as: MailIcon })``;

export const Instagram = styled(IconStyled).attrs({ as: InstagramIcon })``;

export const Facebook = styled(IconStyled).attrs({ as: FacebookIcon })``;
