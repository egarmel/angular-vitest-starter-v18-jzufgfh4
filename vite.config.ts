/// <reference types="vitest" />

import angular from '@analogjs/vite-plugin-angular';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [angular({ tsconfig: 'tsconfig.json' })],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['src/test-setup.ts'],
    server: {
      deps: {
        inline: ['@allianz/ng-aquila'],
      },
    },
  },
});
