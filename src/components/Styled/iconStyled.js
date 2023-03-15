import styled from 'styled-components';

const IconStyled = styled.svg`
    stroke: var(--icon-color);
    fill: none;
    transition: fill 0.2s ease, stroke 0.2s ease;
    width: var(--icon-width);
    height: var(--icon-height);
    &:hover {
        stroke: ${({ theme }) => theme.colors.grey};
    }
`;

export default IconStyled;
