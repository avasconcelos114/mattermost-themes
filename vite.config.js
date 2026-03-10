import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    base: '/mattermost-themes/',
    server: { port: 3000 },
    test: {
        environment: 'jsdom',
        setupFiles: './src/setupTests.js',
    },
});
