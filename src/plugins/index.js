import {
  hasMark,
  toggleMark,
  hasBlock,
  isActiveList,
  changeList,
  insertImage,
} from './utils';
import { SideBarPlugin } from './side-bar-plugin/';

const DEFAULT_NODE = 'paragraph';

export const getPlugins = () => {
  const plugins = {};
  const actions = [
    {
      type: 'bold',
      icon: 'fa fa-bold',
      action: toggleMark,
      isActive: hasMark,
    },

    {
      type: 'italic',
      icon: 'fa fa-italic',
      action: toggleMark,
      isActive: hasMark,
    },

    {
      type: 'underlined',
      icon: 'fa fa-underline',
      action: toggleMark,
      isActive: hasMark,
    },
    {
      type: 'code',
      icon: 'fa fa-code',
      action: toggleMark,
      isActive: hasMark,
    },
    // {
    //   type: 'heading-one',
    //   icon: 'fa fa-heading',
    //   action: (editor, type) => {
    //     const isActive = hasBlock(editor.value, type);
    //     editor.setBlocks(isActive ? DEFAULT_NODE : type);
    //   },
    //   isActive: hasBlock,
    // },
    // {
    //   type: 'heading-two',
    //   icon: 'fa fa-heading',
    //   action: (editor, type) => {
    //     const isActive = hasBlock(editor.value, type);
    //     editor.setBlocks(isActive ? DEFAULT_NODE : type);
    //   },
    //   isActive: hasBlock,
    // },
    // {
    //   type: 'block-quote',
    //   icon: 'fa fa-quote-right',
    //   action: (editor, { type }) => {
    //     const isActive = hasBlock(editor.value, { type });
    //     editor.setBlocks(isActive ? DEFAULT_NODE : type);
    //   },
    //   isActive: hasBlock,
    // },
    {
      type: 'list-ol',
      icon: 'fa fa-list-ol',
      action: changeList,
      isActive: isActiveList,
    },
    {
      type: 'list-ul',
      icon: 'fa fa-list-ul',
      action: changeList,
      isActive: isActiveList,
    },
    // {
    //   type: 'image',
    //   icon: 'fa fa-image',
    //   action: editor => {
    //     const src = window.prompt('Enter the URL of the image:');
    //     if (!src) return;
    //     editor.command(insertImage, src);
    //   },
    //   isActive: () => true,
    // },
    // {
    //   type: 'link',
    //   icon: 'fa fa-link',
    //   action: toggleLinkify,
    //   isActive: hasLinks,
    // },
    // {
    //   type: 'delete',
    //   icon: 'fa fa-trash',
    //   action: () => {},
    //   isActive: () => true,
    // },
  ];

  return {
    definition: plugins,
    array: [
      // plugins.autoSave,
      // plugins.softBreak,
      // plugins.collapseOnEscape,
      // plugins.pasteHtml,
      // plugins.move,
      // plugins.video,
      // plugins.insertImages,
      // plugins.linkify,

      SideBarPlugin(actions),
    ],
  };
};
