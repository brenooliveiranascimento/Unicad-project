import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DeliveryTable from "../../components/DeliveryTable/DeliveryTable";
import Sidebar from "../../components/Sidebar/Sidebar";
import GlobalStateI from "../../interfaces/globalState/GlobalStateI";
import { GetDeliverys } from "../../redux/actions/delivery/GetDeliverys";
import styles from "./styles.module.scss";

export default function Home() {

  const {
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
  );
}
