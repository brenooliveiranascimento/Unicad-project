import { LoadScript } from '@react-google-maps/api';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { DeliveryI } from '../../interfaces/globalState/DeliveryI';
import GlobalStateI from '../../interfaces/globalState/GlobalStateI';
import DeliveryField from '../DeliveryField/DeliveryField';
import styles from './styles.module.css'
export default function DeliveryTable() {
  const dispatch = useDispatch();

  const { deliverys } = useSelector(({ deliverys }: GlobalStateI) => deliverys);

  return (
    <section className={styles.table_container}>
      <LoadScript
        googleMapsApiKey='AIzaSyDrAGiZgxfTandddrIDtqnVK6UXqgoWp1k'
        libraries={['places']}
      >
      <table className={styles.customers}>
      <thead>
        <th>Cliente</th>
        <th>Data</th>
        <th>Saida</th>
        <th>Destino</th>
        <th>Detalhes</th>
        <th>Deletar</th>
        <th>Atualizar</th>
      </thead>
      <tbody>
        {
          deliverys.map((currDelivery: DeliveryI) => (
            <DeliveryField key={currDelivery.id} currDelivery={currDelivery} />
          ))
        }
      </tbody>
    </table>
    </LoadScript>
    </section>
  )
}
