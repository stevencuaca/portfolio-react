import React from 'react'
import '../App.css'
import { Link, useNavigate } from "react-router-dom"

class Experience extends React.Component {
  render() {
    return (
      <div className='content'>
        <h2>My projects</h2>
        <p>Here are some of my recent projects:</p>
        <ul>
          <li><a href="https://www.example.com">Project 1</a></li>
          <li><a href="https://www.example.com">Project 2</a></li>
          <li><a href="https://www.example.com">Project 3</a></li>
        </ul>
      </div>
    )
  }
}

export default Experience