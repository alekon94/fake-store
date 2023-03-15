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
export const ButtonBlur = styled(Button)`
    --btn-text: ${({ theme }) => theme.colors.white};
    border: 0.0625rem solid transparent;
    backdrop-filter: blur(10px);
    background: -webkit-linear-gradient(
        bottom,
        rgba(36, 41, 52, 0.25),
        rgba(36, 41, 52, 0.25)
    );
    background: linear-gradient(
        0deg,
        rgba(36, 41, 52, 0.25),
        rgba(36, 41, 52, 0.25)
    );
`;
export const ButtonBlack = styled(Button)`
    border: 0.0625rem solid ${({ theme }) => theme.colors.brand};
    --btn-bg: ${({ theme }) => theme.colors.brand};
    --btn-text: ${({ theme }) => theme.colors.white};

    &:hover {
        --btn-bg: ${({ theme }) => theme.colors.accent};
        --btn-text: ${({ theme }) => theme.colors.brand};
        transition: 0.3s;
        border: 0.0625rem solid var(--btn-bg);
    }
`;
