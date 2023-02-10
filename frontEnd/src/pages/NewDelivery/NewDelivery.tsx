import styles from './styles.module.css';
import 'react-calendar/dist/Calendar.css';
import RegisterDeliveryCard from '../../components/RegisterDeliveryCard/RegisterDeliveryCard';

export default function NewDelivery() {
  return (
    <main className={styles.new_delivery_container} >
      <RegisterDeliveryCard />
    </main>
  )
}
