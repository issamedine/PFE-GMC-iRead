import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Spinner, Container, Button } from "react-bootstrap";

import UpdateProfile from "./UpdateProfile";

import { getProfileAuthor } from "../redux/actions/author";

import "./ProfileAuthor.scss";

class ProfileAuthor extends Component {
  state = {
    modalShow: false,
  };

  componentDidMount() {
    this.props.getProfileAuthor();
    // this.props.getAllContacts(this.props.auth.person._id);
  }
  render() {
    const { isRegister, role, loading, person } = this.props.auth;

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
      <Container>
        <p>welcome {person.name}</p>
        <p>
          <strong>Name :</strong> {person.name}{" "}
        </p>
        <p>
          <strong>Email : </strong>
          {person.email}
        </p>
        <p>
          <strong>Age :</strong> {person.age}
        </p>
        <p>
          <strong>Adresse :</strong> {person.adresse}
        </p>
        <p>
          <strong>Tél :</strong> {person.tel}
        </p>

        {/* START MODAL */}

        <Button
          variant="dark"
          onClick={() => this.setState({ modalShow: true })}
        >
          Update profile
        </Button>

        <UpdateProfile
          show={this.state.modalShow}
          onHide={() => this.setState({ modalShow: false })}
        />

        {/* END MODAL */}
      </Container>
    ) : (
      <Redirect to="/home" />
    );
  }
}
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { getProfileAuthor })(ProfileAuthor);
