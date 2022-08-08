import React,{useEffect,useState} from 'react'
import axios from "axios";
import config from "../config";

const Api = () => {
   const [state,setState]=useState("");
   const [input,setInput]=useState({
    name:"",
    email:""
   })

  useEffect(()=>{
    axios.get(`${config.url}`).then(response=>{
      setState(response.data);

    }).catch(err=>{
      console.log(err);
    })

  },[])


  const handleChange=(event)=>{
    setInput({...input,[event.target.name]:event.target.value});

  }

  const handleClick=()=>{
    axios.post(`${config.url}/data`,input).then(response=>{
      setState(response.data);

    }).catch(err=>{
      console.log(err);
    })
  }

  return (
    <div>Api
     <h1>{state}</h1>

<input type={"text"} name={"name"} onChange={handleChange} /><br/>

<input type={"text"} name={"email"} onChange={handleChange}/><br/>

<button onClick={handleClick}>

  Submit
</button>





    </div>
  )
}

export default Api