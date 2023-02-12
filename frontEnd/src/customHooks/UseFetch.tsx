import { useEffect, useState } from "react";
import connection from "../services/api.connection";

export default function UseFetch(url: string) {
	const [data, setData] = useState(undefined);
	const [error, setError] = useState(undefined);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		connection.get(url).then(({ data }: any) => setData(data))
			.catch(({ response: { data } }: any) => setError(data.error))
			.finally(() => setLoading(false));
	}, [url]);
  
	return { data, error, loading };
}
