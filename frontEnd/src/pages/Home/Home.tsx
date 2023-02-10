import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Sidebar from '../../components/Sidebar/Sidebar';
import UseFetch from '../../customHooks/UseFetch';
import GlobalStateI from '../../interfaces/globalState/GlobalStateI';
import { GetDeliverys } from '../../redux/actions/delivery/Get';
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

  if(loading) return <h1>loading</h1>

  return (
    <main className={styles.home_container}>
      <Sidebar/>
      <section className={styles.main_delivery_card_container} >
        <header>
          Unicad Deliverys
        </header>
      </section>
    </main>
  )
}
