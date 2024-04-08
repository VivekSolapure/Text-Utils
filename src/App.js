import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

const App=()=> { 
   return (
     <>
      <Navbar title="Navbar" aboutNavText="About"></Navbar> 
       <div className="container">
       <TextForm ></TextForm>

       </div>
      <img src="./img2.jpg" alt="" />
      
     </>
   );

}
    export default App;
