/*jshint esversion: 8 */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
export default defineConfig({
  base: "/my-profile-web-page",
  plugins: [react()],
  server: { port: 5173, // Specify the desired port here 
  open: true, // Optional: Opens the browser automatically 
  host: '0.0.0.0',
  },
});
