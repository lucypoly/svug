import React, { Component } from 'react';
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from "react-google-maps"

class Map extends Component {
  render() {
    return <div>
      <GoogleMap
        defaultZoom={13}
        defaultCenter={{lat: 50.4577349205824, lng: 30.5019518672036}}
      >
        <Marker position={{lat: 50.4577349205824, lng: 30.50195186720360}}/>
      </GoogleMap>
    </div>;
  }
}

export default withScriptjs(withGoogleMap(Map));
