import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, responsiveFontSizes } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewData = () => {
     var[users,setUsers] = useState([])
     useEffect(()=>{ axios.get("https://jsonplaceholder.typicode.com/users")
     .then((response)=>{
        console.log(response.data)
        setUsers(response.data)
     })
     .catch((err)=>console.log(err))
    },[])
    
  return (
    <div>
        <Typography variant='h3'>
        <br/><br/> Axios view<br/><br/>
        </Typography><br/>
        <TableContainer>
             <Table>
                <TableHead>
                    <TableRow>
                     <TableCell style={{ color:"red",fontSize:'20pt'}} >Name</TableCell>
                       <TableCell style={{ color:"red", fontSize:'20pt' }}>Email</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {users.map((value,index)=>{
                    return(
                        <TableRow key={index}>
                            <TableCell>{value.name}</TableCell>
                            <TableCell>{value.email}</TableCell>
                        </TableRow>
                    
                    )})
                    }
                </TableBody>
             </Table>
        </TableContainer>
    </div>
  )
}

export default ViewData