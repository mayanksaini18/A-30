import React from 'react'

const Jobcard = (props) => {
  return (<div className='parent'>
    
    <div className='job-card '>
      
      {/* Top Section */}
      <div className="head">
        <img 
          src={props.data.Logo}
          alt="company-logo"
          className="company-logo"
        />

        {/* Bookmark Icon */}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth={1.5} 
          stroke="currentColor" 
          className="bookmark-icon"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" 
          />
        </svg>
      </div>

      {/* Middle Section */}
      <div className="center">
        
        <h3>{props.data.title}</h3>
         <p className="company-name">{props.data.company}</p>
        <p className="location">{props.data.location}</p>
        
      </div>

     <div className="bottom">
        <p className="salary">{props.data.salary}</p>
        <button className="apply-btn">Apply</button>
      </div>

    </div>
  </div>
  )
}

export default Jobcard
