import React, { Component } from 'react';
import { Menu, Container, Button } from 'semantic-ui-react';
import { NavLink, Link } from 'react-router-dom';
import SignedInMenu from './Menus/SignedInMenu';
import SignedOutMenu from './Menus/SignedOutMenu';
import { withRouter } from 'react-router-dom';

class NavBar extends Component {
  state = {
    authenticated: false
  };
  handleSignIn = () => {
    this.setState({ authenticated: true });
  };

  handleSignOut = () => {
    this.setState({ authenticated: false });
    this.props.history.push('/');
  };
  //issue with relative url
  //  /assets/image <- relative to root http://www.abc.com/assets/i,ages
  //  assets/image <-relative to current directory  http://www.abc.com/test/assets/images
  render() {
    const { authenticated } = this.state;
    return (
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item as={NavLink} exact to="/" header>
            <img src="/assets/logo.png" alt="logo" />
            Re-vents
          </Menu.Item>
          <Menu.Item as={NavLink} to="/events" name="Events" />
          {authenticated && (
            <Menu.Item as={NavLink} to="/people" name="People" />
          )}

          {authenticated && (
            <Menu.Item>
              <Button
                as={Link}
                to="/createEvent"
                floated="right"
                positive
                inverted
                content="Create Event"
              />
            </Menu.Item>
          )}

          {authenticated ? (
            <SignedInMenu signOut={this.handleSignOut} />
          ) : (
            <SignedOutMenu
              signIn={this.handleSignIn}
              signOut={this.handleSignOut}
            />
          )}
        </Container>
      </Menu>
    );
  }
}

export default withRouter(NavBar);
