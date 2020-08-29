import React, { Component } from "react";
import styled from "styled-components";
import MobileNavbar from "./MobileNavbar";
import { Link } from "react-browser-router";
//mobile menu handler
import mobileHandler from "../../util/mobileMenuHandler";

//redux
import { connect } from "react-redux";
import {
  loginUser,
  getUserDetails,
  logoutUser,
} from "../../redux/actions/userActions";
import PropTypes from "prop-types";

import { MobileNavbarWrapper } from "./MobileMenuStyle";
import { NavWrapper } from "./NavbarStyle";

export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileMenu: false,
      email: null,
      displayName: "...",
    };
  }

  componentDidMount() {
    if (this.props.authenticated === true) {
      this.props.getUserDetails();
    }
  }

  logUser = () => {
    let userDetails = {
      email: "jmurphy.1196@example.com",
      password: "jmm12355",
    };

    this.props.loginUser(userDetails);
  };
  openMobile = (type = false) => {
    console.log(type);
    if (type === false) {
      this.setState(() => {
        return {
          mobileMenu: true,
        };
      }, mobileHandler);
    } else {
      this.setState(() => {
        return {
          mobileMenu: false,
        };
      });
    }
  };
  componentWillReceiveProps(nextProp) {
    if (nextProp.authenticated !== this.props.authenticated) {
      this.props.getUserDetails();
    }
    if (nextProp.user.credentials.email !== this.state.email) {
      if (nextProp.user.credentials.email !== undefined) {
        let email = nextProp.user.credentials.email;
        if (email.length <= 12) {
          this.setState(() => {
            return {
              email: nextProp.user.credentials.email,
              displayName: nextProp.user.credentials.email,
            };
          });
        } else {
          let displayName = email.slice(0, 9);
          displayName += "...";
          this.setState(() => {
            return {
              email: nextProp.user.credentials.email,
              displayName,
            };
          });
        }
      }
    }
  }

  render() {
    const { authenticated, userId } = this.props;

    return (
      <React.Fragment>
        <NavWrapper>
          <div className="logo">
            <Link style={{ textDecoration: "none", color: "black" }} to="/">
              Trulia
            </Link>
          </div>

          <ul id="left-menu">
            <li>
              <h4 className="main-btn">Buy</h4>
              <div className="nav-content">
                <div className="nav-sub">
                  <ul>
                    <li>
                      <h4>Homes for sale</h4>
                      <hr />
                    </li>
                    <li>
                      <h4>Open Houses</h4>
                      <hr />
                    </li>
                    <li>
                      <h4>New Homes</h4>
                      <hr />
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <h4 className="main-btn">Rent</h4>
              <div className="nav-content-rent">
                <div className="nav-sub rent-sub">
                  <ul>
                    <li>
                      <h4>All Rentals</h4>
                      <hr />
                    </li>
                    <li>
                      <h4>Apartments for Rent</h4>
                      <hr />
                    </li>
                    <li>
                      <h4>Houses for Rent</h4>
                      <hr />
                    </li>
                    <li>
                      <h4>Rooms for Rent</h4>
                      <hr />
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <h4 className="main-btn">Mortgage</h4>
            </li>
          </ul>

          <ul className="right-menu">
            <li>
              <h4 className="main-btn">Saved Homes</h4>
            </li>
            <li>
              <h4 className="main-btn">
                {authenticated ? (
                  <Link
                    to={`/profile/${userId}`}
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    <h4 className="main-btn">Saved Searches</h4>
                  </Link>
                ) : (
                  <Link
                    to="/"
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    <h4 className="main-btn">Saved Searches</h4>
                  </Link>
                )}
              </h4>
            </li>

            {authenticated === false ? (
              <li className="login-btn">
                <h4>
                  {" "}
                  <Link
                    to="/login"
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    Sign up or Log in
                  </Link>
                </h4>
              </li>
            ) : (
              <li className="logged-btn">
                <h4>
                  <i className="fas fa-user"></i> {this.state.displayName}
                </h4>
              </li>
            )}

            <li id="mobile">
              <div
                className="hamburger-icon"
                onClick={() => this.openMobile(false)}
              >
                <i className="fa fa-bars" aria-hidden="true"></i>
              </div>
            </li>
          </ul>
        </NavWrapper>

        {this.state.mobileMenu === true ? (
          <MobileNavbarWrapper>
            <MobileNavbar
              openMobile={() => this.openMobile(true)}
              displayName={this.state.displayName}
            />
          </MobileNavbarWrapper>
        ) : null}
      </React.Fragment>
    );
  }
}

Navbar.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  loginUser: PropTypes.func.isRequired,
  logoutUser: PropTypes.func.isRequired,
  userId: PropTypes.string,
};

const mapActionsToProps = {
  loginUser,
  getUserDetails,
  logoutUser,
};

const mapStateToProps = (state) => ({
  authenticated: state.user.authenticated,
  user: state.user,
  userId: state.user.credentials.userId,
});

export default connect(mapStateToProps, mapActionsToProps)(Navbar);
