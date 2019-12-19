export function insertImage(editor, src, target) {
  if (target) {
    editor.select(target);
  }

  editor.insertBlock({
    type: 'image',
    data: { src },
  });
}

export const toggleMark = (editor, { type }) => editor.toggleMark(type);
export const hasMark = ({ value, type }) =>
  value.activeMarks.some(mark => mark.type === type);

export const hasBlock = ({ value, type }) =>
  value.blocks.some(node => node.type === type);

export const isActiveList = ({ value, type }) => {
  let isActive = false;
  if (['list-ol', 'list-ul'].includes(type)) {
    const { blocks, document } = value;

    if (blocks.size > 0) {
      const parent = document.getParent(blocks.first().key);
      isActive =
        hasBlock({ type: 'list-item', value }) &&
        parent &&
        parent.type === type;
    }
  }
  return isActive;
};

export const changeList = (editor, { value, type }) => {
  const { document } = value;
  const DEFAULT_NODE = 'paragraph';
  const isList = hasBlock({ type: 'list-item', value });
  const isType = value.blocks.some(
    block => !!document.getClosest(block.key, parent => parent.type === type),
  );

  if (isList && isType) {
    editor
      .setBlocks(DEFAULT_NODE)
      .unwrapBlock('list-ul')
      .unwrapBlock('list-ol');
  } else if (isList) {
    editor
      .unwrapBlock(type === 'list-ul' ? 'list-ol' : 'list-ul')
      .wrapBlock(type);
  } else {
    editor.setBlocks('list-item').wrapBlock(type);
  }
};
