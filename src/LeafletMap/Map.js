import React, { useState, useEffect } from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import axios from "axios";
import * as parkdata from "./Skateboard_Parks.json";
import findme from "./3180209.svg";
import apiUrl from "../config";
import "./Map.css";

const locationIcon = new Icon({
  iconUrl: findme,
  iconSize: [25, 25],
});

export default function MapLeaf() {
  const [jobslist, setJoblist] = useState(null);
  const [cities, setCities] = useState([51.1642292, 10.4541194]);
  const [toggler, setToggler] = useState(false);
  const [locations, setLocations] = useState([]);

  // Fetching the data from api
  useEffect(() => {
    axios.get(`${apiUrl}jobs`).then((res) => {
      const arrayOfObjects = res.data;
      const locations = arrayOfObjects.map((array) => array.zip);
      setLocations(locations); //Setting array of jobtitles
    });
  }, []);

  const transformValue = (e) => {
    const optionValue = [e.target.value];
    var array = JSON.parse("[" + optionValue + "]");
    setCities(array);
    setToggler(true);
  };

  return (
    <div>
      <div className="container mt-5 d-flex justify-content-center">
        <div id="mapContainer">
          <div className="body-section">
            <div id="map">
              <Map center={cities} zoom={toggler ? 11 : 5}>
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
                      setJoblist(park);
                    }}
                    icon={locationIcon}
                  />
                ))}
                {jobslist && (
                  <Popup
                    position={[
                      jobslist.geometry.coordinates[1],
                      jobslist.geometry.coordinates[0],
                    ]}
                    onClose={() => {
                      setJoblist(null);
                    }}
                  >
                    <div>
                      <h2>{jobslist.properties.NAME}</h2>
                      <p>{jobslist.properties.DESCRIPTION}</p>
                    </div>
                  </Popup>
                )}
              </Map>
            </div>
            <div className="text-overlay">
              <div className="titleWrapper">
                <div id="comingSoon" className="d-flex justify-content-center">
                  <h4 className="display-3">Start your Job Hunt!</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* TESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTEST */}
      {/* <div className="w-50 mt-4">
        <select
          className="form-control"
          data-role="select-dropdown"
          defaultValue={"DEFAULT"}
          onChange={(e) => transformValue(e)}
        >
          <option disabled value="DEFAULT">
            choose prefix
          </option>
          <option value={[48.782343, 9.180819]}>Stuttgart</option>
          <option value={[52.516667, 13.4]}>Berlin</option>
        </select>
      </div> */}
      {/* TESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTEST */}
    </div>
  );
}
