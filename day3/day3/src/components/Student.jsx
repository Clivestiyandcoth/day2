import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Student = () => {
  var[inputs,setInputs]= useState({sname:'',sgrade:''})

  const inputHandlar = (e)=>{
    const{name,value}= e.target
    setInputs((inputs)=>({...inputs,[name]:value})) 
  }
  const readValue = ()=>{
    console.log("clicked")
    console.log("inputs:",inputs);
    axios.post("http://localhost:8080/create",inputs)
    .then((response)=>{
    alert("success")
    window.location.reload(false)

    })
    .catch(err=>console.log(err))
  }
  return (
    <div style={{paddingTop:'100px',textAlign:'center'}}>
        <Typography variant ='h4'>Add Students </Typography>
        <br/><br/>
        <TextField label ='name'name='sname' value={inputs.sname} onChange={inputHandlar} variant='outlined'/>
        <br/><br/>
        <TextField label ='grade' name='sgrade' value={inputs.sgrade} onChange={inputHandlar} variant='outlined'/>
        <br/><br/>
        <Button variant='contained' onClick={readValue}>submit</Button>
    </div>
  )
}

export default Student