function mockMatchMedia() {
    return {
        matches: false,
        addListener() {},
        removeListener() {},
    };
}

window.matchMedia = window.matchMedia || mockMatchMedia;