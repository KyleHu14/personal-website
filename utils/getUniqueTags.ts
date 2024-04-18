import type { CollectionEntry } from "astro:content";

const getTags = (post: CollectionEntry<"blog">) => {};

/**
 * Function that returns an array of unique tags given all posts
 * @param posts - An array of posts
 */
const getUniqueTags = (posts: CollectionEntry<"blog">[]) => {
	let uniqueTags = new Set();

	for (const blog of posts) {
		blog.data.tags.forEach(uniqueTags.add, uniqueTags);
	}

	return Array.from(uniqueTags);
};

export default getUniqueTags;
