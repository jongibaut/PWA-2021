import { useEffect, useState } from "react";
import axios from "axios"; //npm i axios

const useGet = ({url, params = {}, initialState = []}) => {
    const [data, setData] = useState(initialState);
    const [error, setError] = useState(false);
    
    useEffect(() => {
        const get = async() => {
            try{
                const { data : personajes } = await axios.get(url, params);
                setData(personajes.results);
            }
            catch(err){
                setError(true);
            } 
        }
        get();
    }, [url, params]);
    return [data, error];

}

const usePost = async(url, obj) => {
    const [data, setData] = useState({});
    const [error, setError] = useState(false);
    const post = async() => {
        try {
            setData(await axios.post(url, obj))
        } catch (err) {
            setError(true);
        }
    }
    return [data, error, post] 
}

export {useGet, usePost};