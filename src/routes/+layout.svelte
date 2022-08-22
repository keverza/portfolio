<script>
	import Header from '$lib/header/Header.svelte';
	import '../app.postcss';

	const year = new Date().getFullYear();
</script>

<header />

<main>
	<slot />
</main>

<footer class="flex justify-center items-center">
	<p>Copyright and designed by <a href="https://github.com/keverza">Ignas Ivonis</a> {year}</p>
</footer>

<style>
	a:hover {
		text-decoration: none;
	}
</style>
