import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/conversationdecoded/dashboard');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/conversationdecoded/dashboard');
    }
  }
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

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Landing);
