import React, { Component } from 'react';
import Navbar from './Navbar';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Landing extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <h1>Conversation Decoded landing page</h1>
        <Button as={Link} to="/conversationdecoded/register">
          Order
        </Button>
      </div>
    );
  }
}

export default Landing;
