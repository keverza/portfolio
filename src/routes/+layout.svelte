<script>
	import Header from '$lib/header/Header.svelte';
	import '../app.postcss';

	const year = new Date().getFullYear();
</script>

<header class=" max-w-2xl mx-auto flex justify-end items-center bg-white p-4 ">
	<ul class="flex flex-row gap-3 ">
		<li><a href="/">LT</a></li>
		<li><a href="/en">EN</a></li>
	</ul>
</header>

<main>
	<slot />
</main>

<footer class=" max-w-2xl mx-auto flex justify-center items-center bg-white p-4 ">
	<p>Copyright and design <a href="https://github.com/keverza">Ignas Ivonis</a> {year}</p>
</footer>

<style>
	a:hover {
		text-decoration: none;
	}
</style>
