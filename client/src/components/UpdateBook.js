import React, { Component } from "react";
import { Modal, Button, Form } from "react-bootstrap";

import { connect } from "react-redux";

import { updateBook } from "../redux/actions/author";

class UpdateProfile extends Component {
  constructor(props) {
    // Required step: always call the parent class' constructor
    super(props);

    // Set the state directly. Use props if necessary.
    this.state = {
      title: this.props.book.title,
      date: this.props.book.date,
      description: this.props.book.description,
      kind: this.props.book.kind,
      img: this.props.book.img,
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitFormUpdate = (e) => {
    e.preventDefault();
    this.props.updateBook(this.state, this.props.book.id);
    this.props.onHide();
  };

  render() {
    const { book } = this.props;
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {book.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* START FORM */}
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title"
                name="title"
                defaultValue={book.title}
                onChange={this.handleChange}
              />
              <Form.Text className="text-muted">
                We'll never share your title with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>date</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter date"
                name="date"
                defaultValue={book.date}
                onChange={this.handleChange}
              />
              <Form.Text className="text-muted">
                We'll never share your date with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter description"
                name="description"
                defaultValue={book.description}
                onChange={this.handleChange}
              />
              <Form.Text className="text-muted">
                We'll never share your description with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>kind</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter kind"
                name="kind"
                defaultValue={book.kind}
                onChange={this.handleChange}
              />
              <Form.Text className="text-muted">
                We'll never share your kind with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>img</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter img"
                name="img"
                defaultValue={book.img}
                onChange={this.handleChange}
              />
              <Form.Text className="text-muted">
                We'll never share your img with anyone else.
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
          {/* END FORM */}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => ({
  bookAuthor: state.author.books,
});

export default connect(mapStateToProps, { updateBook })(UpdateProfile);
