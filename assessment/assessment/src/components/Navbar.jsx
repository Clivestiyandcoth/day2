import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>BLOGAPP</Typography>
        <Button component={Link} to="/" color="inherit">Home</Button>
        <Button component={Link} to="/add" color="inherit">Add Blog</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;