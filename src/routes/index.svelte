<script context="module">
	export const prerender = true;
</script>

<script>
	import About from '$lib/About.svelte';
	import Project from '$lib/Project.svelte';
	import Contact from '$lib/Contact.svelte';
</script>

<svelte:head>
	<title>Ignas Ivonis | Web developer</title>
	<meta name="description" content="Ignas Ivonis full stack web development portfolio" />
</svelte:head>

<section>
	<h1>
		<span class="welcome">
			<picture>
				<source srcset="svelte-welcome.webp" type="image/webp" />
				<img src="svelte-welcome.png" alt="Welcome" />
			</picture>
		</span>

		Ignas Ivonis
	</h1>
	<span class="subheading">fullstack web developer</span>
	<ul>
		<li><a href="mailto:ignas@mailbox.org">ignas@mailbox.org </a></li>
		<li><a href="https://github.com/keverza">Github</a></li>
	</ul>
</section>

<section>
	<About />
	<Project />
	<Contact />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
		font-size: 3em;
		margin-bottom: 0;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}

	.subheading {
		margin-top: 0;
		text-transform: uppercase;
	}
</style>
