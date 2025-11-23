import { useState , useEffect } from 'react'
import user from './components/user'
import { age } from './components/user'
import CountdownClock from './components/CountdownClock'
import RecipeReviewCard from './components/Card'
import Jobcard from './components/Jobcard'

import './App.css'

function App() {

  const jobData = [
  {
    id: 1,
    company: "Amazon",
    logo: "https://images.unsplash.com/photo-1602359337719-a8bcbd1f7b51?w=1000&auto=format&fit=crop&q=60",
    title: "Frontend Developer",
    location: "Bangalore, India",
    salary: "₹12–18 LPA",
    type: "Full-time",
    experience: "1–3 years",
    tags: ["React", "JavaScript", "CSS"],
    posted: "2 days ago",
  },
  {
    id: 2,
    company: "Google",
    logo: "https://images.unsplash.com/photo-1581091012184-5a5ea56c81f2?w=1000&auto=format&fit=crop&q=60",
    title: "Software Engineer",
    location: "Hyderabad, India",
    salary: "₹20–30 LPA",
    type: "Hybrid",
    experience: "2–5 years",
    tags: ["Python", "DSA", "System Design"],
    posted: "5 days ago",
  },
  {
    id: 3,
    company: "Flipkart",
    logo: "https://images.unsplash.com/photo-1626785774573-4b1a9a0c3091?w=1000&auto=format&fit=crop&q=60",
    title: "Backend Developer",
    location: "Remote",
    salary: "₹10–15 LPA",
    type: "Remote",
    experience: "1–3 years",
    tags: ["Node.js", "Express", "MongoDB"],
    posted: "1 day ago",
  },
  {
    id: 4,
    company: "Infosys",
    logo: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1000&auto=format&fit=crop&q=60",
    title: "Java Developer",
    location: "Pune, India",
    salary: "₹6–10 LPA",
    type: "Full-time",
    experience: "0–2 years",
    tags: ["Java", "Spring Boot", "SQL"],
    posted: "3 days ago",
  },
  {
    id: 5,
    company: "TCS",
    logo: "https://images.unsplash.com/photo-1507209696998-3c532be9b2b4?w=1000&auto=format&fit=crop&q=60",
    title: "Data Analyst",
    location: "Delhi, India",
    salary: "₹5–8 LPA",
    type: "On-site",
    experience: "0–1 years",
    tags: ["Excel", "Power BI", "Python"],
    posted: "6 days ago",
  }
];

   
  return (
    <>
     
       <div>
      
      <h2 className='bg-amber-300'>{user}</h2>
      <p>{age}</p>
    {/* <CountdownClock /> */}
    {/* <RecipeReviewCard  name ="sunflower"/> */}
{/*     
{jobData.map((job) => (
  <Jobcard key={job.id} data={job} />
))} */}
  
    </div>
     
    </>
  )
}
export default App


