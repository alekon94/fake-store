import styled from 'styled-components';

export const Label = styled.label`
    position: absolute;
    top: 1.5rem;
    left: 1.5rem;
    font-size: 1.125rem;
    z-index: 1;
    -webkit-transition: 0.3s;
    transition: 0.3s;
    color: inherit;
    letter-spacing: 0;
`;
export const LabelSmall = styled(Label)`
    font-size: 1rem;
`;
export const Field = styled.div`
    border: 0.0625rem solid ${({ theme }) => theme.colors.brand};
    max-width: 100%;
    height: 4.375rem;
    text-align: left;
    text-align-last: left;
    transition: border 0.3s ease;
    box-shadow: none;
    width: 100%;
    position: relative;
    &:focus {
        border-color: ${({ theme }) => theme.colors.brand};
    }
    &:disabled {
        background-color: ${({ theme }) => theme.colors.white};
        -webkit-text-fill-color: ${({ theme }) => theme.colors.brand};
    }
`;
export const Input = styled.input`
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    border: none;
    outline: none;
    background: transparent;
    font-size: 1.125rem;
    width: 100%;
    padding: 0 1.5rem;
    z-index: 2;
    color: ${({ theme }) => theme.colors.brand};
    &:focus {
        ~ ${Label} {
            top: -0.625rem;
            font-size: 0.875rem;
            z-index: 1;
            background: ${({ theme }) => theme.colors.accent};
            padding: 0 0.3125rem;
        }
    }
    &::-webkit-input-placeholder {
        visibility: hidden;
    }
    &::-moz-placeholder {
        visibility: hidden;
    }
    &:-ms-input-placeholder {
        visibility: hidden;
    }
    &::-ms-input-placeholder {
        visibility: hidden;
    }
    &::placeholder {
        visibility: hidden;
    }
    &:focus-visible {
        box-shadow: none;
    }
`;
