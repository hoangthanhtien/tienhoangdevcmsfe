import React from 'react'
import './dashboardStyle.css'

const Dashboard = () => {
  return (
    <div className="d-flex align-items-center">
      <h1 id="catch-phrase" style={{ fontSize: '7rem', textOrientation: 'upright' }}>
        It&apos;s Gigachad time
      </h1>
      <img
        id="gigachad-img"
        style={{ borderRadius: '20%' }}
        src="https://preview.redd.it/2783l40so1p81.jpg?width=640&crop=smart&auto=webp&s=37e32104cf50519f42f78060d059b71199133af9"
      />
    </div>
  )
}

export default Dashboard
