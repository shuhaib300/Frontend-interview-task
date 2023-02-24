import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Home from './Home';
import { createContext, useState } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Detail from './Detail';

const newcontext= createContext();

function App() {
  const [array,setarray]=useState([])
  return (
    <div>
     
   <newcontext.Provider value={{array,setarray}}>
    <BrowserRouter> 

       <Routes> 
       <Route path='/' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/detail' element={<Detail/>}/>
     
      {/* <Route path='/detail/:id' element={<Detail/>}/> */}

      
      </Routes>

      </BrowserRouter>
      </newcontext.Provider>
      
    </div>
  );
}

export default App;
