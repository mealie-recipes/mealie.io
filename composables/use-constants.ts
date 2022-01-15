export interface SiteConstants {
  siteName: string;
  siteDescription: string;
  siteUrl: string;

  // Static External Links
  devBlogUrl: string;
  clientPortalUrl: string;
}

export const useConstants = () => {
  return {
    siteName: "Nuxt.js",
    siteDescription: "Nuxt.js is a framework for building modern web applications with Vue.js and Nuxt.js.",
    siteUrl: "https://hay-kot.dev",
    demoUrl: "https://demo.mealie.io",

    year: new Date().getFullYear(),

    // Static External Links
    devBlogUrl: "https://blog.hay-kot.dev",
    clientPortalUrl: "https://client.hay-kot.dev",
  };
};
