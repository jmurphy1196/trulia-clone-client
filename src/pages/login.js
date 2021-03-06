import React, { Component } from "react";
import styled from "styled-components";

//redux
import { connect } from "react-redux";
import { loginUser } from "../redux/actions/userActions";

export class login extends Component {
  componentDidMount() {
    let emailField = document.getElementById("email");
    let emailLabel = document.getElementById("email-label");
    let passwordField = document.getElementById("password");
    let passwordLabel = document.getElementById("password-label");

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
  handleLogin = () => {
    const userData = {
      ...this.state,
    };
    this.props.loginUser(userData);
  };
  render() {
    return (
      <LoginWrapper>
        <div className="header">
          <h1>Trulia</h1>
          <span>Log in</span>
        </div>
        <div className="login-form">
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
        </div>
        <button onClick={this.handleLogin} id="login-btn">
          Log in
        </button>
      </LoginWrapper>
    );
  }
}

const LoginWrapper = styled.div`
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
  .login-form {
    position: relative;
    top: 12rem;
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
  #login-btn {
    position: relative;
    top: 15rem;
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

export default connect(mapStateToProps, { loginUser })(login);
