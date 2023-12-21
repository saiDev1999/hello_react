import axios from "axios"
import { useEffect, useState } from "react"

const useAxios =(URL)=>{
   const[data,setData]=useState([])
   const [error,setError]=useState(null)

    useEffect(()=>{
        loadApi()       
    },[])
    const loadApi=()=>{
        axios.get(URL)
        .then(response=>setData(response.data))
        .catch(response=>setError(response.message))
    }
    return [data,error]
}
export default useAxios