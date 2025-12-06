## Features

- 🎉 **Fully up-to-date with SvelteKit 2 and Svelte 5!**
- ⚡️ **Super fast static site generation with hydration**. Every route is
  compiled down to static HTML and routed with (optional) JavaScript, thanks to
  the SvelteKit static adapter (pre-installed)
- 📦 **Zero-config preloading** for automatic, fast background preloading of all
  top-level pages
- ✍️ **Markdown support** with a pre-configured blog
  - 📑 **Pagination** included (_can customize posts per page_)
  - ✅ **Category pages** included
  - 💬 **Posts JSON API**
- 📝 **mdsvex** pre-installed--use Svelte components inside Markdown!
  - 🔗 **Rehype** plugins are included to generate unique heading IDs, for
    direct linking
- 📱 **Responsive and accessible defaults**; includes a "skip to content" link
  and accessible mobile nav menu
- 🔄 **Page transitions** (_fancy and customizable!_)
- 🔎 **Basic SEO** for blog posts (_strongly recommend checking that out for
  yourself, though_)
- 📰 **RSS feed** set up and ready to go (_though it could also likely benefit
  from some optimization_); just update `src/lib/config.js`
- 💈 **Basic CSS ready to use, customize, or remove!** Want to use Sass or
  Tailwind instead? Just install them!
  ([Directions for Tailwind can be found here](https://tailwindcss.com/docs/guides/sveltekit).)
  Prefer to write your own? Delete `static/css` and add your own links in
  `+layout.svelte`.
- ℹ️ **Fonts included**. (No more built-in Google tracking.)

## Quick Start

That should get a dev server up and running (assuming you have npm and Node
installed already). Any saved changes to components and styles should
auto-refresh blazingly fast.

Now all you need to do is:

- Update the `src/lib/config.js` file
- Drop your Markdown posts into `src/lib/posts`
- Optionally, customize the styles in `static/css`

## Customization

Be sure to update `src/lib/config.js` to reflect your site's domain,
preferences, etc. This is also where the nav menu can be updated.

**It's very important to update this file with the specific details of your
site.** Info from this file is used in your RSS feed and SEO meta tags, so don't
launch without updating it.

## Adding new posts

Adding new posts is as simple as dropping a new `.md` file into `src/lib/posts`.
New posts will automatically show up on the site, be added to the posts API, and
any category pages.

A few demo Markdown posts are included, and highlight some of the features of
this starter. These demo posts can be updated or removed, but it may be best to
use one as a starting point, just for the frontmatter properties.

If you want to use other frontmatter properties in the template (or just modify
the layout), make changes in `src/routes/blog/[post]/+page.svelte`.

⚠️ **Note: posts should have a `date` and an `excerpt` defined in the
frontmatter.** They're sorted by `date`, and use `excerpt` in page meta tags
(for SEO, social sharing, etc.) There are also other frontmatter properties used
to enhance the site experience, like the `coverWidth` and `coverHeight`, which
are used in the template to reserve space for the image, minimizing cumulative
layout shift.

The starter will still work without `date` properties in your posts, but the
sorting won't be right. Similarly, you can have posts without an `excerpt`, but
your SEO/social previews will be sub-optimal.

Also: while there's no link to it by default, `/blog/category` exists as an
archive of all your post categories.

### Pagination

Pagination automatically kicks in once you have more posts than the
`postsPerPage` option in `src/lib/config.js`. This means you won't see the
pagination right away unless you either change `postsPerPage` to a very low
number, or add several more Markdown files to the `src/lib/posts` folder.

**Note:** both the normal `/blog` feed _and_ the category feeds at
`/category/[category]` are automatically paginated.

### RSS

This starter also includes a basic RSS feed. It's very minimal, so you may want
to tweak it depending on your XML feed needs, but it _does_ work out of the box.

Update the `config` details in `src/lib/config.js` to get your site's unique
info correct. (You could also pull this info in other places, or add to it, to
keep things consistent, but that's up to you.)
