<script>
//   import "@picocss/pico/css/pico.css";
  import NavigationMain from "$lib/components/NavigationMain.svelte";
import "$styles/app.css";
//   import "$styles/colors.css";


</script>

<svelte:head>
  <title>Personal Page</title>
  <meta name="description" content="Personal Page" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

<NavigationMain/>

<main class="main">
  <slot />
</main>
