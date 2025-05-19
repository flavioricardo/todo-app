import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/todo-app/",
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Bibliotecas principais
          "vendor-react": ["react", "react-dom", "react/jsx-runtime"],
          "vendor-firebase": [
            "firebase/app",
            "firebase/auth",
            "firebase/firestore",
            "firebase/analytics",
          ],
          "vendor-gestalt": ["gestalt"],
          "vendor-prop-types": ["prop-types"],

          // Utilitários e constantes
          "app-utils": [
            "./src/utils/storage.js",
            "./src/utils/useIsMobile.js",
            "./src/utils/zIndex.js",
          ],
          "app-constants": [
            "./src/constants/translations.js",
            "./src/constants/categories.js",
          ],

          // Serviços de dados
          "app-services": [
            "./src/services/taskService.js",
            "./src/services/userPreferencesService.js",
            "./src/services/categoryService.js",
          ],

          // Componentes básicos da UI
          "ui-components-form": [
            "./src/components/TaskForm.jsx",
            "./src/components/TaskFilters.jsx",
            "./src/components/CategoryManagement.jsx",
          ],

          // Componentes de interface principais
          "ui-components-core": [
            "./src/components/AppHeader.jsx",
            "./src/components/Accordion.jsx",
            "./src/components/TaskToast.jsx",
          ],

          // Componentes complexos
          "ui-components-task": ["./src/components/TaskList.jsx"],
          "ui-components-auth": ["./src/components/Login.jsx"],
        },
      },
    },
    // Aumentar o limite para evitar warnings enquanto testamos
    chunkSizeWarningLimit: 800,
    // Otimizações adicionais
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ["console.log", "console.info"],
        passes: 2,
      },
      mangle: {
        properties: {
          regex: /^_/, // Mangler apenas propriedades que começam com _
        },
      },
    },
    cssCodeSplit: true,
  },
});
