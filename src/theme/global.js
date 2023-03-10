import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import fonts from './fonts';
import propertyResponsive from './mixins/propertyResponsive';
import sizes from './sizes';

export default createGlobalStyle`
${reset}
${fonts}
${sizes}
:root {
  --header-color: ${({ theme }) => theme.colors.brand};
  --color-gold: ${({ theme }) => theme.colors.gold};
  --color-silver: ${({ theme }) => theme.colors.silver};
  --icon-color: ${({ theme }) => theme.colors.brand};
    --icon-width: 1em;
    --icon-height: 1em;
${propertyResponsive('--headerOffset', sizes.headerOffset)}
${propertyResponsive('--contentPaddingX', sizes.contentPaddingX)}
${propertyResponsive('--headerHeight', sizes.headerHeight)}
${propertyResponsive('--innerWidth', sizes.innerWidth)}
${propertyResponsive('--postWidth', sizes.postWidth)}




}
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
#root {
      display: flex;
    min-height: 100%;
    flex-direction: column;
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
    color: ${({ theme }) => theme.colors.brand};
    overflow-x: hidden;
    background: ${({ theme }) => theme.colors.white};
    padding-top: var(--headerOffset);
    align-self: end;
    justify-content: stretch;
    height: 100%;

}




.fradient {
    background: var(--color-background);
    background: var(--gradient-background);
    background-attachment: fixed;
}

a {
    transition: 0.2s ;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-focus-ring-color: rgba(255, 255, 255, 0) !important;
    tap-highlight-color: transparent;
    color: var(--link-color, ${({ theme }) => theme.colors.brand});
    -webkit-text-decoration: var(--link-underline, none);
    text-decoration: var(--link-underline, none);
}
a:hover {
    transition: 0.2s ;
    color: ${({ theme }) => theme.colors.grey};

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
    stroke: ${({ theme }) => theme.colors.grey};
  }
  h1, h2, h3, h4, h5 {
    font-weight: 300;
    -webkit-margin-before: 0;
    margin-block-start: 0;
    -webkit-margin-after: 0;
    margin-block-end: 0;
}
`;
