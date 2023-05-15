import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const View = () => {
  var [student,setStudents]= useState([]);
  useEffect(()=>{
     axios.get('http://localhost:8080/view')
     .then(response =>{
      setStudents(student=response.data)
     })
     .catch(err=>console.log(err))
  },[])

  const deleteValues =(id) =>{
    console.log("delete clicked",+id);
    axios.delete("http://localhost:8080/delete/"+id)
    .then(response=>{
      console.log(response.idvalue);
      alert("delete");
      window.location.reload(false)
    })
  }

  return (

    <div style={{paddingTop:'100px'}}>
      <Typography variant='h3'>Student Details</Typography>
      <TableContainer>
        <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Grade</TableCell>
          </TableRow>
          </TableHead>
            <TableBody>
              {student.map((value,index)=>{
                return(
                  <TableRow key= {index}>
                    <TableCell>{value.sname}</TableCell>
                    <TableCell>{value.sgrade}</TableCell>
                      <TableCell>
                        <Button onClick ={()=>deleteValues(value._id)}>Delete</Button>
                      </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
     
        </Table>
      </TableContainer>
    </div>
  )
}

export default View
