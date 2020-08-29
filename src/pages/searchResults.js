import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Toolbar from "../components/Toolbar";

import SearchHouseGrid from "../components/search/SearchHouseGrid";
import WrappedMap from "../components/search/Map";
import apiKey from "../util/mapApiKey";

//redux
import { connect } from "react-redux";

class searchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      lat: null,
    };
  }

  render() {
    const {
      data: { results },
    } = this.props;
    let numberOfResults = results.length;
    console.log(numberOfResults);
    return (
      <React.Fragment>
        <Toolbar />
        <SearchHouseGrid numberOfResults={numberOfResults} />
        <div
          style={{
            width: "48.5vw",
            height: "85vh",
            position: "absolute",
            left: "51.5vw",
            top: "7.5rem",
          }}
        >
          <WrappedMap
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${apiKey()}`}
            loadingElement={<div style={{ height: "100%" }} />}
            containerElement={<div style={{ height: "100%" }} />}
            mapElement={<div style={{ height: "100%" }} />}
          />
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  data: state.data,
  lat: state.data.lat,
  lng: state.data.lng,
});

export default connect(mapStateToProps)(searchResults);
