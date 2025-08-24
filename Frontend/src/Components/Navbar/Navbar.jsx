import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary " style={{ backgroundColor: "#b892ff" }}>
        <div className="container-fluid">
          <Link className="navbar-brand text-danger" to="/">🩺Jadi~Booti~Sewa</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/">Home</Link> 
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/audio">Voice</Link> 
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/image">Image Prescription</Link> 
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link> 
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
