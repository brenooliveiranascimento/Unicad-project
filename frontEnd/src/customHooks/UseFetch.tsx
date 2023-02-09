import { useState } from 'react'

interface fetchPropsInterface {
  url: string
}

export default function UseFetch({ url }: fetchPropsInterface) {
  const [data, setData] = useState(undefined);
  const [error, setError] = useState(undefined);
  const [loading, setLoading] = useState(false);
  
  return { data, error, loading }
};
