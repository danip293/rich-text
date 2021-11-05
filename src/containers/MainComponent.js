import React from 'react';
import { Container } from 'reactstrap';
import { RichEditor } from '../components/RichEditor.jsx';

export const MainComponent = props => (
  <div>
    <Container className="p-5">
      <RichEditor />
    </Container>
  </div>
);
