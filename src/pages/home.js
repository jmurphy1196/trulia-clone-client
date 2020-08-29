import React, { Component } from "react";
import img from "../trulia-home.webp";

import styled from "styled-components";
import HouseGridItem from "../components/HouseGridItem";

var oldScrollPos = 0;

class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bodyLogo: [
        "https://www.trulia.com/javascript/moana//_next/static/assets/BuyAHomeIcon-9942304aebf90f4412fa0ed4ea6ab1eb.svg",
        "https://www.trulia.com/javascript/moana//_next/static/assets/RentAHomeIcon-7f2dac9d208cc4e2c349ff303271fc4a.svg",
        "https://www.trulia.com/javascript/moana//_next/static/assets/NeighborhoodsIcon-a5f51cd13edc84f1fdd582163552abc7.svg",
      ],
      houseGrid: [
        {
          size: "half",
          src:
            "https://cherryyeung.avenuehq.com/wp-content/uploads/sites/1487/2019/01/house-1.jpeg",
        },
        {
          size: "half",
          src:
            "https://image.shutterstock.com/image-photo/luxurious-new-construction-home-bellevue-260nw-555325381.jpg",
        },
        {
          size: "full",
          src:
            "https://image.shutterstock.com/image-photo/luxurious-new-construction-home-bellevue-260nw-555325381.jpg",
        },
        {
          size: "half",
          src:
            "https://media.gettyimages.com/photos/idyllic-home-with-covered-porch-picture-id479767332?s=612x612",
        },
        {
          size: "half",
          src:
            "https://i.pinimg.com/originals/66/0b/bd/660bbd79a3f30e16b68e5a9aaf326d3e.jpg",
        },
        {
          size: "half",
          src:
            "https://www.oddizzi.com/wp-content/uploads/2013/06/img-detachedhouse.jpg",
        },
        {
          size: "half",
          src:
            "https://www.localtoronto.com/wp-content/uploads/2014/10/home-types.jpg",
        },
        {
          size: "full",
          src:
            "https://cherryyeung.avenuehq.com/wp-content/uploads/sites/1487/2019/01/house-1.jpeg",
        },
      ],
    };
  }

  scrollGrid = (direction) => {
    let houseGrid = document.querySelector(".house-grid");
    let newScrollPos;
    if (direction === "right") {
      newScrollPos = oldScrollPos + 200;
      houseGrid.scroll(newScrollPos, 0);
    } else {
      newScrollPos = oldScrollPos - 200;
      houseGrid.scroll(newScrollPos, 0);
    }
    oldScrollPos = newScrollPos;
  };

  redirectToSearch = () => {
    this.props.history.push("/search");
  };
  render() {
    return (
      <React.Fragment>
        <HeaderWrapper>
          <div className="header">
            <img src={img} />
          </div>
          <div className="header-caption">
            <h1>
              Discover a place <br /> you'll love to live
            </h1>
          </div>

          <div className="header-btn">
            <span>Buy</span>
            <span>Rent</span>
            <span>Sold</span>
          </div>
          <div className="header-input">
            <form className="header-form">
              <input
                id="search-input"
                type="text"
                placeholder="San Francisco, CA"
              />
              <span onClick={this.redirectToSearch}>
                <i className="fa fa-search"></i>
              </span>
            </form>
          </div>
        </HeaderWrapper>
        <BodyWrapper>
          <div className="body-1-title">
            <h1>See how Trulia can help</h1>
          </div>
          <div className="body-1-logos">
            <img src={this.state.bodyLogo[0]} alt="logo" />
            <span className="mobile-captions">
              {" "}
              With over 1 million+ homes for sale available on the website,
              Trulia can match you with a house you will want to call home.
            </span>
            <span className="mobile-btns">Find a home</span>
            <img src={this.state.bodyLogo[1]} alt="logo" />
            <span className="mobile-captions">
              {" "}
              With 35+ filters and custom keyword search, Trulia can help you
              easily find a home or apartment for rent that you'll love.
            </span>
            <span className="mobile-btns">Find a Rental</span>
            <img src={this.state.bodyLogo[2]} alt="logo" />
            <span className="mobile-captions">
              {" "}
              With more neighborhood insights than any other real estate
              website, we've captured the color and diversity of communities.
            </span>
            <span className="mobile-btns">Learn more</span>
          </div>
          <div className="body-1-captions">
            <p>
              With over 1 million+ homes for sale available on the website,
              Trulia can match you with a house you will want to call home.
            </p>
            <p>
              With 35+ filters and custom keyword search, Trulia can help you
              easily find a home or apartment for rent that you'll love.
            </p>
            <p>
              With more neighborhood insights than any other real estate
              website, we've captured the color and diversity of communities.
            </p>
          </div>
          <div className="body-1-buttons">
            <span>Find a home</span>
            <span>Find a rental</span>
            <span>Learn more</span>
          </div>
          <div className="body-2-title">
            <h1>Explore neighborhoods on Trulia</h1>
            <p>
              Take a deep dive and browse original neighborhood photos, drone
              footage, resident <br />
              reviews and local insights to see if the homes for sale are right
              for you.
            </p>
          </div>
          <div className="house-grid">
            <HouseGridItem images={this.state.houseGrid} />
          </div>
          {/* arrow buttons for photo gallery */}
          <div className="right-arrow" onClick={() => this.scrollGrid("right")}>
            <i
              className="fa fa-angle-right"
              onClick={() => this.scrollGrid("right")}
            ></i>
          </div>
          <div className="left-arrow" onClick={() => this.scrollGrid("left")}>
            <i
              className="fa fa-angle-left"
              onClick={() => this.scrollGrid("left")}
            ></i>
          </div>

          <div className="guide-info">
            <div className="guide-container">
              <div className="guide-captions">
                <h2>Trulia Guides</h2>
                <h1>
                  Everything you need to know <br />
                  when looking at different <br />
                  types of homes for sale all in <br />
                  one place.
                </h1>
              </div>
              <div className="guide-icons">
                <img src={this.state.bodyLogo[0]} alt="logo" />
                <img src={this.state.bodyLogo[1]} alt="logo" />
                <img src={this.state.bodyLogo[2]} alt="logo" />
              </div>
              <div className="guide-icon-captions">
                <div>
                  <h2>Buyer Guides</h2>
                  <p>
                    How to buy <i class="fas fa-arrow-right"></i>
                  </p>
                </div>
                <div>
                  <h2>Renter Guides </h2>
                  <p>
                    How to rent <i class="fas fa-arrow-right"></i>
                  </p>
                </div>
                <div>
                  <h2>Seller Guides</h2>
                  <p>
                    How to sell <i class="fas fa-arrow-right"></i>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </BodyWrapper>
      </React.Fragment>
    );
  }
}

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .header {
    display: flex;
    width: 97vw;
    height: 70vh;
    position: relative;
    top: 4rem;
  }
  .header > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
    border-radius: 1%;
  }
  .header-caption > h1 {
    z-index: 999;
    color: white;
    font-size: 2.7rem;
  }
  .header-caption {
    position: absolute;
    top: 16rem;
    left: 0;
    right: 0;
    width: 97vw;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .header-btn {
    position: absolute;
    z-index: 4;
    top: 23rem;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    width: 97vw;
    justify-content: center;
    height: 10vh;
  }
  .header-btn > span {
    color: white;
    font-size: 1.4rem;
    padding: 1rem;
    background-color: rgba(0, 0, 0, 0.45);
    border-radius: 20%;
  }
  .header-btn > span:hover {
    cursor: pointer;
    background-color: white;
    color: #008080;
  }
  .header-input {
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    top: 28rem;
    width: 97vw;
    right: 3rem;
    left: 1em;
  }
  .header-form > input {
    width: 16.5rem;
    border: none;
    height: 3.5rem;
    font-size: 1.4rem;
  }
  .header-form > input:focus {
    outline: none;
  }
  .fa-search {
    color: white;
    font-size: 1.5rem;
  }
  .header-form > span {
    background-color: firebrick;
    padding: 1.2em;
  }
  .header-form > span:hover {
    cursor: pointer;
    filter: brightness(85%);
  }
`;

const BodyWrapper = styled.div`
  .body-1-title {
    display: flex;
    width: 100vw;
    align-items: center;
    justify-content: center;
    margin-top: 7rem;
  }

  .body-1-title > h1 {
    color: #265b5f;
    padding-top: 1em;
    padding-right: 1em;
  }

  .body-1-logos {
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: relative;
    width: 60vw;
    left: 20vw;
  }
  .body-1-logos > img {
    margin-bottom: 4rem;
  }
  .body-1-captions {
    display: flex;
    position: relative;
    width: 60vw;
    left: 20vw;
    align-items: center;
    justify-content: space-around;
    bottom: 3.5rem;
  }
  .body-1-captions > p {
    padding: 1rem;
    text-align: center;
    font-size: 1.2rem;
  }
  .body-1-buttons {
    display: flex;
    position: relative;
    width: 60vw;
    left: 20vw;
    align-items: center;
    justify-content: space-around;
    bottom: 2rem;
  }
  .body-1-buttons > span {
    padding-left: 1em;
    padding-right: 1em;
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    background-color: #008080;
    color: white;
    border-radius: 5%;
    width: 10vw;
    text-align: center;
    border: solid #008080 1px;
    font-weight: bold;
  }
  .body-1-buttons > span:hover {
    background-color: white;
    color: #008080;
    border: solid #008080 1px;
    cursor: pointer;
  }
  .body-2-title {
    display: flex;
    flex-direction: column;
    width: 100vw;
    align-items: center;
    justify-content: center;
    position: relative;
    top: 1rem;
  }
  .body-2-title > p {
    text-align: center;
    position: relative;
    padding-top: 1rem;
  }
  .house-grid {
    display: grid;
    position: relative;
    width: 97vw;
    left: 1vw;
    height: 440px;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 200px 200px;
    grid-auto-flow: column;
    grid-template-areas:
      "full-item" "top-item"
      "full-item";
    overflow: scroll;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none;
    grid-gap: 1em;
    top: 3.5rem;
  }
  .house-grid::-webkit-scrollbar {
    display: none;
  }
  .top-item {
    position: relative;
    width: 400px;
    border: solid rgba(0, 0, 0, 0.1) 2px;
    border-radius: 2%;
  }
  .full-item {
    position: relative;
    width: 400px;
    height: 415px;
    border: solid rgba(0, 0, 0, 0.1) 2px;
    border-radius: 2%;
  }
  .full-item > img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 2%;
    filter: brightness(70%);
  }

  .top-item > img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 2%;
    filter: brightness(70%);
  }

  .right-arrow {
    position: relative;
    bottom: 205px;
    left: 96.5vw;
    z-index: 1000;
    background-color: white;
    border-radius: 60%;
    width: 1.5rem;
    border: solid rgba(0, 0, 0, 0.1) 1px;
  }
  .right-arrow:hover {
    cursor: pointer;
  }
  .right-arrow > i {
    font-size: 1.6rem;
    position: relative;
    color: black;
    text-align: center;
    left: 0.5rem;
  }
  .left-arrow {
    position: relative;
    bottom: 220px;
    left: 10px;
    z-index: 1000;
    background-color: white;
    border-radius: 60%;
    width: 1.5rem;
    border: solid rgba(0, 0, 0, 0.1) 1px;
  }
  .left-arrow:hover {
    cursor: pointer;
  }
  .left-arrow > i {
    font-size: 1.6rem;
    position: relative;
    color: black;
    text-align: center;
    left: 5px;
  }
  .guide-info {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 99vw;
    height: 500px;

    background-color: #f9ede6;
  }
  .guide-captions {
    display: flex;
    flex-direction: column;
  }
  .guide-captions > h2 {
    color: #008080;
  }
  .guide-captions > h1 {
    color: darkblue;
    font-size: 1.8rem;
    position: relative;
    padding-top: 2rem;
  }
  .guide-container {
    display: flex;
  }
  .guide-icons {
    display: flex;
    flex-direction: column;
    padding: 0.2em;
    margin-left: 2rem;
    position: relative;
  }
  .guide-icon-captions {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1.5em;
  }
  .guide-icon-captions > div > p {
    position: relative;
    color: #008080;
    font-weight: bold;
  }
  .mobile-captions {
    display: none;
  }
  .mobile-btns {
    display: none;
  }

  @media only screen and (max-width: 900px) {
    .right-arrow {
      left: 91vw;
    }
    .body-1-logos {
      flex-direction: column;
      padding-bottom: 1rem;
      top: 2rem;
    }
    .body-1-captions {
      display: none;
    }
    .body-1-buttons {
      display: none;
    }
    .mobile-captions {
      display: flex;
      text-align: center;
      position: relative;
      bottom: 3rem;
      width: 75%;
    }
    .mobile-btns {
      display: flex;
      padding-left: 1em;
      padding-right: 1em;
      padding-top: 0.5em;
      padding-bottom: 0.5em;
      background-color: #008080;
      color: white;
      border-radius: 5%;
      width: 10vw;
      text-align: center;
      border: solid #008080 1px;
      font-weight: bold;
      position: relative;
      bottom: 1rem;
      width: 6rem;
      text-align: center !important;
    }
    .mobile-btns:hover {
      background-color: white;
      color: #008080;
      border: solid #008080 1px;
      cursor: pointer;
    }
    .header {
      width: 100vw;
    }
  }
`;

export default home;
