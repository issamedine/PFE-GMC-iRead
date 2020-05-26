import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./NavbarMenu.scss";
import { logoutUser } from "../redux/actions/auth";

import slide1 from "./imgs/slide1.jpg";

class NavbarMenu extends Component {

  state = {
    scrolled: false
  }

  componentDidMount(){
    window.addEventListener("scroll", ()=>{
      const isTop = window.scrollY > 100
      console.log('window.scrollY', window.scrollY)
      if (!isTop){
        this.setState({scrolled: false})
      }else {
        this.setState({scrolled: true})
      }
    })
  }
  
  render() {
    return (
      <Navbar
        data-aos="fade-down"
        expand="lg"
        className={this.state.scrolled ? "position-fixed mt-0 Navbar bg-isTop" : "position-fixed mt-0 Navbar"}
      >
        <Navbar.Brand href="#home" className="mr-5">
          iRead
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="">
            {this.props.role == "admin" && this.props.isAuth.isRegister ? (
              <>
                <div className="mr-3 link-nav">
                  <Link to="/" className=" text-light">
                    Home
                  </Link>
                </div>
                <div className="mr-3 link-nav">
                  <Link to="/dashboard-admin" className=" text-light">
                    Dashboard Admin
                  </Link>
                </div>
                <div className="mr-3 link-nav">
                  <Link to="/the-rays" className="text-light">
                    The rays
                  </Link>
                </div>
                <div className="mr-3 link-nav">
                  <Link to="/Contact" className=" text-light">
                    Contact
                  </Link>
                </div>
              </>
            ) : this.props.role == "author" && this.props.isAuth.isRegister ? (
              <>
                <div className="mr-3 link-nav">
                  <Link to="/" className=" text-light">
                    Home
                  </Link>
                </div>
                <div className="mr-3 link-nav">
                  <Link to="/dashboard-author" className=" text-light">
                    Dashboard Author
                  </Link>
                </div>
                <div className="mr-3 link-nav">
                  <Link to="/profile-author" className=" text-light">
                    Profile author
                  </Link>
                </div>
                <div className="mr-3 link-nav">
                  <Link to="/the-rays" className=" text-light">
                    The rays
                  </Link>
                </div>
                <div className="mr-3 link-nav">
                  <Link to="/Contact" className=" text-light">
                    Contact
                  </Link>
                </div>
              </>
            ) : this.props.role == "user" && this.props.isAuth.isRegister ? (
              <>
                <div className="mr-3 d-flex align-items-center link-nav">
                  <Link to="/" className="text-light">
                    Home
                  </Link>
                </div>
                <div className="mr-3 d-flex align-items-center link-nav">
                  <Link to="/profile-user" activeClassName="nav-active" className="text-light">
                    Profile user
                  </Link>
                </div>
                <div className="mr-3 d-flex align-items-center link-nav">
                  <Link to="/the-rays" activeClassName="nav-active" className="text-light">
                    The rays
                  </Link>
                </div>
                <div className="mr-3 d-flex align-items-center link-nav">
                  <Link to="/basket" activeClassName="nav-active" className="text-light">
                    Bsket
                  </Link>
                </div>
                <div className="mr-3 d-flex align-items-center link-nav">
                  <Link to="/chat-page" activeClassName="nav-active" className="text-light">
                    Chat page
                  </Link>
                </div>
                <div className="mr-3 d-flex align-items-center link-nav">
                  <Link to="/Contact" activeClassName="nav-active" className="text-light">
                    Contact
                  </Link>
                </div>
                <div className="img-person link-nav">
                  <Link>
                    <img src={this.props.isAuth.person.image} alt="" />
                    {/* <img src={slide1} alt=""/> */}
                  </Link>
                </div>
              </>
            ) : (
              <>
                <div className="mr-3 link-nav">
                  <Link to="/" className=" text-light">
                    Home
                  </Link>
                </div>
                <div className="mr-3 link-nav">
                  <Link to="/the-rays" className=" text-light">
                    The rays
                  </Link>
                </div>
                <div className="mr-3 link-nav">
                  <Link to="/Contact" className=" text-light">
                    Contact
                  </Link>
                </div>
              </>
            )}
          </Nav>
          <Nav>
            {this.props.isAuth.isRegister ? (
              <div className="mr-3 link-nav">
                <Link
                  to="/"
                  onClick={this.props.logoutUser}
                  className=" text-light"
                >
                  Logout
                </Link>
              </div>
            ) : (
              <>
                <div className="mr-3 link-nav">
                  <Link to="/signup" className=" text-light">
                    Sign up
                  </Link>
                </div>
                <div className="mr-3 link-nav">
                  <Link to="/login" className=" text-light">
                    Login
                  </Link>
                </div>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
const mapStateToProps = (state) => ({
  isAuth: state.auth,
  role: state.auth.role,
});

export default connect(mapStateToProps, { logoutUser })(NavbarMenu);
