import React from 'react';
import { Nav, NavItem, NavLink, Card, CardHeader, CardBody } from 'reactstrap';

const Button = ({ icon, active, ...props }) => (
  <span
    {...props}
    style={{ cursor: 'pointer', color: active ? 'black' : '#ccc' }}
  >
    <i className={icon} />
  </span>
);

const ToolbarButton = ({ type, icon, isActive, action, editor }) => (
  <Button
    icon={icon}
    active={isActive({ value: editor.value, type })}
    onMouseDown={event => {
      event.preventDefault();
      editor.command(action, { type, value: editor.value });
    }}
  />
);

export const SideBarPlugin = actions => ({
  renderEditor: (props, editor, next) => {
    const children = next();
    return (
      <Card>
        <CardHeader>
          <Nav>
            {actions.map(action => (
              <NavItem key={`slate-side-bar-menu-element-${action.type}`}>
                <NavLink>
                  <ToolbarButton editor={editor} {...action} />
                </NavLink>
              </NavItem>
            ))}
          </Nav>
        </CardHeader>
        <CardBody>{children}</CardBody>
      </Card>
    );
  },
});
