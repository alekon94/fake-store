import sizes from '../sizes';
import pxToRem from './pxToRem';

const mediaBreakpointUp = (valuesList) => {
    const size = sizes.breakpoints[valuesList];

    return `@media screen and (min-width: ${pxToRem(size)})`;
};
export default mediaBreakpointUp;
