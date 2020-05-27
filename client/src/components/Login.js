import React, { Component } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import AOS from "aos";

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

  componentDidMount() {
    AOS.init({ duration: 2000 });
  }

  render() {
    const { isRegister, message } = this.props.isAuth;
    return isRegister ? (
      <Redirect to="/" />
    ) : (
      <Container>
        <div className="main-other-pages">
          <div className="main-login">
            {message ? (
              <div class="alert alert-danger text-center" role="alert">
                {message}
              </div>
            ) : null}
            <Form className="my-5 text-center login-wrapper" data-aos="fade-up">
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
                  className="style-btn-login"
                  variant="dark"
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    this.props.loginUser(this.state);
                  }}
                >
                  Login
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth,
});

export default connect(mapStateToProps, { loginUser })(Login);
