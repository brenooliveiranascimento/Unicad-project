import React, { useEffect, useState } from 'react'
import { GoogleMap, LoadScript, useJsApiLoader } from '@react-google-maps/api';
import Sidebar from '../../components/Sidebar/Sidebar';
import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import GlobalStateI from '../../interfaces/globalState/GlobalStateI';
import { GetDeliverys } from '../../redux/actions/delivery/Get';
import { DeliveryI } from '../../interfaces/globalState/DeliveryI';
import { useHistory, useParams } from 'react-router-dom';
import { formatCoordenate } from '../../utils/formatCoordenates';

export default function DeliveryDetails() {

  const [currDelivery, setCurrDelivery] = useState<DeliveryI | null>(null);

  const { id }: any = useParams();

  const containerStyle = {
    width: '400px',
    height: '400px'
  };

  const { deliverys } = useSelector(({ deliverys }: GlobalStateI) => deliverys);

  const dispatch = useDispatch();

  const handleDelivery = () => {
    const findDelivery = deliverys.find((delivery: DeliveryI) => delivery.id === Number(id)) as DeliveryI;
    setCurrDelivery(findDelivery);
  }

  const history = useHistory();

  const next = () => window.location.href = `http://localhost:3000/deliveryDetails/${Number(id) + 1}`;
  const prev = () => window.location.href = `http://localhost:3000/deliveryDetails/${Number(id) - 1}`;

  useEffect(() => {
    dispatch(GetDeliverys());
    handleDelivery()
  }, [deliverys]);

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
                lat: formatCoordenate(0, currDelivery),
                lng: formatCoordenate(1, currDelivery),
              }}
              zoom={15}
            >
            </GoogleMap>
          </LoadScript>
          }
          <h1>{currDelivery?.client}</h1>
          <span>{currDelivery?.deliveryDate.toLocaleString()}</span>
          <nav>
            <button disabled={!deliverys[deliverys.findIndex((currDe: DeliveryI) => {
              return currDe.id === Number(id);
            }) -1]} onClick={prev}>
              {'<'}
            </button>
            <button disabled={Number(id) === deliverys.length} onClick={next}>
              {'>'}
            </button>
          </nav>
      </section>
    </main>
)
}
