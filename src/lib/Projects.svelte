<script>
	import ProjectCard from '$lib//ProjectCard.svelte';

	const projects = [
		{
			link: 'https://keverza-svelte.vercel.app/',
			linkGit: 'https://github.com/keverza/keverza-svelte',
			imgAlt: 'E-commerce frontend site project',
			img: '/img/keverza-svelte-home.png',
			title: 'E-commerce frontend'
		},
		{
			link: 'https://tastemapmenu.vercel.app/',
			linkGit: 'https://github.com/keverza/TasteMapMenu',
			imgAlt: 'restaurant mobile menu project',
			img: '/img/tastemapmenu-home.png',
			title: 'Mobile menu'
		},
		{
			link: '',
			linkGit: 'https://github.com/keverza/keverza-nutritionGen',
			imgGit: 'Nutritional value calculator',
			img: 'img/nutrival-home.png',
			title: 'Nutritional value generator'
		},
		{
			link: 'https://www.iivo.dev/',
			linkGit: 'https://www.iivo.dev/',
			imgAlt: 'Walnut card tray with white powder coated steel divider and 3 punchout holes.',
			img: 'https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg',
			title: 'Portfolio site'
		}
	];
</script>

<div
	class="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-cols-2"
>
	<div>
		<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:tracking-tight sm:text-4xl">
			Projects
		</h2>
		<p class="mt-4 text-gray-500">Some of my work...</p>
	</div>
	<div class="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8 ">
		{#each projects as { link, linkGit, imgAlt, img, title }}
			<ProjectCard {link} {linkGit} {imgAlt} {img} {title} />
		{/each}
	</div>
</div>
