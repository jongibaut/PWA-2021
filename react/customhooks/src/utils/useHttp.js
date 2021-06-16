import { useState, useEffect } from "react";
import axios from "axios";

const useGet = ({initialState = [], url, params = {}}) => {
    const [data, setData] = useState(initialState);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const get = async()=>{
            try {
            const {data} = await axios.get(url, params);
            setData(data);
            console.log(data);
            setLoading(false);
            }
            catch (error) {
                console.error(error);
            }
        }
       get();
    }, [url]);

    return [data, loading]; 
}

export default useGet;