import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
	return rss({
		title: 'c-studio',
		description: 'caori_stのWEBとブログ　DIYなど雑多ブログも',
		site: 'lhttps://c-std.com/',
		items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
		customData: `<language>ja-jp</language>`,
	});
}
