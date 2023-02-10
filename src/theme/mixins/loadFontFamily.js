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
