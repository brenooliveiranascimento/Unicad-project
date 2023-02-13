import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { DeliveryI } from "../../interfaces/globalState/DeliveryI";
import GlobalStateI from "../../interfaces/globalState/GlobalStateI";
import { backendConnection } from "../../utils/backendConnectionEndpoint";
import styles from "./styles.module.scss";

export default function HandleDelivery() {
  const { id, travelMode }: { id: string, travelMode: string } = useParams();
  const { deliverys } = useSelector(({ deliverys }: GlobalStateI) => deliverys);

  const findDeliveryIndex = () => deliverys.findIndex((currDe: DeliveryI) => {
    return currDe.id === Number(id);
  });

  const nextDelivery = () => {
    const nextDelivery = deliverys[findDeliveryIndex() + 1].id;
    window.location.href = `${backendConnection.pageUrl}/deliveryDetails/${nextDelivery}/${travelMode}`;
  };
  
  const prevDelivery = () => {
    const prevDelivery = deliverys[findDeliveryIndex() - 1].id;
    window.location.href = `${backendConnection.pageUrl}/deliveryDetails/${prevDelivery}/${travelMode}`;
  };
  return (
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
  );
}
