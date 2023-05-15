import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const View = () => {
  var [student,setStudents]= useState([]);
  var[update,setUpadte] = useState(false);
  var[singlevalue,setsingleValue]=useState([])
  
  useEffect(()=>{
     axios.get('http://localhost:8080/view')
     .then(response =>{
      setStudents(student=response.data)
     })
     .catch(err=>console.log(err))
  },[]) 

  const updateValues=(value)=>{
    setSinglevalue(value);
    setUpdate(true);
  }
   const deleteValues =(id) =>{
    console.log("delete clicked",+id);
    axios.delete("http://localhost:8080/delete/"+id)
    .then(response=>{
      console.log(response.idvalue);
      alert("delete");
      window.location.reload(false)
    })
  }
  var finalJSX= <TableContainer>
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
                  <Button onClick={ ()=>updateValues(value)}>Update</Button>
                </TableCell>
            </TableRow>
          )
        })}
      </TableBody>

  </Table>
</TableContainer>
    

  if(update)
  finalJSX = <AddStudent data ={singlevalue} method ="put"/>

  return (
    finalJSX


    

  )
}

export default View
