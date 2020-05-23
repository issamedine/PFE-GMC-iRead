import React, { Component } from "react";
import { Container } from "react-bootstrap";

import GetAllBook from "./GetAllBooks";

import "../App.scss";

class Books extends Component {
  render() {
    return (
      <Container>
        <div className="main-other-pages">
          <p>Welcom to books..</p>

          <GetAllBook kind={this.props.match.params.kind} />
        </div>
      </Container>
    );
  }
}

export default Books;
