import { TextField } from '@mui/material'
import React, { useState } from 'react'

const Eg2 = () => {

var[val,setVal]=useState({id:'',age:''});
const inputHandler = (e)=>{
 const{name,value} =e.target
    setVal((val)=>({...val,[name]:value}))
}

    
         return (
    <div>
        <br/><br/>
        <TextField label='id' name='id' value={val.id} onChange={inputHandler}/> 

        <br/><br/>  
        <TextField label='age' name='age' value={val.age} onChange={inputHandler}/><br/><br/> 
     id: {val.id}<br/>
     name: {val.age}<br/>
     
        </div>
  )
}

export default Eg2