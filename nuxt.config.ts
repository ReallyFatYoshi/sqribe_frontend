import tailwindcss from "@tailwindcss/vite";
import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/style.css"],
  sitemap: {
    ""
    trailingSlash: true,
  },
  modules: [
    "@nuxt/eslint",
    "@nuxt/ui",
    "@nuxt/test-utils",
    "@nuxt/image",
    "@nuxt/icon",
    "@nuxt/fonts",
    "@nuxt/scripts",
    "@nuxtjs/sitemap"
  ],
  plugins: [
    // "@/plugins/pusher",
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  app: {
    head: {
      title: "SQribe",
      htmlAttrs: {
        lang: "en",
      },
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  }
});
