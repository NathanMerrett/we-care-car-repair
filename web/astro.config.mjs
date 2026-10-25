// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	// Downloaded from Google Fonts at build time and served from our own
	// domain, so visitors' browsers never contact Google.
	fonts: [
		{
			provider: fontProviders.google(),
			name: 'Barlow',
			cssVariable: '--font-barlow',
			weights: [400, 500, 600],
			styles: ['normal'],
			fallbacks: ['system-ui', 'sans-serif'],
		},
		{
			provider: fontProviders.google(),
			name: 'Barlow Condensed',
			cssVariable: '--font-barlow-condensed',
			weights: [600, 700],
			styles: ['normal'],
			fallbacks: ['Arial Narrow', 'sans-serif'],
		},
	],
});
