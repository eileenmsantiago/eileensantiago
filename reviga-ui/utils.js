import { base, theme } from 'ui.config'

const colors = theme.colors;

export const toRem = (px) => {
    if(!px) return undefined;
    return `${px/base.fontSize}rem;`
}

export const getColor = (color) => {

    if(!color) return null;

    let info = color.split('-');
    let name = info[0];
    if(info.length === 1) {
        if(colors[name]) {
            return colors[name].default;
        } else {
            return null;
        }
    } else if(info.length === 2){
        let shade = info[1];
        if(colors[name].shades[shade]) {
            return colors[name].shades[shade];
        } else {
            return null;
        }
    } else {
        return null;
    }
}

export const getSpacing = (space) => {
    return toRem(space);
}