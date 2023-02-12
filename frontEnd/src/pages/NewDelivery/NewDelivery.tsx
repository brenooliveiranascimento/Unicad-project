import React from "react";
import styles from "./styles.module.css";
import "react-calendar/dist/Calendar.css";
import RegisterDeliveryCard from "../../components/RegisterDeliveryCard/RegisterDeliveryCard";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useEffect } from "react";
import { GetDeliverys } from "../../redux/actions/delivery/GetDeliverys";
import { useDispatch } from "react-redux";

export default function NewDelivery() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(GetDeliverys());
	}, []);
	return (
		<main className={styles.new_delivery_container} >
			<Sidebar/>
			<section className={styles.main_delivery_card_container}>
				<RegisterDeliveryCard />
			</section>
		</main>
	);
}
