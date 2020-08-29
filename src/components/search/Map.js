import React, { Component } from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";
//redux
import { connect } from "react-redux";

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 29.58936,
      lng: -95.139313,
    };
  }

  componentWillReceiveProps(nextProp) {
    if (nextProp.lat !== this.state.lat || nextProp.lng !== this.state.lng) {
      this.setState(
        () => {
          return {
            lat: nextProp.lat,
            lng: nextProp.lng,
          };
        },
        () => console.log(this.state)
      );
    }
  }

  render() {
    const { lat, lng } = this.state;
    console.log(this.state.lat);

    return <GoogleMap defaultZoom={14} center={{ lat, lng }} />;
  }
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

const mapStateToProps = (state) => ({
  lat: state.data.lat,
  lng: state.data.lng,
  data: state.data,
});

connect(mapStateToProps)(Map);
export default connect(mapStateToProps)(WrappedMap);
