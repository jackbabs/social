import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { checkout, registerUser } from '../../../actions/authActions';
import classNames from 'classnames';

import { CardElement, injectStripe } from 'react-stripe-elements';

class CheckoutForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    password2: '',
    errors: {}
  };

  componentWillReceiveProps(nextProps) {
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
        .then(data => data.token.id)
        .then(tokenId =>
          this.props.checkout(tokenId, newUser, this.props.history)
        )
        .catch(err => console.log(err));
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
          className="accountInput"
          name="name"
          type="text"
          placeholder="Name"
          value={this.state.name}
          onChange={this.onChange}
          error={errors.name}
        />
        {errors.name && <p className="error-message">{errors.name}</p>}
        <input
          className="accountInput"
          name="email"
          type="email"
          placeholder="Email Address"
          value={this.state.email}
          onChange={this.onChange}
          error={errors.email}
        />
        {errors.email && <p className="error-message">{errors.email}</p>}
        <input
          className="accountInput"
          name="password"
          type="password"
          placeholder="Password"
          value={this.state.password}
          onChange={this.onChange}
          error={errors.password}
        />
        {errors.password && <p className="error-message">{errors.password}</p>}
        <input
          className="accountInput"
          name="password2"
          type="password"
          placeholder="Confirm password"
          value={this.state.password2}
          onChange={this.onChange}
          error={errors.password2}
        />
        {errors.password2 && (
          <p className="error-message">{errors.password2}</p>
        )}

        <label>Payment Information</label>
        <CardElement />

        <button>Submit</button>
      </form>
    );
  }
}

CheckoutForm.propTypes = {
  checkout: PropTypes.func.isRequired,
  registerUser: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors
});

export default compose(
  connect(
    mapStateToProps,
    { checkout, registerUser }
  ),
  injectStripe
)(CheckoutForm);
