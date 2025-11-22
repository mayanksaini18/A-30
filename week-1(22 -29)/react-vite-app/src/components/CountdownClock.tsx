import { useState , useEffect } from "react";

const CountdownClock = () => {
     const [count, setCount] = useState(0)
      const [running , setRunning] = useState(false)
      const [inputValue , setInputValue] = useState('')


      useEffect(()=> {

    if ( !running ) return;
    
    const timer = setInterval(()=>{
       setCount((prevCount) => {
        return prevCount > 0 ? prevCount - 1 : 0
      })
    },1000)
    return () => clearInterval(timer)
  },[running])



  
  function handleInputValue(e) {
    setInputValue(e.target.value)
    setCount(Number(e.target.value))
  }


  return(
    <div>
          <input type="numbber" placeholder='enter start number' value={inputValue} onChange={handleInputValue} disabled={running} />
      <h1>{count}</h1>
      <button onClick={() => setRunning(true)}>Start Countdown</button>
      <button onClick={() => setRunning(false)}>Stop Countdown</button>
    </div>
  )

}

export default CountdownClock;