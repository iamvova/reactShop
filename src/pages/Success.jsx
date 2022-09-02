import React from 'react'
import { Link } from 'react-router-dom'

const Success = () => {
  return (
    <div className='suc'>
      <Link className='suc-btn' to="/">Success</Link>
      <p>Thanks for all ! You can return to main page!</p>
    </div>
  )
}

export default Success

