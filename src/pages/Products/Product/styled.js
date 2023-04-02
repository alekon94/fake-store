import { ButtonBlack } from '@components/Styled/buttonStyled';
import { TitleStyled3 } from '@components/Styled/titleStyled';
import mediaBreakpointUp from '@theme/mixins/mediaBreakpointUp';
import styled from 'styled-components';

export const Product = styled.div``;

export const Container = styled.div`
    max-width: 120rem;
    margin: 0 auto;
`;
export const Wrapper = styled.div`
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    flex-direction: column;
    padding-bottom: 1rem;
    ${mediaBreakpointUp('lg')} {
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
    }
`;

export const Info = styled.div`
    padding: 2rem 2.5rem 5.625rem;
    ${mediaBreakpointUp('lg')} {
        width: 50%;
        height: 95vh;
        padding: 2.5rem 2.5rem 5.625rem;
        position: relative;
    }
    ${mediaBreakpointUp('xl')} {
        padding: 2.5rem 7.5rem 5.625rem;
    }
`;
export const InfoContainer = styled.div`
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    ${mediaBreakpointUp('lg')} {
        height: 100%;
    }
`;
export const InfoContent = styled.div``;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 92vh;
`;
export const InfoRow = styled.div`
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-top: 3.375rem;
`;
export const InfoTitle = styled(TitleStyled3)``;
export const InfoPrice = styled.div``;
export const Price = styled.div``;
export const PriceRegular = styled.div``;
export const PriceItem = styled.div``;
export const InfoDescription = styled.div`
    font-size: 1rem;
    margin-top: 2.75rem;
`;
export const ButtonBox = styled.div`
    margin-top: 1.5rem;
`;
export const Button = styled(ButtonBlack)`
    width: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
`;
export const ButtonText = styled.span`
    margin-right: 2.25rem;
    position: relative;

    &::after {
        content: '';
        display: block;
        height: 1rem;
        width: 0.0625rem;
        background: var(--btn-text);
        position: absolute;
        top: 0;
        right: -1.125rem;
        -webkit-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        transform: translate(-50%);
    }
`;
export const ImageBox = styled.div`
    width: 100%;
    overflow: hidden;
    position: relative;
    display: grid;
    height: 49rem;
    ${mediaBreakpointUp('lg')} {
        width: 50%;
        height: auto;
        position: -webkit-sticky;
        position: sticky;
        top: 1rem;
        height: 61.25rem;
    }
`;
export const ImageContainer = styled.div`
    height: 100%;
    width: 100%;
    -o-object-fit: cover;
    object-fit: cover;
`;
