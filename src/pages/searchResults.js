import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Toolbar from '../components/Toolbar';

import SearchHouseGrid from '../components/search/SearchHouseGrid';

//redux
import { connect } from 'react-redux';



class searchResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        };
     }
    render() {
        return (
            <React.Fragment>
                <Toolbar />
                <SearchHouseGrid />
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user
});




export default connect(mapStateToProps)(searchResults);
