import mediaBreakpointUp from '@theme/mixins/mediaBreakpointUp';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { ReactComponent as FacebookIcon } from '../icons/footer_facebook.svg';
import { ReactComponent as InstagramIcon } from '../icons/footer_instagram.svg';
import { ReactComponent as MailIcon } from '../icons/footer_mail.svg';

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
export const SocialLink = styled(NavLink)`
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
    width: 100%;
    transition: 0.2s;
    stroke: ${({ theme }) => theme.colors.brand};

    &:hover {
        stroke: ${({ theme }) => theme.colors.grey};
        transition: 0.2s;
    }
`;
export const Instagram = styled(InstagramIcon)`
    width: 100%;
    transition: 0.2s;
    stroke: ${({ theme }) => theme.colors.brand};

    &:hover {
        stroke: ${({ theme }) => theme.colors.grey};
        transition: 0.2s;
    }
`;
export const Facebook = styled(FacebookIcon)`
    width: 100%;
    transition: 0.2s;
    stroke: ${({ theme }) => theme.colors.brand};

    &:hover {
        stroke: ${({ theme }) => theme.colors.grey};
        transition: 0.2s;
    }
`;
