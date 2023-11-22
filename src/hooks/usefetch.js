import { useEffect, useState } from "react"

const useFetch =(URL)=>{

    const [data,setData]=useState(null)
    useEffect (()=>{
        fetch(URL).then(res=>{
            res.json().then(result=>{
             setData(result)
            })
        })
    },[])
    return data;
}
export default useFetch;