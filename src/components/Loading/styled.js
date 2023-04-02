import styled, { keyframes } from 'styled-components';

const load8 = keyframes`
   0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg); }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg); } 
`;
const LoadingCircle = styled.div`
    position: relative;
    text-indent: -9999em;
    overflow: hidden;
    white-space: nowrap;
    &::before {
        content: '';
        display: block;
        margin: 3.75rem auto;
        position: relative;
        border: 0.4em solid ${({ theme }) => theme.colors.text};
        border-left-color: ${({ theme }) => theme.colors.brand};
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
        -webkit-animation: ${load8} 1.1s infinite linear;
        animation: ${load8} 1.1s infinite linear;
        border-radius: 50%;
        width: 3em;
        height: 3em;
    }
`;

export default LoadingCircle;
