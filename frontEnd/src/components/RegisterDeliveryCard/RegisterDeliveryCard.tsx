import React, { FormEvent, useEffect, useState } from "react";
import { LoadScript } from "@react-google-maps/api";
import "react-calendar/dist/Calendar.css";
import { useDispatch } from "react-redux";
import { CreateDeliverys } from "../../redux/actions/delivery/CreateDelivery";
import { validateClient, validateDate, validateDestination, validateExit } from "../../utils/validateNewDeliveryProps";
import MapSearchBox from "../MapSearchBox/MapSearchBox";

export default function RegisterDeliveryCard() {
	const dispatch = useDispatch();

	const [exitCoordenate, setExitCoordenate] = useState("");
	const [destinyCoordenate, setDestinyCoordenate] = useState("");
  
	const [exitName, setExitName] = useState<any>("");
	const [destinyName, setDestinyName] = useState<any>("");

	const [client, setClient] = useState("");
	const [deliveryDate, setDeliveryDate] = useState("");
	const [error, setError] = useState("");

	const [buttonDisabled, setButtonDisabled] = useState(true);

	const handleDate = (dateSelected: string) => {
		if(new Date(dateSelected) < new Date()) {
			return setError("A data de entrega não pode ser menor que a data atual");
		}
		setError("");
		setDeliveryDate(dateSelected);
	};

	const handleDelivery = (e: FormEvent) => {
		e.preventDefault();
		dispatch(CreateDeliverys({
			client,
			deliveryDate,
			departureCoordenate: exitCoordenate,
			departureName: exitName,
			destinyCoordenate: destinyCoordenate,
			destinyName: destinyName,
		}));
		setTimeout(() => window.location.href = "/", 1000);
	};

	useEffect(() => {
		if(validateClient(client) && validateDate(deliveryDate)
    && validateDestination(destinyCoordenate) && validateExit(exitCoordenate)) {
			setButtonDisabled(false);
		} else {
			setButtonDisabled(true);
		}
	}, [client, destinyCoordenate, exitCoordenate, deliveryDate]);

	return (
		<form>
			<h2>Cadastrar entrega</h2>
			<input  
				onChange={({ target: { value } }) => setClient(value) }
				placeholder='Cliente'
			/>
			<LoadScript
				googleMapsApiKey='AIzaSyDrAGiZgxfTandddrIDtqnVK6UXqgoWp1k'
				libraries={["places"]}
			>
				<MapSearchBox
					role='Saida'
					setName={(name: string | undefined) => setExitName(name)}
					setCoordenate={(coordenate: string) => setExitCoordenate(coordenate)}
				/>
				<MapSearchBox
					role='Destino'
					setName={(name: string | undefined) => setDestinyName(name)}
					setCoordenate={(coordenate: string) => setDestinyCoordenate(coordenate)}
				/>
			</LoadScript>
			<label>
				<span>Data de entrega</span>
				<input
					value={deliveryDate}
					onChange={({target}) => handleDate(target.value)}
					type={"date"}
				/>
				{ error && <span>{error}</span> }
			</label>
			<button
				style={{
					border: buttonDisabled ? "1px solid red" : "none"
				}}
				disabled={buttonDisabled} onClick={handleDelivery}>
          Cadastrar entrega
			</button>
		</form>
	);
}
