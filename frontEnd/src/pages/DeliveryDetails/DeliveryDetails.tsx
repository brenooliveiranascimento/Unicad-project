import React from 'react'
import { GoogleMap, LoadScript, useJsApiLoader } from '@react-google-maps/api';

export default function DeliveryDetails() {
  const containerStyle = {
    width: '400px',
    height: '400px'
  };
  
  const center = {
    lat: -3.745,
    lng: -38.523
  };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDrAGiZgxfTandddrIDtqnVK6UXqgoWp1k"
  })

  return isLoaded ? (
    <LoadScript
      googleMapsApiKey='AIzaSyDrAGiZgxfTandddrIDtqnVK6UXqgoWp1k'
      libraries={['places']}
    >
      <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
          >
            { /* Child components, such as markers, info windows, etc. */ }
            <></>
          </GoogleMap>
    </LoadScript>
) : <></>
}
