import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-vercel';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},

	preprocess: [
		mdsvex({
			extensions: ['.md', '.svx'],
			rehypePlugins: [
				rehypeSlug, // adds IDs to headings
				[
					rehypeAutolinkHeadings,
					{
						behavior: 'append',
						properties: { class: 'auto-link' }
					}
				]
			]
		})
	],
	extensions: ['.svelte', '.svx', '.md']
};

export default config;
