import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
html {
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    height: 100%;
    box-sizing: border-box;

}

*,
*:before,
*:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    margin: 0;
    display: flex;
    flex-flow: column;
    min-height: 100%;
    margin: 0;
    font-size: 1.5rem;
    letter-spacing: 0.06rem;
    font-family: "LibreFranklin", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 1.5rem;
    line-height: 1.4;
    overflow-x: hidden;
    align-self: end;
    justify-content: stretch;
}




#__layout {
    height: 100%;
    display: flex;
    flex-direction: column;
    min-height: 100%;
}

.fradient {
    background-attachment: fixed;
}

a {
    transition: 0.2s ;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-focus-ring-color: rgba(255, 255, 255, 0) !important;
    tap-highlight-color: transparent;
}
a:hover {
    transition: 0.2s ;

}

img {
    display: block;
    max-width: 100%;
    height: auto;
}

  button, a {
    -moz-appearance: none;
    -webkit-appearance: none;
    background: none;
    border: none;
    font-size: inherit;
  }
  svg:hover {
    transition: 0.2s ;
  }
  h1, h2, h3, h4, h5 {
    font-weight: 300;
    -webkit-margin-before: 0;
    margin-block-start: 0;
    -webkit-margin-after: 0;
    margin-block-end: 0;
}

`;
