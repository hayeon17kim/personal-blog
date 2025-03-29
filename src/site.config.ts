import type { SiteConfig } from "@/types";
import type { ThemeObjectOrShikiThemeName } from "astro-expressive-code";

export const siteConfig: SiteConfig = {
	// Used as both a meta property (src/components/BaseHead.astro L:31 + L:49) & the generated satori png (src/pages/og-image/[slug].png.ts)
	author: "Monica",
	// Date.prototype.toLocaleDateString() parameters, found in src/utils/date.ts.
	date: {
		locale: "en-GB",
		options: {
			day: "numeric",
			month: "short",
			year: "numeric",
		},
	},
	// Used as the default description meta property and webmanifest description
	description: "My personal blog where I share my thoughts, experiences, and insights about technology, life, and everything in between.",
	// HTML lang property, found in src/layouts/Base.astro L:18 & astro.config.ts L:48
	lang: "en-GB",
	// Meta property, found in src/components/BaseHead.astro L:42
	ogLocale: "en_GB",
	// Used to construct the meta title property found in src/components/BaseHead.astro L:11, and webmanifest name found in astro.config.ts L:42
	title: "Monica's Blog",
	// ! Please remember to replace the following site property with your own domain, used in astro.config.ts
	url: "https://monica-blog.dev/",
};

// Used to generate links in both the Header & Footer.
export const menuLinks = [
	{
		path: "/",
		title: "Home",
	},
	{
		path: "/about/",
		title: "About",
	},
	{
		path: "/posts/",
		title: "Blog",
	},
];

// Code syntax highlighting configuration
export const codeThemeConfig = {
	borderRadius: "4px",
	fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
	fontSize: "0.875rem",
	lineHeight: "1.7142857rem",
	padding: "1rem",
	themes: ["github-light", "github-dark"] as ThemeObjectOrShikiThemeName[],
};
