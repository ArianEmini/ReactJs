import { useState } from "react"
import { useEffect } from "react"
// import {useFetch} from 'react'
// import Content from "./content"

const useFetch=(url)=>{
     //Huks
    const [personat,SetPersonat] = useState(null);
    const [loading,setLoading]=useState(true);
    const[error,setError]=useState(null);
    useEffect(()=>{  
        setTimeout(()=>{
            fetch(url).then(res=>{
                if(!res.ok){
                    throw Error('Nuk kemi arritur marrjen e te dhenave ne kete url')
                }
            return res.json();
        }).then(data=>{
            SetPersonat(data)
            setLoading(false)//Na largon looading dhe e shfaq kur ka procesim 
        })
        .catch(err=>{
            setError(err.message)
            setLoading(false);//E fsheh Loading kur ka error
        })
        },1000)
        

        },[])
        return {personat,loading,error};
}

export default useFetch;