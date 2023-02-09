import styled from 'styled-components';
import pxToRem from '../../theme/mixins/pxToRem';

export const Header = styled.header`
    transform: translateY(0);
    display: block;
    z-index: 100;
    top: 0;
    position: fixed;
    width: 100%;
    height: ${pxToRem(50)};
    color: red;
    transition: background-color 0.3s ease, color 0.3s ease,
        transform 0.3s linear, -webkit-transform 0.3s linear;
`;

export const Title = styled.div``;
