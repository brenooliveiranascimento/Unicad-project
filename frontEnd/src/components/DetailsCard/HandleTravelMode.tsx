import React from "react";
import { useParams } from "react-router-dom";
import { backendConnection } from "../../utils/backendConnectionEndpoint";
import { ITravelModes, travelModes } from "../../utils/travelModes";
import styles from "./styles.module.css";

export default function HandleTravelMode() {
  const { id, travelMode }: { id: string, travelMode: string } = useParams();

  const handleTravelMode = (travelModeSelected: string) => {
    window.location.href = `${backendConnection.pageUrl}/${id}/${travelModeSelected}`;
  };

  return (
    <section className={styles.travel_mode_container}>
      <h1>Modo de viagem</h1>
      { Object.keys(travelModes).map((currTravelMode: string) => (
        <button 
          onClick={() => handleTravelMode(travelModes[currTravelMode as keyof ITravelModes])}
          style={{
            backgroundColor: travelMode === travelModes[currTravelMode as keyof ITravelModes]
              ? "#172535" : "#28405d"
          }}
          key={currTravelMode}>
          { currTravelMode }
        </button>
      )) }
    </section>
  );
}
