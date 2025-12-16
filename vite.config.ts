import path from 'path';
import { execSync } from 'child_process';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    let lastCommitDate = '';

    try {
      lastCommitDate = execSync('git log -1 --date=iso-strict --format=%cd', {
        encoding: 'utf8',
      }).trim();
    } catch {
      lastCommitDate = '';
    }

    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        __LAST_COMMIT_DATE__: JSON.stringify(lastCommitDate),
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
