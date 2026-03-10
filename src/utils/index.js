const breakpointValues = {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
};

export function breakpoint(min, max) {
    const minPx = breakpointValues[min] || 0;
    const maxPx = max ? breakpointValues[max] : null;

    return (...args) => {
        const styles = String.raw(...args);
        if (maxPx != null) {
            return `@media (min-width: ${minPx}px) and (max-width: ${maxPx - 1}px) { ${styles} }`;
        }
        if (minPx === 0) {
            return styles;
        }
        return `@media (min-width: ${minPx}px) { ${styles} }`;
    };
}

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
