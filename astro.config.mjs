import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";
import svelte from "@astrojs/svelte";
import { quasar, transformAssetUrls } from "@quasar/vite-plugin";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    vue({
      template: {
        transformAssetUrls,
      },
      jsx: true,
      appEntrypoint: "/src/pages/_app",
    }),
    quasar(),
    svelte(),
  ],
});
