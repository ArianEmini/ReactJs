import {useState} from 'react';
import Personat from './personat';
import {useEffect} from 'react';
import useFetch from './fetch';



function Content() {
    // let[Welcome,setWelcome]=useState("Mire se erdhet");
    


    // let[Mosha,setAge]=useState(60);
    // const handelClick=()=>{
    //     setAge(80);
    //     setWelcome("Shpresoj qe te ju pejqej faqja e jone")
    // Futja e te dhena 
    // const [personat,SetPersonat] = useState(null);
    // const [loading,setLoading]=useState(true);
    // const[error,setError]=useState(null);
        // [
        //     { id: 1, emri: "Arian", mbiemri: "Emini", adressa: "Bellopoje-Podujeve", shteti: "Kosove" },
        //     { id: 2, emri: "Agron", mbiemri: "Gashi", adressa: "Rr Agim Abazi", shteti: "Kosove" },
        //     { id: 3, emri: "Besmir", mbiemri: "Hyseni", adressa: "Rr E're", shteti: "Shqiperi" },
        //     { id: 4, emri: "Besi", mbiemri: "begolli", adressa: "Rr E'vjeter", shteti: "Maqedoni" }
        // ]


    // )
    // const handleDelete=(id)=>{
    // const FshijPersonat = personat.filter(personat => personat.id !== id);
    //     SetPersonat(FshijPersonat);
    // console.log("this is");
    // }

// Futja e te dhenave prej jsone file
// useEffect(()=>{
// setTimeout(()=>{
//     fetch(' http://localhost:4000/personat').then(res=>{
//         if(!res.ok){
//             throw Error('Nuk kemi arritur marrjen e te dhenave ne kete url')
//         }
//     return res.json();
// }).then(data=>{
//     SetPersonat(data)
//     setLoading(false)//Na largon looading dhe e shfaq kur ka procesim 
// })
// .catch(err=>{
//     setError(err.message)
//     setLoading(false);//E fsheh Loading kur ka error
// })
// },1000)

// },[])


//Lidhja me Fetch.js

const {personat,loading,error}=useFetch('http://localhost:4000/personat');
   

    return (
     
        <div className="lista">
            {loading && <div className="Loading">Loading...</div>}
            {error && <div className="Error">{error}</div>}
            {personat && <Personat  personat={personat} titulli="Lista e personave" ></Personat>}
        
        </div>


    );
    
}
 
export default Content;