import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { Api } from './Api'
import { Table } from 'react-bootstrap'
import './index.css'

function Home() {
  const [data,setdata]=useState([])

  useEffect(()=>{
    Axios.get(Api).then((res)=>setdata(res.data))
  },[Api,data])
    
  console.log(data);
  
  return (
    <div className='body'>

<Table className='tablestyle'>
      <thead>
         
        <tr>
          <th>Country</th>
          <th>Region</th>
          <th>Flag</th>     
        </tr>
        
      </thead>
    <tbody>
  

    {data.map((item)=>{
          return(
       
      <tr>
        
        <td>{item.name}</td>
        <td>{item.region}</td>
        <td ><img className='flag' src={item.flag} alt="Flag" /></td>
     
        {/* <Link to={`/detail/${item.id}`}><FaEyeSlash /></Link> <br/> 
        <FaEdit/><br/>
        
        <FaTrash/> */}
          
          
      </tr>  
         )
        })}
          
  

      </tbody>

      </Table>
    
    </div>
  )
}

export default Home