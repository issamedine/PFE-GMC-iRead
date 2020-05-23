import React, { Component } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Spinner } from "react-bootstrap";

import ModalAddBook from "./ModalAddBook";
// import UpdateBook from "./UpdateBook";
import "./DashboardAuthor.scss";

//Redux
import { getAdminAuthor, deleteBook } from "../redux/actions/author";

class DashboardAuthor extends Component {
  state = {
    modalShow: false,
    book: null,
  };

  componentDidMount() {
    this.props.getAdminAuthor();
  }

  updateBook = (el) => {
    this.setState({
      book: {
        id: el._id,
        title: el.title,
        img: el.img,
        date: el.date,
        description: el.description,
        kind: el.kind,
      },
      modalShow: true,
    });
  };

  //update book en cours

  render() {
    const { isRegister, role, person } = this.props.stateAuth;
    const { textSuccess, textFail, loading } = this.props.stateAuthor;

    if (loading) {
      return (
        <div className="wrapper-spinner">
          <Spinner animation="border" role="status" className="spinner">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </div>
      );
    }

    return !isRegister ? (
      <Redirect to="/login" />
    ) : [role] == "author" ? (
      <>
        <Container>
          <div>Hello {person.name} :)</div>

          <Row>
            {textSuccess}
            {textFail}
          </Row>

          {this.props.books
            .filter((el) => el.authorAddedBook == person._id)
            .map((el) => (
              <div className="bookDash" key={el.id}>
                <p>
                  <strong>title:</strong> {el.title}
                </p>
                <p>
                  <img src={el.img} alt="" />
                </p>
                <p>
                  <strong>date book:</strong> {el.date}
                </p>
                <p>
                  <strong>description:</strong> {el.description}
                </p>
                <p>
                  <strong>kind:</strong> {el.kind}
                </p>
                <p>
                  <strong>price:</strong> {el.price} $
                </p>
                <p>
                  <strong>publish:</strong> {el.publish}
                </p>

                <Button
                  variant="dark"
                  onClick={() => this.props.deleteBook(el._id)}
                >
                  Delete
                </Button>

                <Button variant="dark" onClick={() => this.updateBook(el)}>
                  Update
                </Button>
              </div>
            ))}
          <Row className="my-4">
            <Button
              variant="dark"
              onClick={() => this.setState({ modalShow: true })}
            >
              Add book
            </Button>
          </Row>

          <ModalAddBook
            book={this.state.book}
            show={this.state.modalShow}
            onHide={() => this.setState({ modalShow: false, book: null })}
          />
        </Container>
      </>
    ) : (
      <Redirect to="/home" />
    );
  }
}

const mapStateToProps = (state) => ({
  stateAuth: state.auth,
  stateAuthor: state.author,
  books: state.author.books,
});
export default connect(mapStateToProps, { getAdminAuthor, deleteBook })(
  DashboardAuthor
);
