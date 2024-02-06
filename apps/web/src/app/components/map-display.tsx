"use client";

import { useEffect, useRef, useState } from "react";
import Map, {
  GeolocateControl,
  Marker,
  NavigationControl,
  Popup,
} from "react-map-gl";

import type { Location } from "@acme/types";

import { marker } from "~/app/components/icons";
import { api } from "~/trpc/server";

import "mapbox-gl/dist/mapbox-gl.css";

export function MapDisplay(props: { locations: Location[] }) {
  const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

  const [selectedMarker, setSelectedMarker] = useState<Location | null>(null);
  const [currentLocation, setCurrentLocation] = useState({
    latitude: 53.8952733,
    longitude: 27.5510122,
  });

  const mapRef = useRef(null);

  const zoomToSelectedLoc = (
    e: React.MouseEvent<HTMLElement>,
    location: Location,
  ) => {
    e.stopPropagation();
    setSelectedMarker(location);
    mapRef.current.flyTo({
      center: [location.coords.longitude, location.coords.latitude],
      zoom: 10,
    });
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCurrentLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    } else {
      console.log(
        "Geolocation is not supported by this browser. Seeting default location to Minsk, Belarus.",
      );
    }
  }, []);
  console.log("MapDisplay currentLocation: ", currentLocation);
  return (
    <Map
      ref={mapRef}
      mapboxAccessToken={mapboxToken}
      mapStyle="mapbox://styles/mapbox/streets-v12"
      initialViewState={{
        latitude: currentLocation.latitude,
        longitude: currentLocation.longitude,
        zoom: 12,
      }}
      maxZoom={17}
      minZoom={6}
    >
      <GeolocateControl position="top-left" />
      <NavigationControl position="top-left" />
      {props.locations.map((location, index) => {
        return (
          <Marker
            key={index}
            longitude={Number(location.coords.longitude)}
            latitude={Number(location.coords.latitude)}
          >
            <button
              type="button"
              className="cursor-pointer"
              onClick={(e) => zoomToSelectedLoc(e, location)}
            >
              <p className="font-meduim z-50 text-xl text-blue-700">
                {location.name}
              </p>
              {marker}
            </button>
          </Marker>
        );
      })}
      {selectedMarker ? (
        <Popup
          offset={25}
          latitude={Number(selectedMarker.coords.latitude)}
          longitude={Number(selectedMarker.coords.longitude)}
          onClose={() => {
            setSelectedMarker(null);
          }}
          closeButton={false}
        >
          <p>{selectedMarker.name}</p>
        </Popup>
      ) : null}
    </Map>
  );
}
