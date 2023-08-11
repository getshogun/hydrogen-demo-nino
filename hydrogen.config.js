import {
  defineConfig,
  CookieSessionStorage,
  PerformanceMetricsServerAnalyticsConnector,
} from "@shopify/hydrogen/config";

export default defineConfig({
  shopify: () => ({
    defaultLanguageCode: "EN",
    defaultCountryCode: "US",
    storeDomain:
      Oxygen.env.SHOPIFY_STORE_DOMAIN || "nino-sandbox.myshopify.com",
    storefrontToken:
      Oxygen.env.SHOPIFY_STOREFRONT_API_PUBLIC_TOKEN ||
      "a898ce6a0c8bd5c075f92d0fc4976b96",
    storefrontApiVersion: "2022-07",
  }),
  session: CookieSessionStorage("__session", {
    path: "/",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 60 * 60 * 24 * 30,
  }),
  serverAnalyticsConnectors: [PerformanceMetricsServerAnalyticsConnector],
});
