import {useState} from "react";

const useCustomForm = () => {
    const [state, setState] = useState({});
    const handlerChange = (e) =>{
        setState({...state, [e.target.name] : e.target.value})
    };
    return [state, handlerChange];
}

export default useCustomForm;