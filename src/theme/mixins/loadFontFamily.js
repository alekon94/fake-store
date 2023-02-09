// import { css } from 'styled-components';

// const loadFontFamily = ({ name, path, weight, style }) => {
//     if (name && path) {
//         return css`
//             @font-face {
//                 font-family: ${name};
//                 src: url('{$path}.woff2') format('woff2'),
//                     url('#{$path}.woff') format('woff');
//                 font-weight: ${weight||'normal'};
//                 font-style: ${style||'normal'};
//                 font-display: swap;
//             }
//         `
//     }
//     return null;
// };
const loadFontFamily = ({ name, woff, woff2, style, weight }) => `
  @font-face {
    font-family: "${name}";
    src: url("${woff2}") format("woff2"),
         url("${woff}") format("woff");
    font-weight: ${weight};
    font-style: ${style};
    font-display: swap;
  }
`;
export default loadFontFamily;
