import React from 'react';
import { Editor } from 'druide-slate-react';
import { Value } from 'slate';
import { Container, Card, CardBody, Button, CardHeader } from 'reactstrap';

import { defaultBehavior } from '../plugins/defaulBehavor';

const voidValue = {
  object: 'value',
  document: {
    object: 'document',
    data: {},
    nodes: [
      {
        object: 'block',
        type: 'paragraph',
        children: [
          {
            text: '',
            marks: [],
          },
        ],
      },
    ],
  },
};

const initialValue = Value.fromJSON(voidValue);

// const {
//   utils: { hasLinks },
//   actions: { toggleLinkify },
// } = linkifyPlugin();

// const DEFAULT_NODE = 'paragraph';

// const isBoldHotkey = isKeyHotkey('mod+b');
// const isItalicHotkey = isKeyHotkey('mod+i');
// const isUnderlinedHotkey = isKeyHotkey('mod+u');
// const isCodeHotkey = isKeyHotkey('mod+`');

// const plugins = [SideBarPlugin(actions), renderPlugin, linkifyPlugin()];

export class RichEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: initialValue,
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange({ value }) {
    this.setState({ value });
  }

  // renderEditor(props, editor, next) {
  //   const children = next();
  //   return (
  //     <Card>
  //       <CardHeader>HOLA</CardHeader>
  //       <CardBody
  //         onClick={() => {
  //           editor.focus();
  //         }}
  //       >
  //         {children}
  //       </CardBody>
  //       <Button
  //         disabled={
  //           JSON.stringify(editor.value.toJS()) === JSON.stringify(voidValue)
  //         }
  //       >
  //         Post
  //       </Button>
  //     </Card>
  //   );
  // }

  render() {
    return (
      <Container>
        <Editor
          placeholder="Escribe aquí"
          value={this.state.value}
          onChange={this.onChange}
          ref={this.ref}
          plugins={defaultBehavior}
        />
      </Container>
    );
  }
}

//slate-react ^0.20.0 estable con  salte 0.45.0
