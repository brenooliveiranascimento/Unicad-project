import { LoadScript, StandaloneSearchBox } from '@react-google-maps/api';
import { FormEvent, useEffect, useState } from 'react';
import styles from './styles.module.css';
import 'react-calendar/dist/Calendar.css';
import { useDispatch } from 'react-redux';
import { CreateDeliverys } from '../../redux/actions/delivery/Create';
import { validateClient, validateDate, validateDestination, validateExit } from '../../utils/validateNewDeliveryProps';
import { toast } from 'react-toastify';

export default function RegisterDeliveryCard() {
  const dispatch = useDispatch();

  const [searchBoxA, setSeartchBoxA] = useState<google.maps.places.SearchBox>();
  const [searchBoxB, setSeartchBoxB] = useState<google.maps.places.SearchBox>();

  const [exit, setExit] = useState('');
  const [destiny, setDestiny] = useState('');
  
  const [client, setClient] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');
  const [error, setError] = useState('');

  const [buttonDisabled, setButtonDisabled] = useState(true);

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
    setExit(`${location.lat} ${location.lng}`);
  };

  const onPlacesExitChangedB = () => {
    const places = searchBoxB!.getPlaces();

    const place = places![0];
    const location = {
      lat: place?.geometry?.location?.lat() || 0,
      lng: place?.geometry?.location?.lng() || 0,
    };
    setDestiny(`${location.lat} ${location.lng}`);
  };

  const handleDate = (dateSelected: string) => {
    if(new Date(dateSelected) < new Date()) {
      return setError('A data de entrega não pode ser menor que a data atual');
    };
    setError('');
    setDeliveryDate(dateSelected)
  };

  const handleDelivery = (e: FormEvent) => {
    e.preventDefault();
    toast.success('Entrega agendada com sucesso!');
    dispatch(CreateDeliverys({ client, deliveryDate, departure: exit, destiny: destiny }));
  }

  useEffect(() => {
    if(validateClient(client) && validateDate(deliveryDate)
    && validateDestination(destiny) && validateExit(exit)) {
      setButtonDisabled(false)
      console.log('abilitado')
    } else {
      setButtonDisabled(true)
      console.log('desabilitado')
    };
  }, [client, exit, destiny, deliveryDate]);
  
  return (
  <form>
        <h2>Cadastrar entrega</h2>
        <input  
          onChange={({ target: { value } }) => setClient(value) }
          placeholder='Cliente'
        />
          <LoadScript
            googleMapsApiKey='AIzaSyDrAGiZgxfTandddrIDtqnVK6UXqgoWp1k'
            libraries={['places']}
          >
            <StandaloneSearchBox 
              onLoad={onLoada} 
              onPlacesChanged={onPlacesChangedA}
            >
              <input className={styles.search_input} placeholder='Saida'/>
            </StandaloneSearchBox>
            <StandaloneSearchBox 
              onLoad={onLoadb} 
              onPlacesChanged={onPlacesExitChangedB}
            >
              <input className={styles.search_input} placeholder='Destino'/>
            </StandaloneSearchBox>
          </LoadScript>
          <label>
            <span>Data de entrega</span>
            <input
              value={deliveryDate}
              onChange={({target}) => handleDate(target.value)}
              type={'date'}
            />
            { error && <span>{error}</span> }
          </label>
        <button
          style={{
            border: buttonDisabled ? '1px solid red' : 'none'
          }}
          disabled={buttonDisabled} onClick={handleDelivery}>
          Cadastrar entrega
        </button>
      </form>
  )
}
