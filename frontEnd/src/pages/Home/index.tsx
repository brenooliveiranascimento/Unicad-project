import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import UseFetch from '../../customHooks/UseFetch';
import GlobalStateI from '../../interfaces/globalState/GlobalStateI';
import { GetDeliverys } from '../../redux/actions/delivery/Get';

export default function Home() {

  const {
    deliverys,
    error,
    loading
  } = useSelector(({ deliverys }: GlobalStateI) => deliverys);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetDeliverys());
  }, []);

  if(loading) return <h1>loading</h1>

  return (
    <main>
      <header>
        Unicad Deliverys
      </header>
    </main>
  )
}
