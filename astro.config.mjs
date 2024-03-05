import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
	site: "https://KyleHu14.github.io",
	base: "/personal-website",
	integrations: [mdx(), sitemap(), react(), tailwind()],
});
