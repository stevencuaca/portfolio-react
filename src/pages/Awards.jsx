import React from 'react'
import '../App.css'
import { Link, useNavigate } from "react-router-dom"

class Awards extends React.Component {
  render() {
    return (
      <div className='content'>
        <h1>Awards</h1>
        <p>Here are some of my recent awards:</p>
        <ol className='list-awards'>
          <li>
            The Webby Awards - These awards recognize excellence on the internet in a variety of categories, including websites, mobile apps, and social media campaigns.
          </li>
          <li>
            The Crunchie Awards - These awards celebrate the best in technology and start-ups, including categories for best mobile app, best enterprise/startup, and founder of the year.
          </li>
          <li>
            The Apple Design Awards - These awards recognize innovative and outstanding app design, with categories for both iOS and macOS apps.
          </li>
          <li>
            The Google Play Awards - These awards highlight the best apps and games available on the Google Play Store, with categories such as "Best App" and "Best Game".
          </li>
        </ol>
      </div>
    )
  }
}

export default Awards