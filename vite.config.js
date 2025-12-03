import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
	plugins: [sveltekit()],
	resolve: {
		alias: {
			$lib: path.resolve('./src/lib'),
			$utils: path.resolve('./src/lib/utils'),
			$stores: path.resolve('./src/stores'),
			$components: path.resolve('./src/lib/components'),
			$api: path.resolve('./src/routes/api'),
			$styles: path.resolve('./src/lib/styles'),
			$posts: path.resolve('./src/lib/posts'),
			$icons: path.resolve('./src/lib/icons')
		}
	}
});
