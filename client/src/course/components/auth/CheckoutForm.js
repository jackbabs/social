import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { checkout, registerUser } from '../../../actions/authActions';

import { CardElement, injectStripe } from 'react-stripe-elements';

class CheckoutForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    password2: '',
    errors: {}
  };

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

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // TODO: Add register user form sections and name + email state etc
  handleSubmit = e => {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    if (this.props.stripe) {
      this.props.stripe
        .createToken()
        .then(payload => console.log('[token]', payload))
        .then(this.props.checkout(payload))
        .then(this.props.registerUser(newUser, this.props.history));
    } else {
      console.log("Stripe.js hasn't loaded yet");
    }
  };

  render() {
    const { errors } = this.state;
    return (
      <form noValidate onSubmit={this.handleSubmit} className="checkout">
        <label>Account details</label>
        <input
          name="name"
          type="text"
          placeholder="Name"
          value={this.state.name}
          onChange={this.onChange}
          error={errors.name}
        />
        <input
          name="email"
          type="email"
          placeholder="Email Address"
          value={this.state.email}
          onChange={this.onChange}
          error={errors.email}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={this.state.password}
          onChange={this.onChange}
          error={errors.password}
        />
        <input
          name="password2"
          type="password"
          placeholder="Confirm password"
          value={this.state.password2}
          onChange={this.onChange}
          error={errors.password2}
        />
        <label>Payment Information</label>
        <CardElement />
        <button>Send</button>
      </form>
    );
  }
}

CheckoutForm.PropTypes = {
  checkout: PropTypes.func.isRequired,
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { checkout, registerUser }
)(injectStripe(CheckoutForm));
