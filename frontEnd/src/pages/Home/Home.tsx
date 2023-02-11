import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import DeliveryTable from '../../components/DeliveryTable/DeliveryTable';
import Sidebar from '../../components/Sidebar/Sidebar';
import UseFetch from '../../customHooks/UseFetch';
import { DeliveryI } from '../../interfaces/globalState/DeliveryI';
import GlobalStateI from '../../interfaces/globalState/GlobalStateI';
import { GetDeliverys } from '../../redux/actions/delivery/GetDeliverys';
import styles from './styles.module.css';

export default function Home() {

  const {
    deliverys,
    error,
    loading
  } = useSelector(({ deliverys }: GlobalStateI) => deliverys);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetDeliverys());
  }, []);

  return (
    <main className={styles.home_container}>
      <Sidebar/>
      <section className={styles.main_delivery_card_container} >
        { loading ? <h1>Loading</h1> : <DeliveryTable /> }
      </section>
    </main>
  )
}
