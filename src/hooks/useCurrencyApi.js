import { useEffect, useState } from 'react';


const useCurrencyApi = () => {
    let apiKey = "7391a8a250391428cfdbcdff03cf4a4d";
    let url = "http://data.fixer.io/api/latest?access_key=" + apiKey;

    const [error, setError] = useState(null);
    const [data, setData] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(result => {
                setIsLoaded(true);
                setData(result.rates);
            },
            error => {
                setIsLoaded(true);
                setError(error);
            }
        )
    }, [url]);

    return { error, data, isLoaded };
}

export default useCurrencyApi;