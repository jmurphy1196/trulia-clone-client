import React, { Component } from "react";
import styled from "styled-components";
//redux
import { connect } from "react-redux";
import { setLocation } from "../../redux/actions/dataActions";

class ResultsItem extends Component {
  handleLocation = (lat, lng) => {
    this.props.setLocation(lat, lng);
  };
  render() {
    const { house } = this.props;
    console.log(house);
    return (
      <ResultsWrapper>
        <div className="image">
          <img
            onClick={() => this.handleLocation(house.geo.lat, house.geo.lng)}
            src={house.photos[0]}
          />
        </div>
        <div className="info">
          <p className="price">${house.listPrice}</p>
          <div className="rooms">
            <div>
              <i className="fa fa-bed" aria-hidden="true"></i>
              <span>{house.property.bedrooms}</span>
            </div>
            <div>
              <i className="fas fa-bath"></i>
              {house.property.bathsFull ? (
                <span>{house.property.bathsFull}</span>
              ) : null}
            </div>
            <div>
              <i className="fas fa-square"></i>
              {house.property.area ? (
                <span>{house.property.area} sqft</span>
              ) : null}
            </div>
          </div>
          <div className="addr">
            <span>
              {house.address.streetNumberText} {house.address.streetName}
            </span>
            <span>{house.address.city}, TX</span>
          </div>
        </div>
      </ResultsWrapper>
    );
  }
}

const ResultsWrapper = styled.div`
  height: 17rem;

  .image {
    height: 60%;
    width: 100%;
    &:hover {
      cursor: pointer;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 5%;
    }
  }
  .info {
    display: flex;
    flex-direction: column;
    padding: 5px;
    padding-top: 5px;
  }
  .info > div {
    padding-top: 10px;
  }
  .rooms {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 2rem;
    padding-right: 2rem;
    div > span {
      padding-left: 5px;
    }
  }

  .addr {
    display: flex;
    flex-direction: column;
    span {
      font-style: italic;
    }
  }
  .price {
    font-size: 1.4rem;
    font-family: "Noto Sans";
  }
`;

const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps, { setLocation })(ResultsItem);
