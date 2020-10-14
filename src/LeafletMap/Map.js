import React, { useState } from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import * as parkdata from "./Skateboard_Parks.json";
import findme from "./3180209.svg";
import "./Map.css";

const skater = new Icon({
  iconUrl: findme,
  iconSize: [25, 25],
});

export default function MapLeaf() {
  const [activePark, setActivePark] = useState(null);
  return (
    <div className="container mt-5 d-flex justify-content-center">
      <Map center={[45.4, -75.7]} zoom={12}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />

        {parkdata.features.map((park) => (
          <Marker
            key={park.properties.PARK_ID}
            position={[
              park.geometry.coordinates[1],
              park.geometry.coordinates[0],
            ]}
            onclick={() => {
              setActivePark(park);
            }}
            icon={skater}
          />
        ))}

        {activePark && (
          <Popup
            position={[
              activePark.geometry.coordinates[1],
              activePark.geometry.coordinates[0],
            ]}
            onClose={() => {
              setActivePark(null);
            }}
          >
            <div>
              <h2>{activePark.properties.NAME}</h2>
              <p>{activePark.properties.DESCRIPTION}</p>
            </div>
          </Popup>
        )}
      </Map>
    </div>
  );
}
