import React, { useState, useRef } from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker
} from "react-google-maps";
import SearchBox from "./components/SearchBox";
import data from "./data/mapData.json";

const styles = require("./GoogleMapStyles.json");

const Map = withScriptjs(
  withGoogleMap(props => {
    const mapRef = useRef(null);
    const [zoom, setZoom] = useState(13);
    const [center, setCenter] = useState({ lat: 59.911491, lng: 10.757933 });

    const handlePlacesChanged = place => {
      setZoom(13);
      setCenter({
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng()
      });
    };

    return (
      <div>
        <GoogleMap
          zoom={zoom}
          ref={mapRef}
          center={center}
          defaultOptions={{
            disableDefaultUI: true, // disable default map UI
            draggable: true, // make map draggable
            keyboardShortcuts: false, // disable keyboard shortcuts
            scaleControl: true, // allow scale controle
            scrollwheel: true, // allow scroll wheel
            styles: styles // change default map styles
          }}
          onDragEnd={() => setCenter(mapRef.current.getCenter())}
          onZoomChanged={() => setZoom(mapRef.current.getZoom())}
        >
          {//curly brace here lets you write javscript in JSX
          data.data.map(item => (
            <Marker
              key={item.id}
              title={item.name}
              name={item.name}
              position={{ lat: item.lat, lng: item.lng }}
            />
          ))}
          <SearchBox onPlacesChanged={handlePlacesChanged} />
        </GoogleMap>
      </div>
    );
  })
);

export default Map;
