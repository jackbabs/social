import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { checkout } from '../../../actions/authActions';

import { CardElement, injectStripe } from 'react-stripe-elements';

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    if (this.props.stripe) {
      this.props.stripe
        .createToken()
        .then(payload => console.log('[token]', payload))
        .then(this.props.checkout(payload));
    } else {
      console.log("Stripe.js hasn't loaded yet");
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="checkout">
        <label>Card details</label>
        <CardElement />
        <button>Send</button>
      </form>
    );
  }
}

CheckoutForm.PropTypes = {
  checkout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { checkout }
)(injectStripe(CheckoutForm));
