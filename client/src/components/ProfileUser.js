import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Spinner, Container, Button } from "react-bootstrap";

import "./ProfileUser.scss";
import "../App.scss";

import UpdateProfile from "./UpdateProfile";

//Redux
import { getProfileUser } from "../redux/actions/user";

class ProfileUser extends Component {
  state = {
    modalShow: false,
  };

  componentDidMount() {
    this.props.getProfileUser();
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
    ) : [role] == "user" ? (
      <Container>
        <div className="main-other-pages">
          <div className="profile-user">
            <p>Welcome {person.name}</p>
            <hr />
            <div className="contact-information-wrapper">
              <figure className="img-profile">
                <img src={person.image} alt="" />
              </figure>
              <div className="contact-information">
                <p className="d-flex">
                  <i class="fas fa-caret-right"></i> <strong>Name : &nbsp;</strong>
                  {person.name}
                </p>
                <p className="d-flex">
                  <i class="fas fa-caret-right"></i>
                  <strong>Email : &nbsp;</strong>
                  {person.email}
                </p>
                <p className="d-flex">
                  <i class="fas fa-caret-right"></i>
                  <strong>Age : &nbsp;</strong> {person.age}
                </p>
                <p className="d-flex">
                  <i class="fas fa-caret-right"></i>
                  <strong>Adresse : &nbsp;</strong> {person.adresse}
                </p>
                <p className="d-flex">
                  <i class="fas fa-caret-right"></i>
                  <strong>Tél : &nbsp;</strong> {person.tel}
                </p>
              </div>
            </div>

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
          </div>
        </div>
      </Container>
    ) : (
      <Redirect to="/home" />
    );
  }
}
const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { getProfileUser })(ProfileUser);
