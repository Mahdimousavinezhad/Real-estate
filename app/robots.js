export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/buy-residential/*"],
      disallow: "/dashboard/*",
    },
    sitemap: `${process.env.BASE_URL}/sitemap.xml`,
  };
}
