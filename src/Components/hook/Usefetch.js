import axios from 'axios'
import { useEffect, useState } from 'react'




const useFetch = (url) =>{

    let [data,setData]=useState([])
    const [isloading,setLoading]=useState(false)
    const [err,setError]=useState(null)

    async function getData(){
        return await axios.get(url)
    }

    useEffect(()=>{
        setLoading(true)
        getData()
        .then((res) => {
            setData(res.data)
            setError(null)
        })
        .catch((err)=>{
            setError(err)
        }).finally(()=> setLoading(false))
    },[url])

    return {
        data,
        isloading,
        err
    }
}

export default useFetch;