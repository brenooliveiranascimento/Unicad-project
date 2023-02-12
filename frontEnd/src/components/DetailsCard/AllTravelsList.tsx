import React from "react";
import { useSelector } from "react-redux";
import { DeliveryI } from "../../interfaces/globalState/DeliveryI";
import GlobalStateI from "../../interfaces/globalState/GlobalStateI";
import DeliveryDetailField from "../DeliveryDetailField/DeliveryDetailField";
import styles from "./styles.module.css";

export default function AllTravelsList() {
  const { deliverys } = useSelector(({ deliverys }: GlobalStateI) => deliverys);
  return (
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
  );
}
