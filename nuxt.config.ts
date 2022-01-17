import { defineNuxtConfig } from "nuxt3";

export default defineNuxtConfig({
  head: {
    title: "Mealie.io",
    meta: [
      { hid: "og:type", property: "og:type", content: "website" },
      { hid: "og:title", property: "og:title", content: "Mealie.io" },
      { hid: "og:site_name", property: "og:site_name", content: "Mealie.io" },
      { hid: "og:desc", property: "og:description", content: "Mealie is a recipe management app for your kitchen." },
      {
        hid: "og-image",
        property: "og:image",
        content:
          "https://raw.githubusercontent.com/hay-kot/mealie/dev/frontend/public/img/icons/android-chrome-512x512.png",
      },
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Mealie is a recipe management app for your kitchen.",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  css: ["@/assets/css/styles.css"],
  build: {
    postcss: {
      postcssOptions: require("./postcss.config.js"),
    },
  },
});
