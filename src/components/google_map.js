import React, { Component } from 'react';

class GoogleMap extends Component {
    componentDidMount() {
        // this creates embedded google map
        // this.refs.map is the html element we want to render this map to
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        });
    }

    render() {
        // we can access to this element elsewhere using this.refs.map
        return <div ref="map" />
    }
}

export default GoogleMap;