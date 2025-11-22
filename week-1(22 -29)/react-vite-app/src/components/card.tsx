import React from 'react'

const Card = () => {
  return (
    <div className='container' style={{ padding: 10, margin: 10  ,  border: "1px solid #ccc", borderRadius: "10px", maxWidth: "300px" }}>
      <div className='card-heading'>
        <h2>Sunflower</h2>
      </div>

      <img
        src="https://images.unsplash.com/photo-1626808642875-0aa545482dfb?q=80&w=987&auto=format&fit=crop"
        alt="Sunflower"
        style={{ 
          objectFit: "cover", 
          width: "100%", 
          height: "200px",
          borderRadius: "10px",
         

        }}
      />

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, culpa.</p>
    </div>
  )
}

export default Card
