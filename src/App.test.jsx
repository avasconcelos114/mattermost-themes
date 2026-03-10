import React from 'react';
import { createRoot } from 'react-dom/client';
import { describe, it } from 'vitest';
import App from './App';

describe('App', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        document.body.appendChild(div);
        const root = createRoot(div);
        root.render(<App/>);
        root.unmount();
        document.body.removeChild(div);
    });
});
