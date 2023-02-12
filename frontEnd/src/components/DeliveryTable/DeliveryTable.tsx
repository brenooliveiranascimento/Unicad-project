import { LoadScript } from '@react-google-maps/api';
import { useSelector } from 'react-redux'
import { DeliveryI } from '../../interfaces/globalState/DeliveryI';
import GlobalStateI from '../../interfaces/globalState/GlobalStateI';
import DeliveryField from '../DeliveryField/DeliveryField';
import styles from './styles.module.css'

export default function DeliveryTable() {

  const { deliverys } = useSelector(({ deliverys }: GlobalStateI) => deliverys);

  return (
    <section className={styles.table_container}>

        <table className={styles.customers}>
          <thead>
            <tr>
              <th>Cliente</th>
              <th>Data</th>
              <th>Saida</th>
              <th>Destino</th>
              <th>Detalhes</th>
              <th>Editar</th>
              <th>Deletar</th>
            </tr>
          </thead>
          <tbody>
            {
              deliverys.map((currDelivery: DeliveryI) => (
                <DeliveryField key={currDelivery.id} currDelivery={currDelivery} />
              ))
            }
            </tbody>
      </table>
    </section>
  )
}
