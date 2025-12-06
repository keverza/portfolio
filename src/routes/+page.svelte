<script>
	import { siteTitle } from '$lib/config';
	import PostsList from '$lib/components/PostsList.svelte';
	import Pagination from '$lib/components/Pagination.svelte';
	import { siteDescription } from '$lib/config';
	let { data } = $props();

	// import ReadMeComponent from '$posts/README.md';
</script>

<svelte:head>
	<title>{siteTitle}</title>

	<meta data-key="description" name="description" content={siteDescription} />
</svelte:head>

<h1>Personal Blog</h1>

<PostsList posts={data.posts} />
