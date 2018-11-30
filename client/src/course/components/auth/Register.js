import React, { Component } from 'react';
import { Elements, StripeProvider } from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';

class Register extends Component {
  render() {
    return (
      <StripeProvider apiKey="pk_test_hs1W1Y4hC4IT9r9aBaCTBNRO">
        <div className="register-page">
          <h1>Checkout form</h1>
          <Elements>
            <CheckoutForm />
          </Elements>
        </div>
      </StripeProvider>
    );
  }
}

export default Register;
