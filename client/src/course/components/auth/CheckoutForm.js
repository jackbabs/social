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
    errors: {},
    complete: false
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
  // console.log('[token]', payload)
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
        .then(payload => this.props.checkout(payload))
        .then(this.props.registerUser(newUser, this.props.history))
        .catch(err => console.log(err))
        .then(this.setState({ complete: true }))
    } else {
      console.log("Stripe.js hasn't loaded yet");
    }
  };

  render() {
    const { errors } = this.state;
    if (this.state.complete) return <h1>Purchase Complete</h1>
    return (
      <form noValidate onSubmit={this.handleSubmit} className="checkout">
        <label>Account details</label>
        <input
          className="accountInput"
          name="name"
          type="text"
          placeholder="Name"
          value={this.state.name}
          onChange={this.onChange}
          error={errors.name}
        />
        <input
        className="accountInput"

          name="email"
          type="email"
          placeholder="Email Address"
          value={this.state.email}
          onChange={this.onChange}
          error={errors.email}
        />
        <input
        className="accountInput"
          name="password"
          type="password"
          placeholder="Password"
          value={this.state.password}
          onChange={this.onChange}
          error={errors.password}
        />
        <input
        className="accountInput"
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

CheckoutForm.propTypes = {
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
