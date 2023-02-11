import { StandaloneSearchBox } from '@react-google-maps/api';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { DeliveryI, IEditingDelivery } from '../../interfaces/globalState/DeliveryI';
import { DeleteDeliverys } from '../../redux/actions/delivery/DeleteDelivery';
import { EditDelivery } from '../../redux/actions/delivery/EditDelivery';
import { editingDeliveryValues } from '../../utils/editingDelivery';
import { formatDate } from '../../utils/formatDate';

interface IDeliveryFieldProps {
  currDelivery: DeliveryI;
}

export default function DeliveryField({ currDelivery }: IDeliveryFieldProps) {
  const [editing, setEditing] = useState(false);
  const [delet, setDelet] = useState(false);
  const [searchBoxA, setSeartchBoxA] = useState<google.maps.places.SearchBox>();
  const [searchBoxB, setSeartchBoxB] = useState<google.maps.places.SearchBox>();
  const [editingDelivery, setEditingDelivery] = useState<IEditingDelivery>(editingDeliveryValues);

  const dispatch = useDispatch();

  const [exitCoordenate, setExitCoordenate] = useState('');
  const [destinyCoordenate, setDestinyCoordenate] = useState('');
  
  const [exitName, setExitName] = useState<any>('');
  const [destinyName, setDestinyName] = useState<any>('');

  const onLoadSearchBoxA = (ref: google.maps.places.SearchBox) => {
    setSeartchBoxA(ref);
  };

  const onLoadSearchBoxB = (ref: google.maps.places.SearchBox) => {
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

  const confirmEditing = () => {
    dispatch(EditDelivery({
      ...editingDelivery, departureName: exitName, departureCoordenate: exitCoordenate, destinyCoordenate, destinyName      
    }));
  };

  const { client, deliveryDate, deliverysDestination: { 
    departureCoordenate, departureName, destinyCoordenate: currDesCoordenate,
    destinyName: currDestinyName }, id } = currDelivery;

  const handleEditing = () => {
    if(!editing) {
      setEditing(true)
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
    setEditing(!editing)
    confirmEditing();
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
                <input
                  onChange={({target}) => setEditingDelivery({...editingDelivery, client: target.value})}
                  value={editingDelivery?.client}
                />
              </td>
              <td>
                <input
                  onChange={({target}) => setEditingDelivery({...editingDelivery, deliveryDate: target.value})}
                  type={'date'}
                />
              </td>
              <td>
                <StandaloneSearchBox 
                onLoad={onLoadSearchBoxA} 
                onPlacesChanged={onPlacesChangedA}
                >
                  <input placeholder='Saida'/>
                </StandaloneSearchBox>
              </td>
              <td>
                <StandaloneSearchBox 
                onLoad={onLoadSearchBoxB} 
                onPlacesChanged={onPlacesExitChangedB}
                >
                  <input placeholder='Destino'/>
                </StandaloneSearchBox>
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
