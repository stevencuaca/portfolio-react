import React from 'react'
import '../App.css'
import { Link, useNavigate } from "react-router-dom"

class Skills extends React.Component {
  render() {
    return (
      <div className="content">
        <h2>My skills</h2>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Angular</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
          </ul>
      </div>
    )
  }
}

export default Skills