import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import './index.css'

function Detail() {
    const [input, setinput] = useState({
    
        firstName:"",
        lastName:"",
        gender:"",
        age:"",
        phone:"",
        username:"",
        password:"",
         })
      
        
         const getValue=(e)=>{
             setinput({...input,[e.target.name]:e.target.value})
         }
  return (
    <div>
         <div className='tabledesign'>
     
     <br />
<Form  action="">
 <div className='m-3'>
   
   <label for="firstName">First Name</label>
   <input className='aligninput' type="text" id='firstName' name='firstName' onChange={getValue} />
   <br /><br />
   <label for="lastName">Second Name</label>
   <input className='aligninput' type="text" id='lastName' name='lastName' onChange={getValue}  />   
   <br /><br />
   <label for="gender ">Gender</label>
   <input className='aligninput' type="text" id='gender' name='gender' onChange={getValue}  />   
   <br />
   <br />     
   <label for="age">Age</label>
   <input className='aligninput' type="number" id='age' name='age' onChange={getValue}  />
   <br /><br />
   
   <label for="phone">Phone</label>
   <input className='aligninput' type="number" id='phone' name='phone' onChange={getValue}  />
   <br /><br />
   <label for="username">User Name</label>
   <input className='aligninput' type="text" id='username' name='username' onChange={getValue}  /> 
   <br /><br />
   <label for="password">Password</label>
   <input className='aligninput' type="text" id='password' name='password' onChange={getValue}  /> 

   <br /><br /> 
   <input className='aligninput' type="submit" value="submit"/>
   </div>

   
</Form>

   </div>
    </div>
  )
}

export default Detail
