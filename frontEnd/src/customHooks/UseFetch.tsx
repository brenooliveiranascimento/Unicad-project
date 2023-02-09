import { Axios, AxiosError, AxiosInstance, Method } from 'axios';
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import connection from '../services/api.connection';

interface fetchPropsInterface {
  url: string;
  method: Method;
}

export default function UseFetch({ url, method = 'GET' }: fetchPropsInterface) {
  const [data, setData] = useState(undefined);
  const [error, setError] = useState(undefined);
  const [loading, setLoading] = useState(false);

  const response = async () => {
    try {
      const response = await connection.get(url);
      setData(response.data);
      setLoading(false);
    } catch(e: any) { 
      toast.error('Falha na conexão');
      setError(e.response.data.message)
    };
  };

  useEffect(() => {
    setLoading(true);
    response();
  }, [url]);
  
  return { data, error, loading }
};
