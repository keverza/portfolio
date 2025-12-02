<script>
	export let data;
	const { posts } = data;
</script>

<h1>All posts</h1>

<nav class="post-list">
	{#each posts as post}
		<div class="post-item">
			<div class="post-info">
				<time datetime={post.date}>
					{new Date(post.date).toLocaleDateString('en-GB')}
				</time>

				<a href={`/blog/${post.slug}/`}>
					{post.title}
				</a>
			</div>

			<span class="badge">#{post.tag}</span>
		</div>
	{/each}
</nav>
