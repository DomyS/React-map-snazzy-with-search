import React from "react";
import ReactDOM from "react-dom";

import Map from "./Map";

const styles = {
  width: "100%",
  height: "536px"
};

function App() {
  return (
    <div style={styles}>
      <Map
        defaultOptions={{ scaleControl: true }}
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyBt5F_65miIiCpSgOEmbg3hACbgU0RwZas&libraries=visualization,drawing,geometry,places`}
        loadingElement={
          <div style={{ height: `calc(100vh - 112px)` }}> Loading... </div>
        }
        containerElement={<div style={{ height: `calc(100vh - 112px)` }} />}
        mapElement={<div style={{ height: `calc(100vh - 112px)` }} />}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
