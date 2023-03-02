import { css } from 'styled-components';
import mediaBreakpointUp from './mediaBreakpointUp';
import pxToRem from './pxToRem';

const propertyResponsive = (prop, valuesList) => {
    let result = [];

    if (typeof valuesList === 'object') {
        // eslint-disable-next-line no-unused-vars
        result = Object.keys(valuesList).map(
            (breakpoint) =>
                css`
                    ${mediaBreakpointUp(breakpoint)} {
                        ${prop}:${pxToRem(valuesList[breakpoint])}
                    }
                `
        );
    } else {
        result = css`
            ${prop}: ${pxToRem(valuesList)};
        `;
    }
    return result;
};

export default propertyResponsive;
