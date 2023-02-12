import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import GlobalStateI from "../../interfaces/globalState/GlobalStateI";
import { GetDeliverys } from "../../redux/actions/delivery/GetDeliverys";
import { DeliveryI } from "../../interfaces/globalState/DeliveryI";
import {  useParams } from "react-router-dom";
import Map from "../../components/Map/Map";
import DetailsCard from "../../components/DetailsCard/DetailsCard";

export default function DeliveryDetails() {

  const [noReults, setNoResults] = useState(false);

  const dispatch = useDispatch();

  const { id }: any = useParams();
  const { deliverys } = useSelector(({ deliverys }: GlobalStateI) => deliverys);

  const handleDelivery = () => {
    return deliverys.find((delivery: DeliveryI) => delivery.id === Number(id)) as DeliveryI;
  };

  useEffect(() => {
    dispatch(GetDeliverys());
    handleDelivery();
  }, [deliverys]);

  return (
    <main className={styles.home_container}>
      <Sidebar/>
      <DetailsCard currDelivery={handleDelivery()}/>
      <section className={styles.main_delivery_card_container} >
        {
          handleDelivery() && (
            <Map
              currDelivery={handleDelivery()}
              setNoResults={(result: boolean) => setNoResults(result)}
            />
          ) 
        }
        {noReults && <h1>Nenhuma rota encontrada</h1>}
      </section>
    </main>
  );
}
