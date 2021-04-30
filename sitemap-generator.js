module.exports = {
	siteUrl: "https://example.com",
	generateRobotsTxt: true,
	robotsTxtOptions: {
		policies: [
			{
				userAgent: "*",
				allow: "/",
				disallow: ["/404", "404.html"],
			},
		],
		additionalSitemaps: ["https://example.com/sitemap.xml"],
	},
};
