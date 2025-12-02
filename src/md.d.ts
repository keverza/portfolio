// declare module '*.md' {
//   import type { SvelteComponentTyped } from 'svelte';
//   export const metadata: Record<string, any>;
//   export default class MarkdownComponent extends SvelteComponentTyped<any> {}
// }

declare module '*.md' {
	import type { SvelteComponentTyped } from 'svelte';

	export const metadata: {
		title: string;
		date: string;
		tag?: string;
		[key: string]: any;
	};

	const component: SvelteComponentTyped;
	export default component;
}
