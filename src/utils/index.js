import {createBreakpoint} from 'styled-components-breakpoint';

const breakpoints = {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
};

export const breakpoint = createBreakpoint(breakpoints);

export function hexToRgba(fullHex, opacity) {
    const hex = fullHex.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    const result = `rgba(${r}, ${g}, ${b}, ${opacity})`;
    return result;
}

export const colors = {
    main: '#1B264F',
    font: '#C6C5B9',
    fontHighlight: '#FFFFFF',
    button: '#F74343',
    link: '#1969D3',
    background: '#FDFDFD',
};
