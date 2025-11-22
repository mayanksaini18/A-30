import { useState , useEffect } from 'react'
import user from './components/user'
import { age } from './components/user'
import CountdownClock from './components/CountdownClock'
import RecipeReviewCard from './components/Card'

import './App.css'

function App() {
  
  return (
    <>
     
       <div>
      
      <h2>{user}</h2>
      <p>{age}</p>
    {/* <CountdownClock /> */}
    <RecipeReviewCard />

    </div>
     
    </>
  )
}
export default App


