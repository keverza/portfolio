<script>
	import IconGithub from '$icons/IconGithub.svelte';
	import IconWww from '$icons/IconWWW.svelte';
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
	<h2 class="uppercase text-center text-gray-500">{title}</h2>
	<div class="flex flex-row justify-center items-center gap-3 mt-2">
		<a href={link}><IconWWW /></a>
		<a href={linkGit}><IconGithub /></a>
	</div>
</article>
