import { Typography , TextField, Button} from '@mui/material'
import React from 'react'

const Basics = () => {
  return (
   
    <div> 
    <h1> Clive stiyan </h1>
    <br/>
    <input type="text" placeholder='name'/>
    <Typography variant='h1' color = "red"> Clive stiyan</Typography>
    <br/><br/>
    <TextField label="name" variant="outlined" /><br/><br/>
    <TextField label="phone no" variant="standard" /><br/><br/>
    <TextField label="address" variant="filled" /><br/><br/>

    <Button variant="text" color="error">ok</Button><br/><br/>
<Button variant="contained"  color="success">Click</Button><br/><br/>
<Button variant="outlined" color="secondary">button</Button><br/><br/>

    </div>

  )
}

export default Basics