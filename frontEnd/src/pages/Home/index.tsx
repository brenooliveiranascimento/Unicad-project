import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import UseFetch from '../../customHooks/UseFetch';
import { GetDeliverys } from '../../redux/actions/deliverys/Get';

export default function Home() {

  // const { data, loading, error } = UseFetch('delivery/get');

  // if(loading) return <h1>loading</h1>;

  // if(error) return <h1>error</h1>;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetDeliverys());
  }, []);

  return (
    <main>
      dajiwojdw
    </main>
  )
}
