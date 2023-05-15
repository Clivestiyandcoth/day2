import { AppBar, Button, Link, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Navbar = () => {
  return (
    <div><AppBar>
    <Toolbar>
    
<Typography align='left' sx={{flexGrow: 1 } } >Dashboard</Typography>

           <Button ><Link to={'/add'} style={{color:'white'}}>Add</Link></Button>
           <Button ><Link to={'/home'} style={{color:'white'}}>Home</Link></Button>
    </Toolbar>
   </AppBar></div>
  )
}

export default Navbar