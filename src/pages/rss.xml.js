import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'
import MarkdownIt from 'markdown-it'
import sanitizeHtml from 'sanitize-html'
const parser = new MarkdownIt()

export async function GET() {
  const posts = await getCollection('blog')
  return rss({
    title: 'c-studio',
    description: 'caori_stのWEBとブログ　DIYなど雑多ブログも',
    site: 'https://c-std.com/',
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/posts/${post.slug}/`,
      content: sanitizeHtml(parser.render(post.body)),
      ...post.data,
    })),
    customData: `<language>ja-jp</language>`,
  })
}
