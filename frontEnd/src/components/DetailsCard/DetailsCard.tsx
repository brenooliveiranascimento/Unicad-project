import React from "react";
import { DeliveryI } from "../../interfaces/globalState/DeliveryI";
import { formatDate } from "../../utils/formatDate";
import AllTravelsList from "./AllTravelsList";
import HandleDelivery from "./HandleDelivery";
import HandleTravelMode from "./HandleTravelMode";
import styles from "./styles.module.css";

interface IDetailsCard {
  currDelivery: DeliveryI | null;
}

export default function DetailsCard({ currDelivery }: IDetailsCard) {

  return (
    <aside className={styles.aside_container}>
      <section className={styles.aside_limit}>
        <h1>Detalhes da entrega</h1>
        <span>Cliente: <strong>{ currDelivery?.client }</strong></span>
        <span>Data da entrega <strong>{formatDate(currDelivery?.deliveryDate)}</strong></span>
        <span>Saida: <strong>{currDelivery?.deliverysDestination.departureName}</strong></span>
        <span>Destino: <strong>{currDelivery?.deliverysDestination.destinyName}</strong></span>
        <HandleDelivery />
        <HandleTravelMode />
        <AllTravelsList />
      </section>
    </aside>
  );
}
