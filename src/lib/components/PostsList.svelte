<script>
	let { posts = [] } = $props();
</script>

<ul class="posts-list">
	{#each posts as post}
		<li>
			<article>
				<a href="/blog/{post.slug}">
					<h3>
						{post.title}
					</h3>
				</a>
				<ul class="post-footer__categories">
					{#each post.categories as category}
						<li class="">
							<p>#{category}</p>
						</li>
					{/each}
				</ul>
			</article>

			<!-- <p>{post.excerpt}</p> -->
		</li>
	{/each}
</ul>
