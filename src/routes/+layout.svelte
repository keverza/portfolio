<script>
	import Header from '$lib/header/Header.svelte';
	import '../app.postcss';
</script>

<header />

<main>
	<slot />
</main>

<footer>
	<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
</footer>

<style>
	a:hover {
		text-decoration: none;
	}
</style>
