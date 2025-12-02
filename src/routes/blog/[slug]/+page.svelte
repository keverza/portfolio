<script>
	import TableOfContents from '$lib/components/TableOfContents.svelte';

	// 'data' comes from the +page.ts return object
	export let data;
</script>

<div id="blog-layout">
	<TableOfContents containerSelector="#post" />

	<article id="post">
		<svelte:component this={data.content} />
	</article>
</div>
