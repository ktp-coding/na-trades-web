// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  rootDir: __dirname,
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "shadcn-nuxt"],
  css: ["~/assets/css/tailwind.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  alias: {
    "@": "~",
  },
});
