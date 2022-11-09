import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import netlify from '@astrojs/netlify/functions'

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://samfitz.me',
	integrations: [mdx(), sitemap()],
	output: 'server',
	adapter: netlify(),
});
