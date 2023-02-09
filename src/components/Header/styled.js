import styled from 'styled-components';

export const Header = styled.header`
    transform: translateY(0);
    display: block;
    z-index: 100;
    top: 0;
    position: fixed;
    width: 100%;
    height: 3.125rem;
    color: red;
    transition: background-color 0.3s ease, color 0.3s ease,
        transform 0.3s linear, -webkit-transform 0.3s linear;
`;

export const Title = styled.div``;
