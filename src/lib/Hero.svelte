<script>
	import IconGithub from '$icons/IconGithub.svelte';
	import IconMail from '$icons/IconMail.svelte';
	import IconDown from '$icons/IconDown.svelte';

	let hover = ' ';
	const handleMouseOver = (e) => {
		hover = e;
	};
	const handleMouseOut = () => {
		hover = ' ';
	};
</script>

<div
	class="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-cols-2"
>
	<div>
		<h2
			class="text-3xl font-thin uppercase tracking-widest text-gray-900 sm:tracking-tight sm:text-4xl"
		>
			Ignas Ivonis | <span class="font-light">Full stack web developer.</span>
		</h2>
		<ul class="flex justify-center items-center gap-3 mt-8">
			<li
				on:focus={() => handleMouseOver('ignas@mailbox.com')}
				on:mouseover={() => handleMouseOver('ignas@mailbox.com')}
				on:blur={handleMouseOut}
				on:mouseout={handleMouseOut}
			>
				<a href=""><IconMail /></a>
			</li>
			<li
				on:focus={() => handleMouseOver('github/keverza')}
				on:mouseover={() => handleMouseOver('github/keverza')}
				on:blur={handleMouseOut}
				on:mouseout={handleMouseOut}
			>
				<a href=""><IconGithub /></a>
			</li>
		</ul>
		<p class="h-8 flex  justify-center items-center">{hover}</p>

		<a href="#one" class="flex justify-center items-center"><IconDown /></a>
	</div>
</div>
