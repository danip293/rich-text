import React from 'react';
import { Container } from 'reactstrap';
import { RichEditor } from '../components/RichEditor.jsx';

// Components
import { NavbarComponent } from '../components/NavBar.jsx';

export const MainComponent = props => (
  <div>
    <NavbarComponent />
    <Container className="p-5">
      <RichEditor />
    </Container>
  </div>
);
