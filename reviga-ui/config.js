import {css} from '@emotion/react';
import config from 'ui.config';
import {toRem} from './utils';

const typesToCSS = (types) => {
    let cssTypes = {};
    for (const [key, value] of Object.entries(types)) {
        cssTypes[key] = css`
            font-size: ${toRem(value.fontSize)};
            line-height: ${value.lineHeight};
        `;
    }
    return cssTypes;
}
export const theme = {
    typography: typesToCSS(config.theme.typography)
}
export default {
    theme
}