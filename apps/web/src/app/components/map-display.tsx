"use client";

import { useRef, useState } from "react";
import { IoIosPeople } from "react-icons/io";
import Map, {
  GeolocateControl,
  Marker,
  NavigationControl,
  Popup,
} from "react-map-gl";

// import type { RouterOutputs } from "@acme/api";
import type { Location } from "@acme/types";

import "mapbox-gl/dist/mapbox-gl.css";

export function MapDisplay(props: { locations: Location[] }) {
  console.log("MapDisplay", props.locations);
  const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
  const [selectedMarker, setSelectedMarker] = useState<Location | null>(null);
  const mapRef = useRef(null);

  const zoomToSelectedLoc = (
    e: MouseEvent,
    location: Location,
    index: number,
  ) => {
    e.stopPropagation();
    setSelectedMarker({ location, index });
    mapRef.current.flyTo({
      center: [location.coords.longitude, location.coords.latitude],
      zoom: 10,
    });
  };
  return (
    <Map
      ref={mapRef}
      mapboxAccessToken={mapboxToken}
      mapStyle="mapbox://styles/mapbox/streets-v12"
      initialViewState={{
        latitude: 53.9045185,
        longitude: 27.596258,
        zoom: 10,
      }}
      maxZoom={20}
      minZoom={3}
    >
      <GeolocateControl position="top-left" />
      <NavigationControl position="top-left" />
      {props.locations.map((location, index) => {
        return (
          <Marker key={index} longitude={27.59} latitude={53.9}>
            <button
              type="button"
              className="cursor-pointer"
              onClick={(e) => zoomToSelectedLoc(e, location, index)}
            >
              <p className="font-meduim z-50 text-xl text-blue-700">
                {location.name}
              </p>
              {<IoIosPeople size={30} color="blue" />}
            </button>
          </Marker>
        );
      })}
      {selectedMarker ? (
        <Popup
          offset={25}
          latitude={selectedMarker.coords.longitude}
          longitude={selectedMarker.coords.latitude}
          onClose={() => {
            setSelectedMarker(null);
          }}
          closeButton={false}
        >
          <h3>{selectedMarker.name}</h3>
        </Popup>
      ) : null}
    </Map>
  );
}
