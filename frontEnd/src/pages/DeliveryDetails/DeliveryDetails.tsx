import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/Sidebar/Sidebar';
import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import GlobalStateI from '../../interfaces/globalState/GlobalStateI';
import { GetDeliverys } from '../../redux/actions/delivery/GetDeliverys';
import { DeliveryI } from '../../interfaces/globalState/DeliveryI';
import {  useParams } from 'react-router-dom';
import DetailsCart from '../../components/DetailsCard/DetailsCart';
import Map from '../../Map/Map';

export default function DeliveryDetails() {

  const [currDelivery, setCurrDelivery] = useState<DeliveryI | null>(null);
  const { id }: any = useParams();

  const [noReults, setNoResults] = useState(false);

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

  return (
    <main className={styles.home_container}>
      <Sidebar/>
      <section className={styles.main_delivery_card_container} >
          {
            currDelivery && (
              <Map currDelivery={currDelivery} setNoResults={(result: boolean) => setNoResults(result)}/>
            ) 
          }
          {noReults && <h1>Nenhuma rota encontrada</h1>}
          <DetailsCart currDelivery={currDelivery} />
      </section>
    </main>
)
}
