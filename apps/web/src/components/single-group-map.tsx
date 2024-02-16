"use client";

import { useRef } from "react";
import Map, { GeolocateControl, Marker, NavigationControl } from "react-map-gl";

import { marker } from "~/components/icons";

import "mapbox-gl/dist/mapbox-gl.css";

export function SingleGroupMap({
  name,
  location,
}: {
  name: string;
  location: any;
}) {
  const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

  const mapRef = useRef(null);

  return (
    <Map
      ref={mapRef}
      mapboxAccessToken={mapboxToken}
      mapStyle="mapbox://styles/mapbox/streets-v12"
      initialViewState={{
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        zoom: 12,
      }}
      maxZoom={17}
      minZoom={6}
    >
      <GeolocateControl position="top-left" />
      <NavigationControl position="top-left" />
      <Marker
        longitude={Number(location.coords.longitude)}
        latitude={Number(location.coords.latitude)}
      >
        {/* <p className="font-meduim z-50 font-sans text-lg font-medium text-blue-700">
          {name}
        </p> */}
        {marker}
      </Marker>
    </Map>
  );
}
