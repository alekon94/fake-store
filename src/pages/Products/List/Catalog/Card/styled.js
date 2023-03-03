import { ButtonBlur } from '@components/Styled/buttonStyled';
import mediaBreakpointUp from '@theme/mixins/mediaBreakpointUp';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Information = styled.div``;
export const Wrapper = styled.div``;
export const Title = styled.h3`
    font-size: 1.75rem;
    color: ${({ theme }) => theme.colors.brand};
    margin-bottom: 1.875rem;
`;
export const Price = styled.div`
    font-size: 1rem;
`;
export const TitleLink = styled(Link)`
    color: inherit;
    transition: 0.2s;

    &:hover {
        color: ${({ theme }) => theme.colors.grey};
        transition: 0.2s;
        ${Price} {
            color: ${({ theme }) => theme.colors.grey};
            transition: 0.2s;
        }
    }
`;

export const Regular = styled.div``;
export const PriceItem = styled.span``;
export const Inner = styled.div`
    width: 100%;
    height: 100%;
`;
export const Product = styled.div`
    height: 28rem;
    width: 100%;
    margin-bottom: 1.5rem;
    ${mediaBreakpointUp('sm')} {
        height: 27.25rem;
    }
    ${mediaBreakpointUp('lg')} {
        height: 52.75rem;
    }
`;

export const MediaLink = styled(Link)`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    img {
        width: 100%;
        height: 100%;
        -o-object-fit: cover;
        object-fit: cover;
    }
`;
export const Image = styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
`;

export const ButtonText = styled.span`
    margin-right: 2.25rem;
    position: relative;
    color: ${({ theme }) => theme.colors.white};
    transition: 0.3s;
    &::after {
        content: '';
        display: block;
        height: 1rem;
        width: 0.0625rem;
        background: ${({ theme }) => theme.colors.white};
        position: absolute;
        top: 0;
        right: -1.125rem;
        -webkit-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        transform: translateX(-50%);
    }
`;
export const ButtonPrice = styled.div`
    color: ${({ theme }) => theme.colors.white};
    transition: 0.3s;
`;
export const Button = styled(ButtonBlur)`
    opacity: 0;
    position: absolute;
    bottom: 2%;
    left: 50%;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    width: 90%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-transition: 0.5s;
    transition: 0.5s;
    border: none;
    box-shadow: none;
    &:hover {
        border: none;
        box-shadow: none;
        ${ButtonText} {
            transition: 0.3s;
            color: ${({ theme }) => theme.colors.grey};
        }
        ${ButtonPrice} {
            transition: 0.3s;
            color: ${({ theme }) => theme.colors.grey};
        }
    }
`;

export const Media = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    transition: 0.3s;

    &:hover {
        ${Button} {
            opacity: 1;
            bottom: 5%;
        }
    }
`;
export const Card = styled.div`
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: reverse;
    -webkit-flex-direction: column-reverse;
    -ms-flex-direction: column-reverse;
    flex-direction: column-reverse;
    &:hover {
        width: 100%;
        -webkit-transition: 0.3s;
        transition: 0.3s;
    }
    &:hover {
        ${Title} {
            color: ${({ theme }) => theme.colors.grey};
            transition: 0.2s;
        }
        ${Price} {
            color: ${({ theme }) => theme.colors.grey};
            transition: 0.2s;
        }
    }
`;
export const Badge = styled.div``;
