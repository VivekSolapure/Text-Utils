/*HOOKS = without using class we can use the class*/

import React,{ useState} from 'react'
import './style.css'

const App=()=> {

  const [text, setText]=useState('Type here')

  const onchange=(event)=>{
    console.log("On change");
    setText(event.target.value);
  }
    const makeupper=()=>{
      let newtxt=text.toUpperCase();
      setText(newtxt);
    }
    const makelower=()=>{
      let newtxt=text.toLowerCase();
      setText(newtxt);
    }
    
   


    const [sumry,setsumry]=useState(false)


  return (
    <>
     
    <div className="formdiv">
      <h1>Enter text to recognize</h1>
      <form id="formid"for="Name"><br></br>
          <textarea id='txtarea' type="text" 
            value={text} 
            onChange={onchange}
            rows={20} />
      </form>
    </div>
    <div className="DivBtn">
        <button id="formbtn" onClick={makeupper}>Uppercase</button>
        <button id="formbtn" onClick={()=>setsumry(!sumry)}>Summary</button>
        <button id="formbtn" onClick={makelower}>Lowercase</button>

      </div>
   
      {sumry &&
      <div className="txtsummary" id='txtsummary'>
        <h1>Text Summary</h1>
        <h3>There are {text.length} alphabets and {text.split(" ").length} words  
            <br></br>Also you will take on and average {0.008* text.split(" ").length} minute to read  </h3>
      </div>

    } 
    </>
  );

};
export default App;


