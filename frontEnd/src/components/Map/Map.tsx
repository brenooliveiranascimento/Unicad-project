import { DirectionsRenderer, DirectionsService, GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DeliveryI } from "../../interfaces/globalState/DeliveryI";
import { formatCoordenateDeparture, formatCoordenateDestination } from "../../utils/formatCoordenates";

interface IDeliveryFieldProps {
  currDelivery: DeliveryI;
  setNoResults: (result: boolean) => void;
}

export default function Map({ currDelivery, setNoResults }: IDeliveryFieldProps) {
  const [route, setRoute] = useState<google.maps.DistanceMatrixResponse>();
  const [departure, setDeparture] = useState<google.maps.LatLngLiteral>();
  const [destination, setDestination] = useState<google.maps.LatLngLiteral>();

  const containerStyle = {
    width: "100%",
    height: "100%"
  };
  const { travelMode }: { travelMode: string } = useParams();

  const traceRoute = () => {
    if(currDelivery?.deliverysDestination.departureCoordenate &&
      currDelivery?.deliverysDestination.destinyCoordenate) {
      setDestination({
        lat: formatCoordenateDestination(0, currDelivery),
        lng: formatCoordenateDestination(1, currDelivery)
      });
      setDeparture({
        lat: formatCoordenateDeparture(0, currDelivery),
        lng: formatCoordenateDeparture(1, currDelivery)
      });
    }
  };

  const directionsServiceOptions =
  // @ts-ignore
React.useMemo<google.maps.DirectionsRequest>(() => {
  return {
    origin: departure,
    destination,
    travelMode: travelMode,
  };
}, [departure, destination]);

  // @ts-ignore
  //DirectionsServiceProps
  const directionsCallback = React.useCallback((res) => {
    if (res !== null && res.status === "OK") {
      setNoResults(false);
      setRoute(res);
    } else if (res === "ZERO_RESULTS") {
      setNoResults(true);
    } else {
      setNoResults(true);
    }
  }, []);

  const directionsRendererOptions = React.useMemo<any>(() => {
    return {
      directions: route,
    };
  }, [route]);

  useEffect(() => traceRoute(), [currDelivery]);

  return (
    <LoadScript
      googleMapsApiKey='AIzaSyDrAGiZgxfTandddrIDtqnVK6UXqgoWp1k'
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{
          lat: formatCoordenateDeparture(0, currDelivery),
          lng: formatCoordenateDeparture(1, currDelivery),
        }}
        zoom={15}
      >
        {!route && departure && <Marker position={departure} />}
        {!route && destination && <Marker position={destination} />}

        {departure && destination && (
          <DirectionsService
            options={directionsServiceOptions} 
            callback={directionsCallback}
          />
        )}

        {route && (
          <DirectionsRenderer
            options={directionsRendererOptions}
          />
        )}
      </GoogleMap>
    </LoadScript>
  );
}
