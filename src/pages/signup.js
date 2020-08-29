import React, { Component } from "react";
import styled from "styled-components";

//redux
import { connect } from "react-redux";
import { signupUser } from "../redux/actions/userActions";

export class signup extends Component {
  componentDidMount() {
    let emailField = document.getElementById("email");
    let emailLabel = document.getElementById("email-label");
    let passwordField = document.getElementById("password");
    let passwordLabel = document.getElementById("password-label");
    let confirmPasswordField = document.getElementById("confirmPassword");
    let confirmPasswordLabel = document.getElementById("confirmPassword-label");

    emailField.addEventListener("focus", () => {
      emailLabel.style.transform = "translateY(-1.8rem)";
    });
    emailField.addEventListener("focusout", () => {
      if (emailField.value.length === 0) {
        emailLabel.style.transform = "translateY(0)";
      }
    });
    passwordField.addEventListener("focus", () => {
      passwordLabel.style.transform = "translateY(-1.8rem)";
    });
    passwordField.addEventListener("focusout", () => {
      if (passwordField.value.length === 0) {
        passwordLabel.style.transform = "translateY(0)";
      }
    });
    confirmPasswordField.addEventListener("focus", () => {
      confirmPasswordLabel.style.transform = "translateY(-1.8rem)";
    });
    confirmPasswordField.addEventListener("focusout", () => {
      if (confirmPasswordField.value.length === 0) {
        confirmPasswordLabel.style.transform = "translateY(0)";
      }
    });
  }
  handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState(
      () => {
        return {
          [name]: value,
        };
      },
      () => console.log(this.state)
    );
  };
  handleSignup = () => {
    const userData = {
      ...this.state,
    };
    this.props.signupUser(userData, this.props.history);
  };
  render() {
    return (
      <SignupWrapper>
        <div className="header">
          <h1>Trulia</h1>
          <span>Sign up</span>
        </div>
        <div className="signup-form">
          <label id="email-label" for="email">
            Email
          </label>
          <input
            onChange={this.handleChange}
            name="email"
            id="email"
            type="email"
          />
          <label id="password-label" for="password">
            Password
          </label>
          <input
            onChange={this.handleChange}
            id="password"
            name="password"
            type="password"
          />
          <label id="confirmPassword-label" for="confirmPassword">
            Confirm password
          </label>
          <input
            onChange={this.handleChange}
            id="confirmPassword"
            name="confirmPassword"
            type="password"
          />
        </div>
        <button onClick={this.handleSignup} id="signup-btn">
          Sign Up
        </button>
      </SignupWrapper>
    );
  }
}

const SignupWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  align-items: center;

  flex-direction: column;
  div {
    padding: 1rem;
  }
  .header {
    position: relative;
    top: 10rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      font-size: 3.5rem;
      font-family: "Noto Sans";
    }
    span {
      padding-top: 1rem;
      font-family: "Noto Sans";
      font-size: 2rem;
    }
  }
  .signup-form {
    position: relative;
    top: 9rem;
    display: flex;
    flex-direction: column;
    input {
      border: none;
      border-bottom: solid black 1px;
      height: 2.5rem;
      width: 20rem;
      margin-top: 2rem;
      font-size: 1.3rem;
    }
    input:focus {
      outline: none;
    }
    label {
      position: relative;
      top: 4rem;
      transition: 0.3s ease;
    }
  }
  #signup-btn {
    position: relative;
    top: 11rem;
    width: 10rem;
    font-size: 1.4rem;
    font-family: "Noto Sans";
    background-color: #008080;
    border: none;
    color: white;
    padding: 0.5rem;
    &:hover {
      cursor: pointer;
    }
  }
`;

const mapStateToProps = (state) => ({
  errors: state.UI.errors,
});

export default connect(mapStateToProps, { signupUser })(signup);
