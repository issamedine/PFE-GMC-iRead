import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { signup } from "../redux/actions/auth.js";
import AOS from "aos";

import "./Signup.scss";

class Signup extends Component {
  state = {
    name: "",
    age: "",
    adresse: "",
    email: "",
    tel: "",
    image: "",
    password: "",
    role: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidMount() {
    AOS.init({ duration: 2000 });
  }

  render() {
    const { isRegister, message } = this.props.isAuth;
    if (isRegister) return <Redirect to="/" />;
    return (
      <Container>
        <div className="main-other-pages">
          <div className="desc-signup d-flex flex-column justify-content-md-center align-items-center">
            <h3>FIRST VISIT?</h3>
            <p className="text-center mb-2">
              Welcome to iRead! <br />
              <br />
              To make the most of our site and have the richest reading
              experience possible, create an account.
              <br />
              You can follow your favorite authors, add books to your library
              and find out about all the news.
            </p>
          </div>
          {message ? (
            <div class="alert alert-danger text-center" role="alert">
              {message}
            </div>
          ) : null}
          <Form className="my-4 signup-wrapper" data-aos="fade-up">
            <Row className="d-flex align-items-center">
              <Col md={4}>
                <Form.Group controlId="formGroupName">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter name"
                    name="name"
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="formGroupName">
                  <Form.Label>Age</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter age"
                    name="age"
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="formGroupName">
                  <Form.Label>Adresse</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter adresse"
                    name="adresse"
                    onChange={this.handleChange}
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group controlId="formGroupEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="formGroupName">
                  <Form.Label>Tel</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter tel"
                    name="tel"
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="formGroupName">
                  <Form.Label>Image</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter image"
                    name="image"
                    onChange={this.handleChange}
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                {["author", "user"].map((type) => (
                  <div>
                    <Form.Check
                      type="radio"
                      value={type}
                      label={type}
                      name="role"
                      onChange={this.handleChange}
                    />
                  </div>
                ))}
                <Form.Group controlId="formGroupPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={this.handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <div className="text-center">
              <Button
                className="style-btn-create-account"
                variant="dark"
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  this.props.signup(this.state);
                }}
              >
                Create your account iRead
              </Button>
            </div>
          </Form>
        </div>
      </Container>
    );
  }
}
const mapStateToProps = (state) => ({
  isAuth: state.auth,
});

export default connect(mapStateToProps, { signup })(Signup);
