export default function robots() {
  const baseUrl = "https://hanuman-ansh-tour-travels.vercel.app";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

