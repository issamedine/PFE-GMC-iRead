import React from "react";
import { Form, InputGroup, Button, Col } from "react-bootstrap";

import outer from "./imgs/outer-image.png";

import "./Contact.scss";

function Contact() {
  return (
    <Form className="form-contact">
      <img src={outer} alt="" />
      <div className="wrapper-form-contact">
        <div className="container">
          <div className="item-form-contact col-md-5 shadow bg-white border border-info p-2">
            <Form.Group as={Col} md="12" controlId="validationCustom01">
              <Form.Label>Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter your Name"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="12" controlId="validationCustom01">
              <Form.Label>message</Form.Label>
              <Form.Control
                as="textarea"
                rows="3"
                required
                placeholder="enter your message"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="12" controlId="validationCustom01">
              <Button type="submit" variant="dark">
                Submit
              </Button>
            </Form.Group>
          </div>
        </div>
      </div>
    </Form>
  );
}

export default Contact;
