import styles from './styles.module.css';
import 'react-calendar/dist/Calendar.css';
import RegisterDeliveryCard from '../../components/RegisterDeliveryCard/RegisterDeliveryCard';
import Sidebar from '../../components/Sidebar/Sidebar';

export default function NewDelivery() {
  return (
    <main className={styles.new_delivery_container} >
      <Sidebar/>
      <section className={styles.main_delivery_card_container}>
        <RegisterDeliveryCard />
      </section>
    </main>
  )
}
