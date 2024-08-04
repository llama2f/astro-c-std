// 1. Import utilities from `astro:content`
import { z, defineCollection, reference } from 'astro:content';
// 2. Define a `type` and `schema` for each collection
const blog = defineCollection({
	type: 'content', // v2.5.0 and later
	schema: z.object({
		title: z.string(),
		tags: z.array(z.string()),
		image: z.object({
			url: z.string(),
			alt: z.string(),
		}),
		pubDate: z.date(),
		relatedPosts: z.array(reference('blog')),
		author: z.string().default('caori'),
		isDraft: z.boolean(),
	}),
});
const illust = defineCollection({
	type: 'content', // v2.5.0 and later
	schema: z.object({
		title: z.string(),
		tags: z.array(z.string()),
		image: z.object({
			url: z.string(),
			alt: z.string(),
		}),
		pubDate: z.date(),
		author: z.string().default('caori'),
		isDraft: z.boolean(),
	}),
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
	blog: blog,
	illust: illust,
};
