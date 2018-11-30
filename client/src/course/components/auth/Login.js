import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { Button, Container, Form, Grid, Message } from 'semantic-ui-react';
import { loginUser } from '../../../actions/authActions';

class Login extends Component {
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
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    console.log(userData);
  };

  render() {
    const { errors } = this.state;
    return (
      <div className="login">
        <Container>
          <h1>Log In</h1>
          <p>Sign in to your Conversation Decoded account</p>
          <Grid centered columns={1}>
            <Grid.Column width={6} textAlign="center">
              <Form onSubmit={this.onSubmit}>
                <Form.Input
                  label="Email"
                  name="email"
                  type="email"
                  value={this.state.email}
                  placeholder="Email Address"
                  onChange={this.onChange}
                  error={errors.email}
                />
                {errors.email && <Message error content={errors.email} />}
                <Form.Input
                  label="Password"
                  name="password"
                  type="password"
                  value={this.state.password}
                  placeholder="Password"
                  onChange={this.onChange}
                />
                {errors.password && <Message error content={errors.password} />}
                <Button type="submit">Log in</Button>
              </Form>
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
