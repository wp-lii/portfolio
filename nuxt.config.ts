// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["./app/assets/scss/main.scss"],
  vite: {
    css: {
      preprocessorMaxWorkers: true, //css/scss編譯更快
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "@/assets/scss/_mixin" as *;
          `,
        },
      },
    },
  },
});
