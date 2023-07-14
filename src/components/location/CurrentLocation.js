import React, { useRef } from "react";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { useMap } from "react-leaflet/hooks";
import { Marker, Popup } from "react-leaflet";
import "./CurrentLocation.scss";
import 'leaflet/dist/leaflet.css';

const CurrentLocation = () => {
  const position = [51.505, -0.09];

  return (
    <div className="hamed">
      <p>here is </p>
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}></Marker>
      </MapContainer>
      ,
    </div>
  );
};

export default CurrentLocation;
