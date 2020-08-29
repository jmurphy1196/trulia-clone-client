import React, { Component } from "react";
import styled from "styled-components";

//helpers
import toolbarHandler from "../util/toolbarHandler";
import { number } from "prop-types";

//redux
import { connect } from "react-redux";
import { queryByRoom, queryByPrice } from "../redux/actions/dataActions";

class Toolbar extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    toolbarHandler();
  }
  handleBedRoom = (event) => {
    let numberOfBeds = `${event.target.innerHTML}`;
    if (numberOfBeds.length > 2) {
      numberOfBeds = parseInt(numberOfBeds.slice(6, 7), 10);
    } else {
      numberOfBeds = parseInt(numberOfBeds[0], 10);
    }
    this.props.queryByRoom(numberOfBeds);
  };
  handlePrice = (event) => {
    let min = document.getElementById("min").value;
    let max = document.getElementById("max").value;
    if (max == "") {
      max = 99999999; //sets max to high number is user doesnt select a max
    }
    if (min == "") {
      min = 1;
    }
    min = parseInt(min, 10);
    max = parseInt(max, 10);
    if (max > min) {
      console.log("this went through");

      this.props.queryByPrice(min, max);
    }
  };
  render() {
    return (
      <React.Fragment>
        <ToolbarWrapper>
          <div className="price-filter f">
            <span>Any Price </span>{" "}
            <i className="fa fa-angle-down" aria-hidden="true"></i>
          </div>
          <div className="beds-filter f">
            <span>All Beds</span>{" "}
            <i className="fa fa-angle-down" aria-hidden="true"></i>
          </div>
          <div className="sales-filter f">
            <span>All for Sale</span>{" "}
            <i className="fa fa-angle-down" aria-hidden="true"></i>
          </div>
          <div id="save">
            <span>Save Search</span> <i class="fas fa-bell"></i>
          </div>
        </ToolbarWrapper>
        <SubMenuWrapper>
          <div className="price-submenu sub">
            <div>
              <input
                onChange={this.handlePrice}
                id="min"
                type="number"
                placeholder="min"
              />
            </div>
            <span>-</span>
            <div>
              <input
                onChange={this.handlePrice}
                id="max"
                type="number"
                placeholder="max"
              />
            </div>
          </div>
          <div className="beds-submenu sub">
            <div>
              <span>Studio</span>
            </div>
            <div onClick={this.handleBedRoom}>
              <span>1+</span>
            </div>
            <div onClick={this.handleBedRoom}>
              <span>2+</span>
            </div>
            <div onClick={this.handleBedRoom}>
              <span>3+</span>
            </div>
            <div onClick={this.handleBedRoom}>
              <span>4+</span>
            </div>
          </div>
          <div className="sales-submenu sub">
            <div>
              <span>Sale</span>
            </div>
            <div>
              <span>Sold</span>
            </div>
            <div>
              <span>Rent</span>
            </div>
          </div>
        </SubMenuWrapper>
      </React.Fragment>
    );
  }
}

const SubMenuWrapper = styled.div`
  z-index: 9997;
  div > input {
    width: 90%;
    text-align: center;
    border: none;
    font-weight: bold;
    font-family: "Noto Sans";
    &:hover {
      cursor: pointer;
    }
  }
  input:focus {
    outline: none;
  }
  .price-submenu {
    display: none;
    position: fixed;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2000;
    margin-top: 115px;
    border: solid rgba(0, 0, 0, 0.1) 1px;
    width: 20vw;
    height: 60px;
    padding: 1rem;
    margin-left: 0.5rem;
    background-color: white;
  }
  .price-submenu > div {
    display: flex;
    align-items: center;
    justify-content: center;
    border: solid rgba(0, 0, 0, 0.2) 1px;
    padding: 1rem;
    border-radius: 5%;
    margin: 10px;
    background-color: white;
  }
  .beds-submenu {
    display: none;
    position: fixed;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9000;
    margin-top: 115px;
    border: solid rgba(0, 0, 0, 0.1) 1px;
    border-top: none;
    width: 20rem;
    height: 60px;
    padding: 0;
    margin-left: 11.5rem;
    background-color: white;
  }
  .beds-submenu > div {
    display: flex;
    border: solid rgba(0, 0, 0, 0.2) 1px;
    padding: 1rem;
    border-radius: 5%;
    background-color: white;
    span {
      font-family: "Noto Sans";
    }
    &:hover {
      background-color: #008080;
      cursor: pointer;
      span {
        color: white;
      }
    }
  }
  .sales-submenu {
    display: none;
    position: fixed;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2000;
    margin-top: 115px;
    border: solid rgba(0, 0, 0, 0.1) 1px;
    border-top: none;
    width: 13rem;
    height: 60px;
    padding: 0;
    margin-left: 21.5rem;
    background-color: white;
  }
  .sales-submenu > div {
    display: flex;
    border: solid rgba(0, 0, 0, 0.2) 1px;
    padding: 1rem;
    border-radius: 5%;
    background-color: white;
    span {
      font-family: "Noto Sans";
    }
    &:hover {
      background-color: #008080;
      cursor: pointer;
      span {
        color: white;
      }
    }
  }
`;

const ToolbarWrapper = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 85px;
  background-color: white;

  margin-top: 60px;
  div {
    display: flex;

    justify-content: space-between;
    border: solid rgba(0, 0, 0, 0.1) 1px;
    border-radius: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 2.2rem;
    padding-right: 2.5rem;

    margin: 8px;
    height: 40px;
  }
  div:hover {
    cursor: pointer;
    background-color: #cdcdcd;
  }
  span {
    font-family: "Noto Sans";
    position: relative;
    right: 10px;
  }

  #long {
  }
  i {
    position: relative;
    left: 20px;
  }
  #save {
    border: solid #008080 1px;
    span {
      font-weight: bold;
      color: #008080;
    }
    i {
      color: #008080 !important;
    }
    &:hover {
      background-color: lightblue;
    }
  }
  .sub {
  }
`;

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { queryByRoom, queryByPrice })(Toolbar);
