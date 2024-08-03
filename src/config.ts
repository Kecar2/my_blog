export const SITE_TITLE = "KCS";
export const SITE_DESCRIPTION =
  "A go-to resource for the latest trends and insights in Business Intelligence (BI). Explore articles and feedback on BI tools, data analytics, data visualization, big data, and predictive analytics. Let’s talk about the best BI software, dashboard solutions, and reporting tools to make data-driven decision making and business success.";
export const TWITTER_HANDLE = "@yourtwitterhandle";
export const MY_NAME = "Kendry Carvajal";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
