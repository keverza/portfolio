
import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path'

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	resolve: {
		alias: {
		  
		  $icons: path.resolve('./src/lib/icons')
		}
	  }
};

export default config;
