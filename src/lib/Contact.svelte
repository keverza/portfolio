<script>
	import { onMount } from 'svelte';

	export /**
	 * @type {string}
	 */
	let lang;

	// const encMail = 'aWduYXNAbWFpbGJveC5vcmc=';
	const encMail = 'aWduYXNAaWl2by5kZXY=';
	onMount(() => {
		const mailLink = document.querySelector('.contact');
		mailLink?.setAttribute('href', 'mailto:'.concat(atob(encMail)));
	});
</script>

<div
	class="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 "
>
	<div>
		<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:tracking-tight sm:text-4xl">
			{lang === 'en' ? 'Contact me' : 'Užklausos forma'}
		</h2>
		<span class="flex flex-row mt-4 gap-2 ">
			<p class=" text-gray-500">
				{lang === 'en' ? 'You can contact me via ' : 'Galite susiekti parašę į'}
			</p>
			<a class="contact" href="mailto:">{atob(encMail)}</a>
		</span>
	</div>
</div>
