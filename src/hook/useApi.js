import {useCallback, useState, useEffect} from "react";
import axios from "axios";

function useApi(url, defaultValue=[]){
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchData = useCallback( async () => {
        setLoading(true);
        try {
            const res = await axios.get(url );
            console.log(res);
            setError(null);
            setData(res.data);
        } catch (error) {
            setError(error);
            setData(null);
        }
        setLoading(false);
    },[url]);
    useEffect(() => {
       fetchData();
    },[fetchData]);

    return{
        data,
        error,
        loading
    } 
}

export default useApi;