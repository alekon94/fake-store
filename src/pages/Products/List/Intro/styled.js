import mediaBreakpointUp from '@theme/mixins/mediaBreakpointUp';
import styled from 'styled-components';

import { TitleStyled2 } from '../../../../components/Styled/titleStyled';

export const Intro = styled.div`
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    --content-width: 50.625rem;
    position: sticky;
    z-index: 0;
    top: 0;
    left: 0;
`;
export const Container = styled.div`
    position: relative;
    padding-top: 11.375rem;
    padding-bottom: 12.5rem;
    &::after {
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.25),
            rgba(0, 0, 0, 0.25)
        );
    }
    ${mediaBreakpointUp('lg')} {
        padding-top: 16.25rem;
        padding-bottom: 11.25rem;
    }
`;
export const Media = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
`;
export const Wrapper = styled.div`
    padding: 0 1rem;
    margin: 0 auto;
    position: relative;
    z-index: 1;
`;

export const Content = styled.div`
    text-align: center;
    position: relative;
    ${mediaBreakpointUp('lg')} {
        max-width: var(--content-width);
        margin: 0 auto;
    }
`;
export const Title = styled(TitleStyled2)`
    margin-bottom: 2rem;
`;
export const Picture = styled.picture``;
export const Source = styled.source``;
