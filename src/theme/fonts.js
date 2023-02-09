import { css } from 'styled-components';
import loadFontFamily from './mixins/loadFontFamily';
import harmondWoff from '../assets/fonts/Harmond-ExtraBoldExpanded.woff';
import harmondWoff2 from '../assets/fonts/Harmond-ExtraBoldExpanded.woff2';

const Fonts = css`
    ${loadFontFamily({
        name: 'Harmond',
        woff: harmondWoff,
        woff2: harmondWoff2,
        weight: 100,
        style: 'weight',
    })}
`;
export default Fonts;
