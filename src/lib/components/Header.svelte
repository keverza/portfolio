<script>
  export let title = "Page";
  export let showDash = true;
</script>

<header class="site-header">
  <h1>{title}</h1>
  {#if showDash}
    <div class="dash">-</div>
  {/if}
</header>

