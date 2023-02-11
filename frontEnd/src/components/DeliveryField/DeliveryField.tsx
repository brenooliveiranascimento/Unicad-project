import { StandaloneSearchBox } from '@react-google-maps/api';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { DeliveryI } from '../../interfaces/globalState/DeliveryI';
import { DeleteDeliverys } from '../../redux/actions/delivery/DeleteDelivery';

interface IDeliveryFieldProps {
  currDelivery: DeliveryI;
}

export default function DeliveryField({ currDelivery }: IDeliveryFieldProps) {
  const [editing, setEditing] = useState(false);
  const [delet, setDelet] = useState(false);
  const [searchBoxA, setSeartchBoxA] = useState<google.maps.places.SearchBox>();
  const [searchBoxB, setSeartchBoxB] = useState<google.maps.places.SearchBox>();

  const dispatch = useDispatch();

  const [exitCoordenate, setExitCoordenate] = useState('');
  const [destinyCoordenate, setDestinyCoordenate] = useState('');
  
  const [exitName, setExitName] = useState<any>('');
  const [destinyName, setDestinyName] = useState<any>('');

  const onLoada = (ref: google.maps.places.SearchBox) => {
    setSeartchBoxA(ref);
  };

  const onLoadb = (ref: google.maps.places.SearchBox) => {
    setSeartchBoxB(ref);
  };

  const onPlacesChangedA = () => {
    const places = searchBoxA!.getPlaces();
    const place = places![0];
    const location = {
      lat: place?.geometry?.location?.lat() || 0,
      lng: place?.geometry?.location?.lng() || 0,
    };
    setExitCoordenate(`${location.lat} ${location.lng}`);
    setExitName(place.formatted_address);
  };

  const onPlacesExitChangedB = () => {
    const places = searchBoxB!.getPlaces();
    const place = places![0];
    const location = {
      lat: place?.geometry?.location?.lat() || 0,
      lng: place?.geometry?.location?.lng() || 0,
    };
    setDestinyCoordenate(`${location.lat} ${location.lng}`);
    setDestinyName(place.formatted_address);
  };


  const handleDelivery = () => {
    if(editing) return
    window.location.href = `/deliveryDetails/${currDelivery.id}`;
  };

  let day = new Date(currDelivery.deliveryDate).getDate();
  let month = new Date(currDelivery.deliveryDate).getMonth();
  let year = new Date(currDelivery.deliveryDate).getFullYear();

  const [currEditing, setCurrEditng] = useState<DeliveryI | null>();

  const handleEditing = () => {
    setCurrEditng(currDelivery);
    setEditing(!editing)
  };

  const deleteDelivery = () => {
    if(editing)return setEditing(false);
    if(!delet) return setDelet(!delet);
    dispatch(DeleteDeliverys(currDelivery));
    setDelet(!delet);
  }

  return (
    <tr key={currDelivery.id}>
      {
        editing ? (
          <>
              <td>
                <input value={currEditing?.client} />
              </td>
              <td>
                <input type={'date'} />
              </td>
              <td>
                <StandaloneSearchBox 
                onLoad={onLoada} 
                onPlacesChanged={onPlacesChangedA}
                >
                  <input placeholder='Saida'/>
                </StandaloneSearchBox>
              </td>
              <td>
                <StandaloneSearchBox 
                onLoad={onLoadb} 
                onPlacesChanged={onPlacesExitChangedB}
                >
                  <input placeholder='Destino'/>
                </StandaloneSearchBox>
              </td>
          </>
        )  : (
          <>
            <td>{currDelivery.client}</td>
            <td>{`${day}/${month}/${year}`}</td>
            <td>{currDelivery.deliverysDestination.departureName}</td>
            <td>{currDelivery.deliverysDestination.destinyName}</td>
          </>
        )
      }
      <td>
        <button onClick={handleDelivery}>Detalhes</button>
      </td>
      <td>
        <button onClick={handleEditing}>{editing ? 'Salvar' : 'Editar'}</button>
      </td>
      <td>
        <button
          onClick={deleteDelivery}
        >{editing ? 'Cancelar' : (delet ? 'Confirmar' : 'Deletar')}</button>
      </td>
    </tr>
  )
}
