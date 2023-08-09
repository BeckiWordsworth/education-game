import React from 'react'


export default function HomePage() {
    let userLogged = null;
      return (
        <div className="homepage">
  
          <div className="hero">
            <div className="hero-icon"><img src="/logo.png" alt="Logo" /></div>
            <div className="hero-content">
              <h1>PAGE TWO</h1>
              <p>Learn Physics for free</p>
              <br />
              <a href={userLogged}>Get Started</a>
            </div>
          </div>

          <footer>
            <div className="footer-content">
              Learning Physics the fun way with DuoPhysics.
            </div>
          </footer>
        </div>
      )
    }
