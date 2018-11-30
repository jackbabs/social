import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Container, Menu } from 'semantic-ui-react';

class Navbar extends Component {
  state = {};
  handleItemClick = () => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu>
        <Container>
          <Menu.Item header>Conversation Decoded</Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item
              name="lookInside"
              active={activeItem === 'lookInside'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="tableOfContents"
              active={activeItem === 'tableOfContents'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="FAQ"
              active={activeItem === 'FAQ'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="login"
              active={activeItem === 'login'}
              onClick={this.handleItemClick}
            >
              <Button as={Link} to="/conversationdecoded/login" primary>
                Login
              </Button>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    );
  }
}

export default Navbar;
