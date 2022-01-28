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
    siteName: "Mealie.io",
    siteDescription: "Mealie is a platform for managing and sharing recipes.",
    siteUrl: "https://hay-kot.dev",
    demoUrl: "https://demo.mealie.io",

    year: new Date().getFullYear(),

    // Static External Links
    devBlogUrl: "https://blog.hay-kot.dev",
    clientPortalUrl: "https://client.hay-kot.dev",
  };
};
