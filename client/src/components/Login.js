import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import "./Login.scss";

import { loginUser } from "../redux/actions/auth";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { loginUser, isAuth } = this.props;
    return isAuth ? (
      <Redirect to="/" />
    ) : (
      <div>
        <Form className="my-5 text-center login-wrapper">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              onChange={this.handleChange}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              onChange={this.handleChange}
            />
          </Form.Group>
          <div className="text-center">
            <Button
              variant="dark"
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                loginUser(this.state);
              }}
            >
              identify
            </Button>
          </div>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isRegister,
});

export default connect(mapStateToProps, { loginUser })(Login);
