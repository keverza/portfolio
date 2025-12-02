export const load = async ({ params }) => {
	const modules = import.meta.glob('/src/lib/content/blog/*.md');
	const slug = params.slug;

	const file = `/src/lib/content/blog/${slug}.md`;

	const post = (await modules[file]()) as {
	// default: typeof import('svelte').SvelteComponent;
	metadata: Record<string, any>;
};


	return {
		// content: post.default,
		slug: params.slug,
		metadata: post.metadata
	};
};
