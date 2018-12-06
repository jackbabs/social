import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

class Dashboard extends Component {
  render() {
    return (
      <div>
        Access your course by clicking the links below. Welcome to the new age
        of social skills. Welcome to Conversation Decoded. One does not simply
        acquire the ability to talk well. One must learn the way of the warrior.
        <Button>Download as pdf</Button>
        <Button>Begin interactive course</Button>
      </div>
    );
  }
}

export default Dashboard;
