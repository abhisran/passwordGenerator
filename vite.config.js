import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Make the server accessible from outside the container
    port: 5173,      // Ensure the port matches the one you expose in Docker
  },
});
