import React, { Component } from "react";
import { Container, Button } from "react-bootstrap";
import { Animated } from "react-animated-css";

import { connect } from "react-redux";

import "./Basket.scss";

import {
  increment,
  decrement,
  getBasket,
  deleteBasket,
  deleteAndSendBasket,
} from "../redux/actions/user";

class Basket extends Component {
  state = {
    // idUser: this.props.stateAuth && this.props.stateAuth._id,
  };

  componentDidMount() {
    if (this.props.stateAuth) {
      console.log("this.props.stateAuth", this.props.stateAuth);
      this.props.getBasket(this.props.stateAuth._id);
    }
  }

  componentDidUpdate(prevProps) {
    const prevId = prevProps.stateAuth && prevProps.stateAuth._id;
    const id = this.props.stateAuth && this.props.stateAuth._id;
    console.log("prevId", prevId);
    console.log("id", id);
    if (!id) {
      //TODO: add reset basket action
    } else if (prevId != id)
      // this.setState({ idUser: this.props.stateAuth._id });
      this.props.getBasket(id);

    // !this.state.idUser
    //   ? console.log("loading")
    //   : this.props.getBasket(this.state.idUser);
    // if (this.state.idUser && prevState.idUser != this.state.idUser)
    //   this.props.getBasket(this.state.idUser);
    // console.log("object didUpdate");
  }

  render() {
    const { basket } = this.props.user;

    const somme =
      basket && basket.length
        ? basket.reduce((acc, book) => acc + book.total, 0)
        : 0;

    //  const somme =  basket && basket.length
    //     ? basket.reduce((acc, book) => {
    //         if (book.idUser == this.props.stateAuth._id) {
    //           acc + book.total;
    //         }
    //       }, 0)
    //     : 0;

    return (
      <Container>
        <div className="main-other-pages">
          <div className="basket-height pb-2">
            {basket &&
              basket
                // .filter((el) => el.idUser == this.props.stateAuth._id)
                .map((el) => (
                  <div className="border p-4 m-3">
                    <div>title: {el.titleBook}</div>
                    price: {el.priceBook} $
                    <div>
                      quantity:
                      <Button
                        variant="dark"
                        onClick={() => this.props.increment(el._id)}
                      >
                        +
                      </Button>
                      {el.qte}
                      <Button
                        variant="dark"
                        onClick={() => this.props.decrement(el._id)}
                      >
                        -
                      </Button>
                    </div>
                    <div>sum: {el.total} $</div>
                    <Button
                      variant="dark"
                      onClick={() => this.props.deleteBasket(el._id)}
                    >
                      delete
                    </Button>
                  </div>
                ))}
            {basket.length ? (
              <>
                <p>total: {somme} $</p>
                <Button
                  onClick={() =>
                    this.props.deleteAndSendBasket(this.props.stateAuth._id)
                  }
                >
                  Order
                </Button>
              </>
            ) : (
              <div className="test-animation">Helloooo tt le monde</div>
            )}
          </div>
        </div>
        <Animated
          animationIn="bounceInLeft"
          animationOut="fadeOut"
          isVisible={true}
        >
          <div>hello world ;)</div>
        </Animated>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  stateAuth: state.auth.person,
});

export default connect(mapStateToProps, {
  getBasket,
  deleteBasket,
  deleteAndSendBasket,
  increment,
  decrement,
})(Basket);
