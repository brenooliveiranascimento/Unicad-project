import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { DeliveryI } from '../../interfaces/globalState/DeliveryI';
import GlobalStateI from '../../interfaces/globalState/GlobalStateI';

export default function DeliveryTable() {
  const dispatch = useDispatch();

  const { deliverys } = useSelector(({ deliverys }: GlobalStateI) => deliverys);

  const handleDelivery = (currDelivery: DeliveryI) => {
    window.location.href = `/deliveryDetails/${currDelivery.id}`;
  };

  return (
    <table>
      <thead>
        <th>Cliente</th>
        <td>Data</td>
        <td>Saida</td>
        <td>Destino</td>
      </thead>
      <tbody>
        {
          deliverys.map((currDelivery: DeliveryI) => {
            let day = new Date(currDelivery.deliveryDate).getDate();
            let month = new Date(currDelivery.deliveryDate).getMonth();
            let year = new Date(currDelivery.deliveryDate).getFullYear();
            return (
                <tr onClick={() => handleDelivery(currDelivery)} key={currDelivery.id}>
                  <td>{currDelivery.client}</td>
                  <td>{`${day}/${month}/${year}`}</td>
                  <td>{currDelivery.deliverysDestination.departureName}</td>
                  <td>{currDelivery.deliverysDestination.destinyName}</td>
                </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}
