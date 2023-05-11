import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
    var [ pname,setPname ] = useState("Class");
    var[data,setData] =useState();
    const changeName = ()=>{
    console.log("clicked");
    setPname(data)
    }
    const readValue = (e)=>{
      setData(e.target.value);
      console.log(data)
    }
  return (
    <div>
      <br/><br/> <br/> <Typography variant='h3'>welcome {pname}</Typography><br/><br/><br/>
        <TextField label='name' variant='outlined' onChange= {readValue}/>
        <Button variant="contained"  onClick={changeName}>Change</Button>
    </div>
  )
}

export default StateBasics