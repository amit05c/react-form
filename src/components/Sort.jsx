import React,{useState} from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Button
  } from '@chakra-ui/react'

const Sort = ({handleSort}) => {
   
    
  return (
    <Menu>
  <MenuButton as={Button}
   >
    Sort Data
  </MenuButton>
  <MenuList>
    <MenuItem value="high-to-low" onClick={(e)=>{
          handleSort(e.target.value)
    }}>Download</MenuItem>
    <MenuItem>Create a Copy</MenuItem>
    <MenuItem>Mark as Draft</MenuItem>
    <MenuItem>Delete</MenuItem>
    <MenuItem>Attend a Workshop</MenuItem>
  </MenuList>
</Menu>
  )
}

export default Sort