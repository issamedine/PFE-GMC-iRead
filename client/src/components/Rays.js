import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";

import { addToBasket } from "../redux/actions/user";

import "../App.scss";
import "./Rays.scss";

class Rays extends Component {
  state = {
    roman: "roman",
    economy: "economy",
    child: "child",
  };

  render() {
    const { books } = this.props.books;
    const { role, person } = this.props.stateAuth;

    const newBooks = books.slice(-3);
    return (
      <Container>
        <div className="main-other-pages">
          <h3>Catégories à l'honneur</h3>
          <div className="row">
            <div className="col-xs-12 col-md-4">
              <Link to={`/books/${this.state.roman}`}>
                <div className="items-category">
                  <i class="fas fa-book-reader"></i>
                  <p>Roman</p>
                </div>
              </Link>
            </div>
            <div className="col-xs-12 col-md-4">
              <Link to={`/books/${this.state.economy}`}>
                <div className="items-category">
                  <i class="fas fa-book-reader"></i>
                  <p>Economy</p>
                </div>
              </Link>
            </div>
            <div className="col-xs-12 col-md-4">
              <Link to={`/books/${this.state.child}`}>
                <div className="items-category">
                  <i class="fas fa-book-reader"></i>
                  <p>Children</p>
                </div>
              </Link>
            </div>
          </div>

          <h3>Les mieux notés</h3>

          <h3>Nouveautés</h3>

          <Row>
            {newBooks.map((book) => (
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

                    {[role] == "user" ? (
                    <>
                      <button type="button" className="style-add-basket">
                        <Link
                          to={"/basket"}
                          onClick={() =>
                            this.props.addToBasket(
                              book._id,
                              book.title,
                              book.qte,
                              person._id,
                              person.email,
                              book.price,
                              book.price
                            )
                          }
                        >
                          Add To Basket
                        </Link>
                      </button>
                    </>
                  ) : null}
                  </div>
                </Col>
              </>
            ))}
          </Row>

          <h3>0 to 30 $ </h3>

          <Row>
            {books.map((book) =>
              book.price < 30 ? (
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

                      {[role] == "user" ? (
                    <>
                      <button type="button" className="style-add-basket">
                        <Link
                          to={"/basket"}
                          onClick={() =>
                            this.props.addToBasket(
                              book._id,
                              book.title,
                              book.qte,
                              person._id,
                              person.email,
                              book.price,
                              book.price
                            )
                          }
                        >
                          Add To Basket
                        </Link>
                      </button>
                    </>
                  ) : null}
                    </div>
                  </Col>
                </>
              ) : null
            )}
          </Row>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  books: state.author,
  stateAuth: state.auth,
});
export default connect(mapStateToProps, { addToBasket })(Rays);
