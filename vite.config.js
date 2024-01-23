import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@components": resolve(__dirname, "./src/components"),
            "@assets": resolve(__dirname, "./src/assets"),
            "@pages": resolve(__dirname, "./src/pages"),
        },
    },
});
