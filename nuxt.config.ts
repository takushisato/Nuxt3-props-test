// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  srcDir: "src",
  components: [
    "@/components",
    "@/components/parts",
    "@/components/blocks",
    "@/components/forms",
  ],
  modules: [],
  css: ["vuetify/lib/styles/main.sass", "mdi/css/materialdesignicons.min.css"],
  build: {
    transpile: ["vuetify"],
  },
});
