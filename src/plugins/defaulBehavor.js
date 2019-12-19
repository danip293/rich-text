import React from 'react';
// import { Image } from '../../components';
// import linkifyPlugin from './slate-linkify/index';
// import { SideBarPlugin } from './side-bar-plugin/';
import { getPlugins } from './index';

const plugins = getPlugins();

const renderPlugin = {
  renderNode: (props, editor, next) => {
    const { attributes, children, node } = props;

    switch (node.type) {
      case 'block-quote':
        return <blockquote {...attributes}>{children}</blockquote>;
      case 'heading-one':
        return <h1 {...attributes}>{children}</h1>;
      case 'heading-two':
        return <h2 {...attributes}>{children}</h2>;
      case 'list-ol':
        return <ol {...attributes}>{children}</ol>;
      case 'list-ul':
        return <ul {...attributes}>{children}</ul>;
      case 'list-item':
        return <li {...attributes}>{children}</li>;

      // case 'image': {
      //   return <Image {...props} />;
      // }

      default:
        return next();
    }
  },

  renderMark: (props, editor, next) => {
    const { children, mark, attributes } = props;

    switch (mark.type) {
      case 'bold':
        return <strong {...attributes}>{children}</strong>;
      case 'code':
        return <code {...attributes}>{children}</code>;
      case 'italic':
        return <em {...attributes}>{children}</em>;
      case 'underlined':
        return <u {...attributes}>{children}</u>;
      default:
        return next();
    }
  },

  renderInline: (props, editor, next) => {
    const { attributes, children, node } = props;

    switch (node.type) {
      case 'link': {
        const { data } = node;
        const href = data.get('href');
        return (
          <a {...attributes} href={href}>
            {children}
          </a>
        );
      }
      default: {
        return next();
      }
    }
  },
};

plugins.array.unshift(renderPlugin);
export const defaultBehavior = plugins.array;
