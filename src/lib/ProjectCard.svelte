<script>
	import IconGithub from '$icons/IconGithub.svelte';
	import IconLink from '$icons/IconLink.svelte';
	import IconLinkRemoved from '$icons/IconLinkRemoved.svelte';
	import IconWWW from '$icons/IconWWW.svelte';

	export let link;
	export let linkGit;
	export let img;
	export let imgAlt;
	export let title;
</script>

<article>
	<a href={link}>
		<img
			src={img}
			alt={imgAlt}
			class="bg-gray-100 rounded border border-white hover:border-orange-500 cursor-pointer "
		/></a
	>
	<h2 class="uppercase text-center text-gray-500 truncate ">{title}</h2>
	<div class="flex flex-row justify-center items-center gap-3 mt-2">
		{#if link === ''}
			<a href={link}><IconLinkRemoved /></a>
		{:else}
			<a href={link}><IconLink /></a>
		{/if}

		<a href={linkGit}><IconGithub /></a>
	</div>
</article>
