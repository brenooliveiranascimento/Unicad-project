import React from "react";
import { useParams } from "react-router-dom";
import { DeliveryI } from "../../interfaces/globalState/DeliveryI";
import { formatDate } from "../../utils/formatDate";

interface IDeliveryDetailsField {
  delivery: DeliveryI;
}

export default function DeliveryDetailField({ delivery }: IDeliveryDetailsField) {

  const { id }: { id: string } = useParams();

  const goDelivery = () => {
    window.location.href = `http://localhost:3000/deliveryDetails/${Number(delivery.id)}`;
  };

  return (
    <button
      style={{
        backgroundColor: Number(id) === delivery.id ? "#335276" : "#477fc0"
      }}
      onClick={goDelivery}>
      <span>{ delivery.client }: { formatDate(delivery?.deliveryDate.toString()) }</span>
    </button>
  );
}
