import { LoadScript, StandaloneSearchBox } from '@react-google-maps/api';
import { useState } from 'react';
import styles from './styles.module.css';
import 'react-calendar/dist/Calendar.css';

export default function NewDelivery() {

  const [searchBox, setSeartchBox] = useState<google.maps.places.SearchBox>();
  const [client, setClient] = useState('');
  const [exit, setExit] = useState<{lat: number, lng: number}>();
  const [destiny, setDestiny] = useState<{lat: number, lng: number}>();
  const [deliveryDate, setDeliveryDate] = useState('');
  const [error, setError] = useState('');

  const onLoad = (ref: google.maps.places.SearchBox) => {
    setSeartchBox(ref)
  };

  const onPlacesChanged = (destination: string) => {
    const places = searchBox!.getPlaces();

    const place = places![0];
    const location = {
      lat: place?.geometry?.location?.lat() || 0,
      lng: place?.geometry?.location?.lng() || 0,
    };
    if(destination === 'exit') {
      setExit(location);
    } else {
      setDestiny(location);
    };
  }

  const handleDate = (dateSelected: string) => {
    if(new Date(dateSelected) < new Date()) {
      setError('A data de entrega não pode ser menor que a data atual');
      return;
    };
    setError('')
    setDeliveryDate(dateSelected)
  }

  return (
    <main className={styles.new_delivery_container} >
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
          <section className={styles.search_container}> 
            <StandaloneSearchBox onLoad={onLoad}
              onPlacesChanged={() => onPlacesChanged('exit')}>
                <input className={styles.search_input} placeholder='Saida'/>
              </StandaloneSearchBox>

              <StandaloneSearchBox onLoad={onLoad} 
                onPlacesChanged={() => onPlacesChanged('destiny')}>
                <input className={styles.search_input} placeholder='Destino'/>
              </StandaloneSearchBox>
            </section>
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
        <button>
          Cadastrar entrega
        </button>
      </form>
    </main>
  )
}
