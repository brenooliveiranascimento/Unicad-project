import React from "react";
import { useParams } from "react-router-dom";
import { DeliveryI } from "../../interfaces/globalState/DeliveryI";
import { backendConnection } from "../../utils/backendConnectionEndpoint";
import { formatDate } from "../../utils/formatDate";

interface IDeliveryDetailsField {
  delivery: DeliveryI;
}

export default function DeliveryDetailField({ delivery }: IDeliveryDetailsField) {

  const { id, travelMode }: { id: string, travelMode: string } = useParams();

  const goDelivery = () => {
    window.location.href = `${backendConnection.pageUrl}/deliveryDetails/${Number(delivery.id)}/${travelMode}`;
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
