<script>
	import Hero from '$lib/Hero.svelte';
	import Projects from '$lib/Projects.svelte';
	import AboutMe from '$lib/AboutMe.svelte';
	import Contact from '$lib/Contact.svelte';
</script>

<svelte:head>
	<title>Ignas Ivonis | Web Developer</title>
	<meta name="description" content="Ignas Ivonis | Web Developer" />
	<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
</svelte:head>

<div class="bg-white">
	<Hero />
	<AboutMe />
	<Projects />
	<Contact />
</div>
