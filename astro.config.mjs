import {defineConfig} from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [tailwindcss()],
    },
    site: 'https://hazguardian.com',
    server: {
        port: 3000,
    },

    integrations: [vue({devtools: true})],
});