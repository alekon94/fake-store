import { css } from 'styled-components';
import loadFontFamily from './mixins/loadFontFamily';
import harmondWoff from '../assets/fonts/Harmond-ExtraBoldExpanded.woff';
import harmondWoff2 from '../assets/fonts/Harmond-ExtraBoldExpanded.woff2';
import harmondSBICWoff from '../assets/fonts/Harmond-SemBdItaCond.woff';
import harmondSBICWoff2 from '../assets/fonts/Harmond-SemBdItaCond.woff2';
import libreFranklinELWoff from '../assets/fonts/LibreFranklin-ExtraLight.woff';
import libreFranklinELWoff2 from '../assets/fonts/LibreFranklin-ExtraLight.woff2';
import libreFranklinLWoff from '../assets/fonts/LibreFranklin-Light.woff';
import libreFranklinLWoff2 from '../assets/fonts/LibreFranklin-Light.woff2';
import libreFranklinMWoff from '../assets/fonts/LibreFranklin-Medium.woff';
import libreFranklinMWoff2 from '../assets/fonts/LibreFranklin-Medium.woff2';
import libreFranklinRWoff from '../assets/fonts/LibreFranklin-Regular.woff';
import libreFranklinRWoff2 from '../assets/fonts/LibreFranklin-Regular.woff2';
import libreFranklinSBWoff from '../assets/fonts/LibreFranklin-SemiBold.woff';
import libreFranklinSBWoff2 from '../assets/fonts/LibreFranklin-SemiBold.woff2';

const Fonts = css`
    ${loadFontFamily({
        name: 'Harmond',
        woff: harmondWoff,
        woff2: harmondWoff2,
        weight: 800,
        style: 'normal',
    })};
    ${loadFontFamily({
        name: 'Harmond',
        woff: harmondSBICWoff,
        woff2: harmondSBICWoff2,
        weight: 600,
        style: 'normal',
    })}
    ${loadFontFamily({
        name: 'LibreFranklin',
        woff: libreFranklinELWoff,
        woff2: libreFranklinELWoff2,
        weight: 200,
        style: 'normal',
    })}
     ${loadFontFamily({
        name: 'LibreFranklin',
        woff: libreFranklinLWoff,
        woff2: libreFranklinLWoff2,
        weight: 300,
        style: 'normal',
    })}
     ${loadFontFamily({
        name: 'LibreFranklin',
        woff: libreFranklinMWoff,
        woff2: libreFranklinMWoff2,
        weight: 400,
        style: 'normal',
    })}
     ${loadFontFamily({
        name: 'LibreFranklin',
        woff: libreFranklinRWoff,
        woff2: libreFranklinRWoff2,
        weight: 500,
        style: 'normal',
    })}
     ${loadFontFamily({
        name: 'LibreFranklin',
        woff: libreFranklinSBWoff,
        woff2: libreFranklinSBWoff2,
        weight: 800,
        style: 'normal',
    })}
`;
export default Fonts;
