// 1. ユーティリティを`astro:content`からインポート
import { z, defineCollection } from 'astro:content';
// 2. 各コレクションに`type`と`schema`を定義
const blog = defineCollection({
	type: 'content', // v2.5.0 and later
	schema: z.object({
		title: z.string(),
		tags: z.array(z.string()),
		categories: z.array(z.string().default('etc')),
		pubDate: z.date(),
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
