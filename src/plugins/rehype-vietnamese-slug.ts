import type { Plugin } from 'unified';
import type { Root } from 'hast';
import { visit } from 'unist-util-visit';

const rehypeVietnameseSlug: Plugin<[], Root> = () => {
  return (tree) => {
    visit(tree, 'element', (node) => {
      const id = node.properties?.id;
      if (typeof id !== 'string') return;
      node.properties.id = id
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/đ/g, 'd')
        .replace(/Đ/g, 'd');
    });
  };
};

export default rehypeVietnameseSlug;
