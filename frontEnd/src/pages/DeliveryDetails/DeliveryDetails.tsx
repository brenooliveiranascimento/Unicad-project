import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { DirectionsRenderer, DirectionsService, GoogleMap, LoadScript, Marker, useJsApiLoader } from '@react-google-maps/api';
import Sidebar from '../../components/Sidebar/Sidebar';
import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import GlobalStateI from '../../interfaces/globalState/GlobalStateI';
import { GetDeliverys } from '../../redux/actions/delivery/Get';
import { DeliveryI } from '../../interfaces/globalState/DeliveryI';
import { useHistory, useParams } from 'react-router-dom';
import { formatCoordenateDeparture, formatCoordenateDestination } from '../../utils/formatCoordenates';
import DetailsCart from '../../components/DetailsCard/DetailsCart';

export default function DeliveryDetails() {

  const [currDelivery, setCurrDelivery] = useState<DeliveryI | null>(null);
  const [route, setRoute] = useState<google.maps.DistanceMatrixResponse>()
  const { id }: any = useParams();
  const [departure, setDeparture] = useState<google.maps.LatLngLiteral>();
  const [destination, setDestination] = useState<google.maps.LatLngLiteral>();

  const containerStyle = {
    width: '600px',
    height: '600px'
  };

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
      console.log(departure, destination)
  }

  const directionsServiceOptions =
    // @ts-ignore
    React.useMemo<google.maps.DirectionsRequest>(() => {
      return {
        origin: departure,
        destination,
        travelMode: "BICYCLING",
      };
    }, [departure, destination]);

    const [noReults, setNoResults] = useState(false);

  // @ts-ignore
  const directionsCallback = React.useCallback((res) => {
    if (res !== null && res.status === "OK") {
      setNoResults(false);
      setRoute(res);
    } else if (res === "ZERO_RESULTS") {
      setNoResults(true);
    } else {
      setNoResults(true);
      console.log(res);
    }
  }, []);

  const directionsRendererOptions = React.useMemo<any>(() => {
    return {
      directions: route,
    };
  }, [route]);

  const { deliverys } = useSelector(({ deliverys }: GlobalStateI) => deliverys);

  const dispatch = useDispatch();

  const handleDelivery = () => {
    const findDelivery = deliverys.find((delivery: DeliveryI) => delivery.id === Number(id)) as DeliveryI;
    setCurrDelivery(findDelivery);
  }

  useEffect(() => {
    dispatch(GetDeliverys());
    handleDelivery();
  }, [deliverys]);

  useEffect(() => traceRoute(), [currDelivery]);

  return (
    <main className={styles.home_container}>
      <Sidebar/>
      <section className={styles.main_delivery_card_container} >
          {
            currDelivery && <LoadScript
            googleMapsApiKey='AIzaSyDrAGiZgxfTandddrIDtqnVK6UXqgoWp1k'
            libraries={['places']}
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
          }
          {noReults && <h1>Nenhuma rota encontrada</h1>}
          <DetailsCart currDelivery={currDelivery} traceRoute={() => traceRoute()}/>
      </section>
    </main>
)
}
