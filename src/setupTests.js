function mockMatchMedia() {
    return {
        matches: false,
        addListener() {},
        removeListener() {},
        addEventListener() {},
        removeEventListener() {},
        dispatchEvent() { return false; },
    };
}

window.matchMedia = window.matchMedia || mockMatchMedia;
