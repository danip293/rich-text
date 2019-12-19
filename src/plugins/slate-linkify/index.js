import isUrl from 'is-url';
import { getEventTransfer } from 'slate-react';

function wrapLink(editor, href) {
  editor.wrapInline({
    type: 'link',
    data: { href },
  });

  editor.moveToEnd();
}

function hasLinks({ value }) {
  return value.inlines.some(inline => inline.type === 'link');
}

function unwrapLink(editor) {
  editor.unwrapInline('link');
}

export default function linkify(options = {}) {
  function onPaste(event, editor, next) {
    if (editor.value.selection.isCollapsed) return next();

    const transfer = getEventTransfer(event);
    const { type, text } = transfer;
    if (type !== 'text' && type !== 'html') return next();
    if (!isUrl(text)) return next();

    if (hasLinks({ value: editor.value })) {
      editor.command(unwrapLink);
    }

    editor.command(wrapLink, text);
  }
  function toggleLinkify(editor) {
    const { value } = editor;

    if (hasLinks(value)) {
      editor.command(unwrapLink);
    } else if (value.selection.isExpanded) {
      const href = window.prompt('Enter the URL of the link:');

      if (href == null) {
        return;
      }

      editor.command(wrapLink, href);
    } else {
      const href = window.prompt('Enter the URL of the link:');

      if (href == null) {
        return;
      }

      const text = window.prompt('Enter the text for the link:');

      if (text == null) {
        return;
      }

      editor
        .insertText(text)
        .moveFocusBackward(text.length)
        .command(wrapLink, href);
    }
  }
  return {
    onPaste,
    utils: { hasLinks },
    actions: {
      toggleLinkify,
    },
  };
}
