import React, { Component } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { connect } from "react-redux";

import { updateProfileAuthor } from "../redux/actions/auth";

class UpdateProfile extends Component {
  state = {
    id: this.props.auth.person._id,
    name: this.props.auth.person.name,
    email: this.props.auth.person.email,
    age: this.props.auth.person.age,
    adresse: this.props.auth.person.adresse,
    tel: this.props.auth.person.tel,
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitFormUpdate = (e) => {
    e.preventDefault();
    console.log("this.state", this.state);
    this.props.updateProfileAuthor(this.state);
    this.props.onHide();
  };

  render() {
    const { person } = this.props.auth;
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                name="name"
                defaultValue={person.name}
                onChange={this.handleChange}
              />
              <Form.Text className="text-muted">
                We'll never share your name with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                defaultValue={person.email}
                onChange={this.handleChange}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter age"
                name="age"
                defaultValue={person.age}
                onChange={this.handleChange}
              />
              <Form.Text className="text-muted">
                We'll never share your age with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter address"
                name="adresse"
                defaultValue={person.adresse}
                onChange={this.handleChange}
              />
              <Form.Text className="text-muted">
                We'll never share your address with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Tel</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter tel"
                name="tel"
                onChange={this.handleChange}
                defaultValue={person.tel}
              />
              <Form.Text className="text-muted">
                We'll never share your tel with anyone else.
              </Form.Text>
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              onClick={this.submitFormUpdate}
            >
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { updateProfileAuthor })(UpdateProfile);
