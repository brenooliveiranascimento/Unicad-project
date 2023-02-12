import React, { useState } from "react";
import { LoadScript  } from "@react-google-maps/api";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { DeliveryI, IEditingDelivery } from "../../interfaces/globalState/DeliveryI";
import { DeleteDeliverys } from "../../redux/actions/delivery/DeleteDelivery";
import { EditDelivery } from "../../redux/actions/delivery/EditDelivery";
import { editingDeliveryValues } from "../../utils/editingDelivery";
import { formatDate } from "../../utils/formatDate";
import MapSearchBox from "../MapSearchBox/MapSearchBox";

interface IDeliveryFieldProps {
  currDelivery: DeliveryI;
}

export default function DeliveryField({ currDelivery }: IDeliveryFieldProps) {
	const [editing, setEditing] = useState(false);
	const [delet, setDelet] = useState(false);
	const [editingDelivery, setEditingDelivery] = useState<IEditingDelivery>(editingDeliveryValues);

	const dispatch = useDispatch();

	const [exitCoordenate, setExitCoordenate] = useState("");
	const [destinyCoordenate, setDestinyCoordenate] = useState("");
  
	const [exitName, setExitName] = useState<any>("");
	const [destinyName, setDestinyName] = useState<any>("");

	const handleDelivery = () => {
		if(editing) return;
		window.location.href = `/deliveryDetails/${currDelivery.id}`;
	};

	const confirmEditing = () => {
		dispatch(EditDelivery({
			...editingDelivery,
			departureName: exitName,
			departureCoordenate: exitCoordenate,
			destinyCoordenate,
			destinyName      
		}));
	};

	const handleDate = (dateSelected: string) => {
		if(new Date(dateSelected) < new Date()) {
			toast.error("A data de entrega não pode ser menor que a data atual");
			return;
		}
		setEditingDelivery({...editingDelivery, deliveryDate: dateSelected});
	};

	const { client, deliveryDate, deliverysDestination: { 
		departureCoordenate, departureName, destinyCoordenate: currDesCoordenate,
		destinyName: currDestinyName }, id } = currDelivery;

	const handleEditing = () => {
		if(!editing) {
			setEditing(true);
			setEditingDelivery({
				client,
				deliveryDate: deliveryDate.toString(),
				departureName,
				departureCoordenate,
				destinyCoordenate: currDesCoordenate,
				destinyName: currDestinyName,
				id: Number(id)
			});
			return;
		}
		setEditing(!editing);
		confirmEditing();
	};

	const deleteDelivery = () => {
		if(editing)return setEditing(false);
		if(!delet) return setDelet(!delet);
		dispatch(DeleteDeliverys(currDelivery));
		setDelet(!delet);
	};

	return (
		<tr data-testid={`delivery-${currDelivery.id}`} key={currDelivery.id}>
			{
				editing ? (
					<>
						<td>
							<input
								onChange={({target}) => setEditingDelivery({...editingDelivery, client: target.value})}
								value={editingDelivery?.client}
							/>
						</td>
						<td>
							<input
								value={editingDelivery.deliveryDate}
								onChange={({target}) => handleDate(target.value)}
								type={"date"}
							/>
						</td>
						<td>
							<LoadScript
								googleMapsApiKey='AIzaSyDrAGiZgxfTandddrIDtqnVK6UXqgoWp1k'
								libraries={["places"]}
							>
								<MapSearchBox
									role='Saida'
									setName={(name: string | undefined) => setExitName(name)}
									setCoordenate={(coordenate: string) => setExitCoordenate(coordenate)}
								/>
							</LoadScript>
						</td>
						<td>
							<LoadScript
								googleMapsApiKey='AIzaSyDrAGiZgxfTandddrIDtqnVK6UXqgoWp1k'
								libraries={["places"]}
							>
								<MapSearchBox
									role='Destino'
									setName={(name: string | undefined) => setDestinyName(name)}
									setCoordenate={(coordenate: string) => setDestinyCoordenate(coordenate)}
								/>
							</LoadScript>
						</td>
					</>
				)  : (
					<>
						<td>{currDelivery.client}</td>
						<td>{formatDate(currDelivery?.deliveryDate)}</td>
						<td>{currDelivery.deliverysDestination.departureName}</td>
						<td>{currDelivery.deliverysDestination.destinyName}</td>
					</>
				)
			}
			<td>
				<button onClick={handleDelivery}>Detalhes</button>
			</td>
			<td>
				<button onClick={handleEditing}>{editing ? "Salvar" : "Editar"}</button>
			</td>
			<td>
				<button
					data-testid={`delete-${currDelivery.id}`}
					onClick={deleteDelivery}
				>{editing ? "Cancelar" : (delet ? "Confirmar" : "Deletar")}</button>
			</td>
		</tr>
	);
}
