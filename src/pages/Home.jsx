import React from 'react'
import '../App.css'
import { Link, useNavigate } from "react-router-dom"

class Home extends React.Component {
  render() {
    return (
      <div className='content'>
        <h1>Welcome to my portfolio</h1>
        <p>Hi, I'm John Doe, a web developer based in New York. I specialize in creating responsive and user-friendly websites using the latest technologies.</p>
      </div>
    )
  }
}

export default Home