import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
    // 1. Get all markdown files as modules
    // We use the root-relative path to ensure keys match exactly
    const modules = import.meta.glob('/src/lib/content/blog/*.md');

    // 2. Construct the file path key matches the keys in 'modules'
    const path = `/src/lib/content/blog/${params.slug}.md`;

    // 3. Check if the file exists
    if (path in modules) {
        // 4. Run the function to import the specific file
        const post = await modules[path]();
        
        return {
            content: post.default, // The Svelte Component itself
            metadata: post.metadata, // Frontmatter (title, date, etc)
            slug: params.slug
        };
    }

    throw error(404, 'Post not found');
};