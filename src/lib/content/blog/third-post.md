---
title: 'Building a Table of Contents in SvelteKit'
date: '2025-01-10'
tag: ['sveltekit', 'toc', 'mdsvex']
---

# Building a Table of Contents in SvelteKit

Welcome! This article demonstrates how headings work with the TOC component.

To generate a table of contents, just include normal Markdown headings.

---

## Introduction

In this section, we briefly introduce how the TOC will detect headings.

The component reads through the rendered HTML and finds:

- `<h2>` headings
- `<h3>` headings  
  Then builds links pointing to them.

---

## Installing mdsvex

You must install **mdsvex** and configure it in your `svelte.config.js`.

Some key features include:

- Markdown + Svelte syntax
- Automatic metadata via frontmatter
- Works with SvelteKit routing

---

### Adding Plugins

To support the TOC component, your mdsvex config should use:

- `rehype-slug`
- `rehype-autolink-headings`

These ensure headings receive IDs like:

<h2 id="installing-mdsvex">Installing mdsvex</h2> ```
Creating the TOC Component

The TOC component scans the container (e.g. #post) and generates a list of links.
Highlighting Active Headings

When scrolling, the TOC updates the “active” link using IntersectionObserver.
Adding the Component to Your Blog Layout

Finally, your [slug]/+page.svelte may look like this:

<TableOfContents containerSelector="#post" />

<article id="post">
    <Post />
</article>

Conclusion

With mdsvex, rehype plugins, and a small TOC component, you can build a fully dynamic blog index with almost no effort.
