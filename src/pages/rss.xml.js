import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET() {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return rss({
    title: 'Blog',
    description: 'Blog cá nhân - chia sẻ kiến thức và dự án',
    site: 'https://nghiaxh.github.io/blog',
    items: posts.map(post => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.id}/`,
    })),
  });
}
