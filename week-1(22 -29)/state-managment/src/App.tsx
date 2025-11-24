import { useState , useEffect } from 'react'

import './App.css'

function App() {

 const [title , setTitle]= useState("")


  
   function formHandler(e){
     e.preventDefault();
    console.log("form submitted")

   }

  return (
  <>
    
    // two  way binding 
    
    <div>
      <hr />

      <form action="" onSubmit={(e)=>{
        formHandler(e);
      }}>

        <input type="text" 
         placeholder='enter your name '
         value={title}
         onChange={(e)=>{
          setTitle(e.target.value)
         }}
        />  <br /><br />
        <button type="submit">submit</button>
      </form>
    </div>

   
    </>
  )
}

export default App
