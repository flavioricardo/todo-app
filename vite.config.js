import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/todo-app/",
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Chunk para React
          "vendor-react": ["react", "react-dom", "react/jsx-runtime"],

          // Chunk para Firebase (grande biblioteca)
          "vendor-firebase": [
            "firebase/app",
            "firebase/auth",
            "firebase/firestore",
            "firebase/analytics",
          ],

          // Chunk para Gestalt UI
          "vendor-gestalt": ["gestalt"],

          // Chunk para hooks e utilitários
          utils: ["./src/utils/storage.js", "./src/utils/useIsMobile.js"],

          // Chunk para serviços
          services: ["./src/services/taskService.js"],

          // Chunk para componentes menores
          "components-small": [
            "./src/components/TaskForm.jsx",
            "./src/components/TaskFilters.jsx",
            "./src/components/TaskToast.jsx",
          ],

          // Cada componente grande em seu próprio chunk
          "component-header": ["./src/components/AppHeader.jsx"],
          "component-login": ["./src/components/LoginModal.jsx"],
          "component-tasklist": ["./src/components/TaskList.jsx"],
        },
      },
    },
    // Aumentar o limite para evitar warnings enquanto testamos
    chunkSizeWarningLimit: 600,
    // Otimizações adicionais
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
  },
});
