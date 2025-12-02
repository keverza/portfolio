export const load = async () => {
	const modules = import.meta.glob('/src/lib/content/blog/*.md');

	const posts = await Promise.all(
		Object.entries(modules).map(async ([path, resolver]) => {
			const mod = (await resolver()) as {
				metadata: { title: string; date: string; tag?: string };
				default: unknown;
			};

			const { metadata } = mod;
			const slug = path.split('/').pop()!.replace('.md', '');

			return {
				slug,
				title: metadata.title,
				date: metadata.date,
				tag: metadata.tag
			};
		})
	);

	posts.sort((a, b) => +new Date(b.date) - +new Date(a.date));

	return { posts };
};
