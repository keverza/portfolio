<script>
	//   import "@picocss/pico/css/pico.css";
	// import NavigationMain from '$lib/components/NavigationMain.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '$styles/app.css';
	// import '@picocss/pico/css/pico.min.css';
	// import '$lib/styles/pico_monospace_theme.css'; // the artifact CSS
	// import '$styles/picoCSSoverride.css';
	//   import "$styles/colors.css";
</script>

<svelte:head>
	<title>Personal Page</title>
	<meta name="description" content="Personal Page" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

<main class="main">
	<slot />
</main>
<Footer />
