import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
      <AppBar>
      <Toolbar>
        <Typography align='left' sx={{flexGrow: 1 }} >StudentApp</Typography>
        <Button><Link to={'/'} style={{color:'white'}}>Add</Link></Button>
        <Button ><Link to={'/table'} style={{color:'white'}}>View</Link></Button>
      </Toolbar>
    </AppBar>
    <br/><br/><br/><br/>
   </div>
  )
}

export default Navigation