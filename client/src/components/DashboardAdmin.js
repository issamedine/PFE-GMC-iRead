import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Spinner } from "react-bootstrap";

import "./DashboardAdmin.scss";

//Redux
import { getAdmin } from "../redux/actions/admin";

class DashboardAdmin extends Component {
  componentDidMount() {
    this.props.getAdmin();
  }

  render() {
    const { isRegister, role, loading } = this.props.auth;

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
    ) : [role] == "admin" ? (
      <div>welcome to admin</div>
    ) : (
      <Redirect to="/home" />
    );
  }
}
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { getAdmin })(DashboardAdmin);
