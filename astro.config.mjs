import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import rehypeSlug from 'rehype-slug';
import rehypeVietnameseSlug from './src/plugins/rehype-vietnamese-slug.ts';

export default defineConfig({
  site: 'https://nghiaxh.github.io',
  base: '/blog',
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    rehypePlugins: [rehypeSlug, rehypeVietnameseSlug],
  },
});
