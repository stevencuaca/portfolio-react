import React from 'react'
import '../App.css'
import { Link, useNavigate } from "react-router-dom"

class About extends React.Component {
  render() {
    return (
      <div className='content'>
        <h2>About me</h2>
          <p>I have been working as a web developer for over 5 years. During this time, I have developed a wide range of websites using React, Angular, and other web technologies.</p>  
      </div>
    )
  }
}

export default About