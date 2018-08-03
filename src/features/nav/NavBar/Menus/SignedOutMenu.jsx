import React from 'react';
import { Menu, Button } from 'semantic-ui-react';

const SignedOutMenu = ({ signOut, signIn }) => {
  return (
    <Menu.Item position="right">
      <Button basic inverted content="Login" onClick={signIn} />
      <Button
        basic
        inverted
        onClick={signOut}
        content="Sign Out"
        style={{ marginLeft: '0.5em' }}
      />
    </Menu.Item>
  );
};

export default SignedOutMenu;
