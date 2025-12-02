<!-- <nav class="table-of-contents" id="toc">
	<ul id="toc-list">
		<li class="toc-h2">
			<a href="/" data-title="Index"
				><span class="toc-dash"></span><span class="toc-tooltip">Index</span></a
			>
		</li>
		<li class="toc-h2">
			<a href="#heading-0" data-title="Item" class="active"
				><span class="toc-dash"></span><span class="toc-tooltip">Item</span></a
			>
		</li>
		<li class="toc-h2">
			<a href="#heading-1" data-title="Item2" class=""
				><span class="toc-dash"></span><span class="toc-tooltip">Item2</span></a
			>
		</li>
		<li class="toc-h2">
			<a href="#heading-2" data-title="Item3" class=""
				><span class="toc-dash"></span
				><span class="toc-tooltip">Item3</span></a
			>
		</li>
		<li class="toc-h2">
			<a href="#heading-3" data-title="Item4" class=""
				><span class="toc-dash"></span
				><span class="toc-tooltip">Item4</span></a
			>
		</li>
	</ul>
</nav> -->
<script>
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	export let containerSelector = '#post'; // the wrapper around your blog content
	export let minLevel = 2; // h2
	export let maxLevel = 3; // h3 (optional)

	const headings = writable([]);
	const activeId = writable(null);

	onMount(() => {
		const container = document.querySelector(containerSelector);
		if (!container) return;

		// Get all headings inside post
		const list = Array.from(
			container.querySelectorAll(
				Array.from({ length: maxLevel - minLevel + 1 }, (_, i) => `h${i + minLevel}`).join(', ')
			)
		).map((h) => ({
			id: h.id,
			text: h.innerText,
			level: Number(h.tagName.replace('H', ''))
		}));

		headings.set(list);

		// Intersection observer to highlight active heading
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						activeId.set(entry.target.id);
					}
				}
			},
			{
				rootMargin: '0px 0px -70% 0px', // triggers before heading hits top
				threshold: 0
			}
		);

		list.forEach((h) => {
			const el = document.getElementById(h.id);
			if (el) observer.observe(el);
		});

		return () => observer.disconnect();
	});
</script>

<nav class="table-of-contents" id="toc">
	<ul id="toc-list">
		{#each $headings as h}
			<li class="toc-h{h.level}">
				<a href={'#' + h.id} data-title={h.text} class={$activeId === h.id ? 'active' : ''}>
					<span class="toc-dash"></span>
					<span class="toc-tooltip">{h.text}</span>
				</a>
			</li>
		{/each}
	</ul>
</nav>

<style>
	/* You can style this however you like — matches your HTML structure */
	a.active {
		font-weight: bold;
	}
</style>
