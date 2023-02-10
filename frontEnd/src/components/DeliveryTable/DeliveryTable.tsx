import React from 'react'
import { useSelector } from 'react-redux'
import { DeliveryI } from '../../interfaces/globalState/DeliveryI';
import GlobalStateI from '../../interfaces/globalState/GlobalStateI';

export default function DeliveryTable() {
  const {
    deliverys
  } = useSelector(({ 
    deliverys
  }: GlobalStateI) => deliverys);

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
                <tr onClick={() => alert(currDelivery.client)} key={currDelivery.id}>
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
