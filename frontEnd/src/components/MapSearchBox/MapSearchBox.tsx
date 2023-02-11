import { StandaloneSearchBox } from '@react-google-maps/api';
import React, { useState } from 'react'

interface IMapSearch {
  setCoordenate: (coordenate: string) => void
  setName: (name: string | undefined) => void;
};

export default function MapSearchBox({ setCoordenate, setName }: IMapSearch) {
  const [searchBoxB, setSeartchBoxB] = useState<google.maps.places.SearchBox>();

  const onLoadSearchBoxB = (ref: google.maps.places.SearchBox) => {
    setSeartchBoxB(ref);
  };

  const onPlacesExitChangedB = () => {
    const places = searchBoxB!.getPlaces();
    const place = places![0];
    const location = {
      lat: place?.geometry?.location?.lat() || 0,
      lng: place?.geometry?.location?.lng() || 0,
    };
    setCoordenate(`${location.lat} ${location.lng}`);
    setName(place.formatted_address);
  };
  return (
    <StandaloneSearchBox
    onLoad={onLoadSearchBoxB} 
    onPlacesChanged={onPlacesExitChangedB}
    >
      <input placeholder='Destino'/>
    </StandaloneSearchBox>
  )
}
