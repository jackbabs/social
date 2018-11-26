import React, { Component } from 'react';
import { Button, Icon, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

class TopbarControl extends Component {
  state = {
    show: true
  };

  handleCloseTopbarClick = e => {
    e.preventDefault();
    this.setState({ show: false });
  };

  render() {
    const { show } = this.state;
    return (
      <div>
        <CSSTransition
          in={show}
          timeout={1000}
          classNames="fade"
          exit
          unmountOnExit
        >
          <Link to="/conversationdecoded">
            <Segment className="topbar-container" inverted color="blue">
              <h4 className="topbar-text">
                How to become an{' '}
                <span className="topbar-text-highlight">
                  Advanced Conversationalist:
                </span>
              </h4>
              <Button
                icon
                labelPosition="right"
                inverted
                size="large"
                color="grey"
              >
                <Icon name="eye" />
                <span>Take a peek</span>
              </Button>

              <Button
                onClick={this.handleCloseTopbarClick}
                circular
                inverted
                icon="x icon"
                className="topbar-close"
                color="grey"
              />
            </Segment>
          </Link>
        </CSSTransition>
      </div>
    );
  }
}

export default TopbarControl;
