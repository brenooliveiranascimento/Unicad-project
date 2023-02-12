import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { DeliveryI } from "../../interfaces/globalState/DeliveryI";
import GlobalStateI from "../../interfaces/globalState/GlobalStateI";
import { formatDate } from "../../utils/formatDate";
import { ITravelModes, travelModes } from "../../utils/travelModes";
import DeliveryDetailField from "../DeliveryDetailField/DeliveryDetailField";
import styles from "./styles.module.css";

interface IDetailsCard {
  currDelivery: DeliveryI | null;
}

export default function DetailsCard({ currDelivery }: IDetailsCard) {
  const { id, travelMode }: { id: string, travelMode: string } = useParams();
  const { deliverys } = useSelector(({ deliverys }: GlobalStateI) => deliverys);

  const findDeliveryIndex = () => deliverys.findIndex((currDe: DeliveryI) => {
    return currDe.id === Number(id);
  });

  const nextDelivery = () => {
    const nextDelivery = deliverys[findDeliveryIndex() + 1].id;
    window.location.href = `http://localhost:3000/deliveryDetails/${nextDelivery}`;
  };
  
  const prevDelivery = () => {
    const prevDelivery = deliverys[findDeliveryIndex() - 1].id;
    window.location.href = `http://localhost:3000/deliveryDetails/${prevDelivery}`;
  };

  const handleTravelMode = (travelModeSelected: string) => {
    window.location.href = `http://localhost:3000/deliveryDetails/${id}/${travelModeSelected}`;
  };

  return (
    <aside className={styles.aside_container}>
      <section className={styles.aside_limit}>
        <h1>Detalhes da entrega</h1>
        <span>Cliente: <strong>{ currDelivery?.client }</strong></span>
        <span>Data da entrega <strong>{formatDate(currDelivery?.deliveryDate)}</strong></span>
        <span>Saida: <strong>{currDelivery?.deliverysDestination.departureName}</strong></span>
        <span>Destino: <strong>{currDelivery?.deliverysDestination.destinyName}</strong></span>
        <section className={styles.btn_area}>
          <button
            className={styles.next_prev_btn} disabled={!deliverys[findDeliveryIndex() -1]}
            onClick={prevDelivery}
          >
            {"<"}
          </button>
          <button
            className={styles.next_prev_btn}
            disabled={!deliverys[findDeliveryIndex() +1]} onClick={nextDelivery}>
            {">"}
          </button>
        </section>
        <section className={styles.travel_mode_container}>
          <h1>Modo de viagem</h1>
          { Object.keys(travelModes).map((currTravelMode: string) => (
            <button 
              onClick={() => handleTravelMode(travelModes[currTravelMode as keyof ITravelModes])}
              style={{
                backgroundColor: travelMode === travelModes[currTravelMode as keyof ITravelModes]
                  ? "#172535" : "#28405d"
              }}
              key={currTravelMode}>
              { currTravelMode }
            </button>
          )) }
        </section>
        <section className={styles.anothe_deliverys}>
          <h2>
            Outras entregas
          </h2>
          {
            deliverys.map((delivery: DeliveryI) => (
              <DeliveryDetailField key={delivery.id} delivery={delivery} />
            ))
          }
        </section>
      </section>
    </aside>
  );
}
