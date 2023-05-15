import { Card, CardContent, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

 const URL="https://jsonplaceholder.typicode.com/posts"
const Home = () => {
  const [data,setData]= useState([]);

  useEffect(()=>{
    axios.get(URL)
    .then((response)=>{
      setData(response.data);
    })
    .catch((error)=>{
      console.log("error : "+error);
  })
},[])

   
  return (  
    <Grid style={{marginLeft : '20%'}} container spacing={{xs: .2,md: 2}} columns={{xs:1,md:1,md :17}}>
      {
        data.map((blog)=>{
          return(
            <Grid key={blog.id}item xs={2} sm={4} md={4}>
              <Card sx={{maxWidth:345}} style={{margin:10,border:'2px solid #FFA01F',borderRadius:'10px'}}>
                <CardContent>
                  <Typography style={{fontSize:"17px",fontWeight:'bolder'}}>
                    {blog.title}
                  </Typography ><hr/>
                    <Typography variant="body2" color="text.secondary">{ blog.body}</Typography>                   
                </CardContent>
                </Card>
                </Grid>
          )
        })
      }
  
  </Grid>
  )
    }


export default Home