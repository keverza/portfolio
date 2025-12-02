<script>
	import TableOfContents from '$lib/components/TableOfContents.svelte';
	export let data;

	let Post = null;
	const file = `/src/lib/content/blog/${data.slug}.md`;
	const modules = import.meta.glob('$lib/content/blog/*.md');

	modules[file]().then((mod) => {
		Post = mod.default;
	});
</script>

<div id="blog-layout">
	<TableOfContents containerSelector="#post" />

	<article id="post">
		{#if Post}
			<Post />
		{:else}
			<p>Loading…</p>
		{/if}
	</article>
</div>
