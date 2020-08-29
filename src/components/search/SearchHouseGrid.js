import React, { Component } from "react";

import styled from "styled-components";

//redux
import { connect } from "react-redux";
import ResultsItem from "./ResultsItem"; //each house in the results

class SearchHouseGrid extends Component {
  render() {
    const { numberOfResults } = this.props;
    const {
      data: { results },
    } = this.props;

    return (
      <SearchHouseGridWrapper id="searchwrap" className="example">
        <div className="results-header">
          <span>Texas Homes For Sale & Real Estate</span>
          <p>{numberOfResults} properties found.</p>
        </div>
        <div className="search-grid">
          {results.map((house) => {
            return <ResultsItem key={house.mlsId} house={house} />;
          })}
        </div>
      </SearchHouseGridWrapper>
    );
  }
}

const SearchHouseGridWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  margin-top: 115px;
  width: 50vw;
  height: 87%;
  z-index: 100;
  .results-header {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 3.5rem;
    span {
      font-size: 1.5rem;
      font-family: "Noto Sans";
      margin-left: 20px;
    }
    p {
      font-family: "Noto Sans";
      padding-top: 0.5rem;
      margin-left: 20px;
    }
  }

  .search-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    height: 93%;
    margin-top: 20px;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none;
    grid-gap: 0.5em;
  }
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none !important;
  }

  @media only screen and (max-width: 1400px) {
    .search-grid {
      grid-template-columns: 1fr 1fr !important;
    }
  }
  @media only screen and (max-width: 800px) {
    .search-grid {
      grid-template-columns: 1fr !important;
    }
  }
`;

const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps)(SearchHouseGrid);
