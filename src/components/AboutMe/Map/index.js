import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

class Map extends Component {
  constructor(props) {
    super(props);
    this.mapContainer = props.id;
    this.state = {
      lng: props.lng,
      lat: props.lat,
      zoom: props.zoom,
    };
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/team-g01/ckamkmwcw4vw71ilkqh30d8ri',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
    });
    map.addControl(new mapboxgl.NavigationControl());
    map['scrollZoom'].disable();
  }

  render() {
    return (
      <div>
        <div ref={(el) => (this.mapContainer = el)} className="mapContainer" />
      </div>
    );
  }
}

export default Map;
