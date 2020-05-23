import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./GetAllBooks.scss";

import { connect } from "react-redux";

import { getAllBooks, incLike } from "../redux/actions/author";
import { addToBasket } from "../redux/actions/user";

class GetAllBooks extends Component {
  state = {
    text: "",
  };

  render() {
    const { isRegister, role, person } = this.props.stateAuth;
    return (
      <div>
        <input
          placeholder="search your book"
          type="text"
          value={this.state.text}
          onChange={(e) => this.setState({ text: e.target.value })}
        />

        <div>
          <Row>
            {this.props.books
              .filter((el) =>
                el.kind.toLowerCase().includes(this.props.kind.toLowerCase())
              )
              .filter((el) =>
                el.title.toLowerCase().includes(this.state.text.toLowerCase())
              )
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
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  books: state.author.books,
  stateAuth: state.auth,
});
export default connect(mapStateToProps, { getAllBooks, addToBasket, incLike })(
  GetAllBooks
);
