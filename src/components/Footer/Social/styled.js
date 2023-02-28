import mediaBreakpointUp from '@theme/mixins/mediaBreakpointUp';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { ReactComponent as FacebookIcon } from '../icons/footer_facebook.svg';
import { ReactComponent as InstagramIcon } from '../icons/footer_instagram.svg';
import { ReactComponent as MailIcon } from '../icons/footer_mail.svg';

const iconStyles = css`
    width: 100%;
    transition: 0.2s;
    stroke: ${({ theme }) => theme.colors.brand};

    &:hover {
        stroke: ${({ theme }) => theme.colors.grey};
        transition: 0.2s;
    }
`;
export const Social = styled.ul`
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

    &:hover {
        stroke: ${({ theme }) => theme.colors.grey};
        transition: 0.2s;
    }
`;

export const Mail = styled(MailIcon)`
    ${iconStyles}
`;
export const Instagram = styled(InstagramIcon)`
    ${iconStyles}
`;
export const Facebook = styled(FacebookIcon)`
    ${iconStyles}
`;
