import { GoogleMap, LoadScript, StandaloneSearchBox } from '@react-google-maps/api';
import { useState } from 'react';
import styles from './styles.module.css';

export default function NewDelivery() {

  const [searchBox, setSeartchBox] = useState<google.maps.places.SearchBox>();

  const [exit, setExit] = useState<{lat: number, lng: number}>();
  const [destiny, setDestiny] = useState<{lat: number, lng: number}>();

  const onLoad = (ref: google.maps.places.SearchBox) => {
    setSeartchBox(ref)
  }

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

  return (
    <main className={styles.new_delivery_container} >
      <form>
        <h2>Cadastrar entrega</h2>
        <input
          placeholder='Cliente'
        />
                <LoadScript
          googleMapsApiKey='AIzaSyDrAGiZgxfTandddrIDtqnVK6UXqgoWp1k'
          libraries={['places']}
        >
        <section className={styles.search_container}> 
            <StandaloneSearchBox onLoad={onLoad}
              onPlacesChanged={() => onPlacesChanged('exit')}
            >
              <input className={styles.search_input} placeholder='Saida'/>
            </StandaloneSearchBox>
            <StandaloneSearchBox onLoad={onLoad} 
              onPlacesChanged={() => onPlacesChanged('destiny')}>
              <input className={styles.search_input} placeholder='Destino'/>
            </StandaloneSearchBox>
          </section>
        </LoadScript>
        <button>
          Cadastrar entrega
        </button>
      </form>
    </main>
  )
}
