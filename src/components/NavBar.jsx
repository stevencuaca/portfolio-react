import React from 'react'
import '../App.css'
import { Link, useNavigate } from "react-router-dom"

class NavBar extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div className="sidebar">
          <div className="profile">
              <img src={require('../assets/profile.jpeg')} alt="profile_picture" />
              <h3>Steven Cuaca</h3>
              <p>Software Developer</p>
          </div>
          <nav>
            <ul>
                <li>
                    <a href="#" className="active">
                      <span className="icon"><i className="fas fa-home"></i></span>
                        <Link style={{ 
                          textDecoration: 'none'
                        }} to={'/home'}><span className="item">Home</span></Link>
                    </a>
                </li>
                <li>
                    <a href="#">
                      <span className="icon"><i className="fas fa-desktop"></i></span>
                      <Link style={{ 
                          textDecoration: 'none'
                        }} to={'/about'}><span className="item">About</span></Link>
                    </a>
                </li>
                <li>
                    <a href="#">
                      <span className="icon"><i className="fas fa-user-friends"></i></span>
                      <Link style={{ 
                          textDecoration: 'none'
                        }} to={'/experience'}><span className="item">Experience</span></Link>
                    </a>
                </li>
                <li>
                    <a href="#">
                      <span className="icon"><i className="fas fa-user-friends"></i></span>
                      <Link style={{ 
                          textDecoration: 'none'
                        }} to={'/skills'}><span className="item">Skills</span></Link>
                    </a>
                </li>
                <li>
                    <a href="#">
                      <span className="icon"><i className="fas fa-user-friends"></i></span>
                      <Link style={{ 
                          textDecoration: 'none'
                        }} to={'/interest'}><span className="item">Interest</span></Link>
                    </a>
                </li>
                <li>
                    <a href="#">
                      <span className="icon"><i className="fas fa-user-friends"></i></span>
                      <Link style={{ 
                          textDecoration: 'none'
                        }} to={'/awards'}><span className="item">Awards</span></Link>
                    </a>
                </li>
              </ul>
            </nav>
        </div>
      </div>
    )
  }
}

export default NavBar

{/* <nav style={{
  borderBottom: '1px solid black',
  paddingBottom: '5px'
}}>
  <Link style={{ textDecoration: 'none'}} to={''}>Home</Link> | {' '}
  <Link style={{ textDecoration: 'none'}} to={''}>About</Link> | {' '}
  <Link style={{ textDecoration: 'none'}} to={'/users'}>Users</Link> | {' '}
  <Link style={{ textDecoration: 'none'}} to={'/members'}>Members</Link> | {' '}
  <Link style={{ textDecoration: 'none'}} to={'/items'}>Items</Link>
</nav> */}