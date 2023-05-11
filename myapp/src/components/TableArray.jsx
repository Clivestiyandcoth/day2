import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useState } from 'react'

const TableArray = () => {
    var [names, setNames]=useState([
        {
            name:"stiyan",age:"18"
        },
        {
            name:"sreehari",age:"18"
        },
        {
            name:"soorya",age:"19"
        },
        {
            name:"akshay",age:"18"
        }      
]);  
    
  return (
    <div>
        <Typography variant='h3'>Table and Array</Typography>
        <TableContainer >
          <Table>
             <TableHead>
                <TableRow>
                             <TableCell style={{color:"red"}} >Name</TableCell>
                             <TableCell style={{color:"red"}} >Age</TableCell>
                </TableRow>
             </TableHead>
             <TableBody>
                {names.map((value,index)=>{
                    return(
                        <TableRow>
                            <TableCell>{value.name}</TableCell>
                            <TableCell >{value.age}</TableCell>
                        </TableRow>
                     )
                       } 
                        )
                          }
             </TableBody>
           </Table>
        </TableContainer>

    </div>
  )
}

export default TableArray