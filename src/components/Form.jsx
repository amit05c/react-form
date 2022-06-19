import React,{useState} from "react";
import { Input } from "@chakra-ui/react";
import TableData from "./Table";
// import Sort from "./Sort";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Checkbox, CheckboxGroup,Stack } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
// import Sort from "./Sort";

const Form = () => {
    const [data,setData]= useState({})
    const [formData,setFormData]= useState([])
    const [sort,setSort]=useState('')
    const handleChange = (e)=>{
        // console.log(e)
        let {name,type,value,checked,file}=e.target
        // console.log(type)
        // console.log(value)
        if(type=="checkbox"){
              
            setData({...data,
                [name]:checked,
                id:Date.now()
            })
        }else

        setData({...data,
        [name]:value,
        id:Date.now()     
    })
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        // console.log(data)
        setFormData([...formData,data])
        
    }
//    console.log(formData)

    const handleSort = (e)=>{
        // console.log(data)
        // console.log(e.target.value)
        setSort(e.target.value)

    
        }
    return (
        <div>
                <Heading as='h1' size='4xl' noOfLines={1}>Employee Details</Heading>
            <form onSubmit={handleSubmit}>
              {/* <Sort handleSort={handleSort} /> */}

                <div>
                    <label htmlFor="">Name</label>
                    <Input name="name" placeholder="Basic usage" width="sm" onChange={handleChange}/>
                </div>

                <div>
                    <label htmlFor="">Age</label>
                    <Input name="age" type="number" placeholder="Basic usage" width="sm" onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="">Ismarried</label>
                    {/* <Stack spacing={5} direction='row'> */}
                        <Checkbox type="checkbox" name="Ismarried" colorScheme='red' onChange={handleChange}>
                            Ismarried
                        </Checkbox>
                        
                        {/* </Stack> */}
                </div>

                <div>
                    <label htmlFor="">Address</label>
                    <Input name="address" type="text" placeholder="Basic usage" width="sm" onChange={handleChange} />
                </div>


                <div>
                    <label htmlFor="">Salary</label>
                    <Input name="salary" type="number" placeholder="enter salary" width="sm" onChange={handleChange} />
                </div>



                <div>
                    <label htmlFor="">Department</label>
                    <select name="department" id="" onChange={handleChange}>
                        <option value="">select</option>
                        <option value="design">Design</option>
                        <option value="technical">Technical</option>
                        <option value="Marketing">Marketing</option>
                        <option value="HR">Human Resource</option>
                    </select>
                </div>

                <Button type="submit" colorScheme='blue' >Button
                </Button>
            </form>
            <select onChange={handleSort}>
                <option value="">sort data</option>
                <option value="high to low">high to low</option>
                <option value="low to high">low to high</option>
            </select>
                <TableData formData={formData} sort={sort}  />

           
        </div>
    );
};

export default Form;
