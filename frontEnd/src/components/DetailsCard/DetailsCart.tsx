import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { DeliveryI } from '../../interfaces/globalState/DeliveryI';
import GlobalStateI from '../../interfaces/globalState/GlobalStateI';

interface IDetailsCard {
  currDelivery: DeliveryI | null;
}

export default function DetailsCart({ currDelivery }: IDetailsCard) {
  const { id }: any = useParams();
  const { deliverys } = useSelector(({ deliverys }: GlobalStateI) => deliverys);

  const next = () => window.location.href = `http://localhost:3000/deliveryDetails/${Number(id) + 1}`;
  const prev = () => window.location.href = `http://localhost:3000/deliveryDetails/${Number(id) - 1}`;

  return (
    <section>
      <h1>{ currDelivery?.client }</h1>
        <span>{ currDelivery?.deliveryDate.toLocaleString() }</span>
      <nav>
        <button disabled={!deliverys[deliverys.findIndex((currDe: DeliveryI) => {
          return currDe.id === Number(id);
          }) -1]} onClick={prev}>
          {'<'}
          </button>
          <button disabled={!deliverys[deliverys.findIndex((currDe: DeliveryI) => {
          return currDe.id === Number(id);
          }) +1]} onClick={next}>
            {'>'}
          </button>
      </nav>
    </section>
  )
}
