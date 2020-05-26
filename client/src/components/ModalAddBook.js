import React, { Component } from "react";
import { Button, Modal, Form } from "react-bootstrap";

import { addBookAuthor, updateBook } from "../redux/actions/author";

import { connect } from "react-redux";

class ModalAddBook extends Component {
  isEditMode = !!(this.props.book && this.props.book.id);
  initialBookState = {
    title: "",
    date: "",
    description: "",
    kind: "",
    img: "",
    price: null,
    qte: 1,
    like: 0,
    id: null,
  };
  state = {
    ...this.initialBookState,
    isEditMode: this.isEditMode,
  };

  componentDidUpdate() {
    const id = this.props.book && this.props.book.id; // null
    const stateId = this.state.id; // undefined
    if ((id || stateId) && id !== stateId) {
      const newState = id
        ? { ...this.props.book } // s'il existe id (true)
        : { ...this.initialBookState }; // s'il n'existe pas id (false)
      this.setState({ ...newState, isEditMode: !!id });
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitForm = (e) => {
    e.preventDefault();
    if (this.state.isEditMode) {
      this.props.updateBook(this.state, this.props.book.id);
    } else {
      this.props.addBookAuthor(this.state);
    }
    this.props.onHide();
  };

  render() {
    // const { addBookAuthor } = this.props;
    // console.log("this.props", this.props);
    // console.log("this.isEditMode", this.isEditMode);

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
              <Form.Label>Title</Form.Label>
              <Form.Control
                name="title"
                type="text"
                placeholder="Enter title"
                onChange={this.handleChange}
                value={this.state.title}
              />
              <Form.Text className="text-muted">
                We'll never share your title with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Date</Form.Label>
              <Form.Control
                name="date"
                type="text"
                placeholder="Enter date"
                onChange={this.handleChange}
                value={this.state.date}
              />
              <Form.Text className="text-muted">
                We'll never share your date with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Description</Form.Label>
              <Form.Control
                name="description"
                type="text"
                placeholder="Enter description"
                onChange={this.handleChange}
                value={this.state.description}
              />
              <Form.Text className="text-muted">
                We'll never share your description with anyone else.
              </Form.Text>
            </Form.Group>
            {/* <Form.Group controlId="formBasicEmail">
              <Form.Label>Kind</Form.Label>
              <Form.Control
                name="kind"
                type="text"
                placeholder="Enter kind"
                onChange={this.handleChange}
                value={this.state.kind}
              />
              <Form.Text className="text-muted">
                We'll never share your kind with anyone else.
              </Form.Text>
            </Form.Group> */}

            <Form.Group  controlId="formGridState">
              <Form.Label>Kind</Form.Label>
              <Form.Control
                name="kind"
                as="select"
                onChange={this.handleChange}
                value={this.state.kind}
              >
                <option>roman</option>
                <option>economy</option>
                <option>child</option>
              </Form.Control>
            </Form.Group>



            <Form.Group controlId="formBasicEmail">
              <Form.Label>Price</Form.Label>
              <Form.Control
                name="price"
                type="number"
                placeholder="Enter a link image"
                onChange={this.handleChange}
                value={this.state.price}
              />
              <Form.Text className="text-muted">
                We'll never share your quantity with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Image</Form.Label>
              <Form.Control
                name="img"
                type="text"
                placeholder="Enter a link image"
                onChange={this.handleChange}
                value={this.state.img}
              />
              <Form.Text className="text-muted">
                We'll never share your image with anyone else.
              </Form.Text>
            </Form.Group>

            <Button variant="dark" type="submit" onClick={this.submitForm}>
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

export default connect(null, { addBookAuthor, updateBook })(ModalAddBook);

// onClick={() => {
//   addBookAuthor(this.state);
//   this.props.onHide();
// }}
