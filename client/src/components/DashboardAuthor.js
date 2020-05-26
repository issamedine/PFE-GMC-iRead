import React, { Component } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
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
        
          <div className="main-other-pages">
          <Row className="mb-4">
              <Button
               className="style-add-basket"
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
            <div>Hello {person.name} :)</div>

            <Row>
              {textSuccess}
              {textFail}
            </Row>

            <Row>
              {this.props.books
                .filter((book) => book.authorAddedBook == person._id)
                .map((book) => (
                  <>
                    <Col md={6} className="my-3">
                      <div className="item-book shadow rounded">
                        <div className="d-flex">
                          <figure>
                            <img src={book.img} alt="" className="w-100" />
                          </figure>
                          <div className="pl-3">
                            <p>{book.title}</p>
                            <p>{book.date}</p>
                            <p>{book.description}</p>
                            <p>{book.kind}</p>
                            <p>{book.price} $</p>
                          </div>
                        </div>

                        <Button
                        className="style-add-basket"
                          variant="dark"
                          onClick={() => this.props.deleteBook(book._id)}
                        >
                          Delete
                        </Button>

                        <Button
                        className="style-add-basket"
                          variant="dark"
                          onClick={() => this.updateBook(book)}
                        >
                          Update
                        </Button>
                      </div>
                    </Col>
                  </>
                ))}
            </Row>
          
          </div>
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
