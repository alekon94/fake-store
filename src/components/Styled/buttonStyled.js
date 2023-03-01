import styled from 'styled-components';

export const Button = styled.button`
    --btn-text: ${({ theme }) => theme.colors.brand};
    --btn-bg: transparent;
    --btn-text-hover: ${({ theme }) => theme.colors.accent};
    font-family: 'LibreFranklin', sans-serif;
    font-weight: bold;
    border: 0.0625rem solid var(--btn-text);
    box-shadow: none;
    min-width: 17.5rem;
    transition: opacity 0.2s linear, background-color 0.2s linear,
        border-color 0.2s linear;
    display: inline-block;
    cursor: pointer;
    text-decoration: none;
    outline: none;
    text-align: center;
    position: relative;
    padding: 1.5625rem;
    overflow: hidden;
    background-color: var(--btn-bg);
    color: var(--btn-text);
    text-transform: uppercase;
    font-size: 1rem;
`;

export const ButtonIcon = styled(Button)`
    --btn-icon-color: ${({ theme }) => theme.colors.brand};
    --btn-icon-hover: ${({ theme }) => theme.colors.white};
    min-width: fit-content;

    display: flex;

    align-items: center;
    border: 0.0625rem var(--btn-icon-color) solid;
    border-left: none;
    background-color: transparent;
    padding: 0 1.375rem;
    cursor: pointer;
    -webkit-transition: 0.2s;
    transition: 0.2s;

    svg {
        fill: none;
        stroke: var(--btn-icon-color);
    }
    &:hover {
        background-color: var(--btn-icon-color);
    }
`;
