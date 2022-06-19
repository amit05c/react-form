import React from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'

const TableData = ({formData, sort}) => {
    // console.log(typeof(formData))
    // console.log(formData)
    // console.log(clicked)
   console.log(sort)
    {if(sort=="high-to-low"){
        formData.sort((a,b)=>{
            return a.salary-b.salary
        })
      }
      console.log(formData)
    
          
}
  return (
    <TableContainer width="100%">
    <Table variant='striped' colorScheme='teal'>
      <TableCaption>Employee Details</TableCaption>
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Age</Th>
          <Th>Material status</Th>
          <Th>Address</Th>
          <Th>Salary</Th>
          <Th>Department</Th>
        </Tr>
      </Thead>
      <Tbody>
         
          {formData.map(elem=>(
            
              <Tr key={elem.id}>
              <Td>{elem.name}</Td>
              <Td>{elem.age}</Td>
              <Td>{elem.Ismarried}</Td>
              <Td>{elem.address}</Td>
              <Td>{elem.salary}</Td>
              <Td>{elem.department}</Td>
            </Tr>
          ))}
      </Tbody>
     
    </Table>
  </TableContainer>
  )
}

export default TableData