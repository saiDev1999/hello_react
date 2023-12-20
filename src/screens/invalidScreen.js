import React from 'react'
import { Link } from 'react-router-dom'

function InvalidScreen() {
  return (
    <div>

        <h2>Please check url</h2>
        <h3><Link to="/" >Click to go Home</Link></h3>
    </div>
  )
}

export default InvalidScreen