import React from 'react'
import IconLogo from '../assets/icon.png'

function Footer() {
  return (
    <footer className='bg-dark py-4'>
      <div className="container-fluid d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
        
        <a className="navbar-brand d-flex align-items-center gap-3 text-decoration-none" href="/">
          <img style={{ width: '50px', borderRadius: '50px' }} src={IconLogo} alt="Logo BX" />
          <h6 className="m-0 fw-bold text-white">Boolflix</h6>
        </a>

        <ul className="nav align-items-center gap-3 flex-wrap justify-content-center">
          <li className="nav-item">
            <a href="/privacy" className="tandp text-decoration-none text-secondary fw-medium small px-2">
              Privacy Policy
            </a>
          </li>
          <li className="nav-item">
            <a href="/terms" className="tandp text-decoration-none text-secondary fw-medium small px-2">
              Terms of Service
            </a>
          </li>
          <li className="nav-item d-flex align-items-center gap-1 text-secondary fw-medium small px-2">
            <i className="bi bi-globe2 text-secondary"></i>
            <span>Florence, Italy</span>
          </li>
        </ul>

        <div className="text-secondary small">
          <span>© {new Date().getFullYear()} Boolflix.</span>
        </div>

      </div>
    </footer>
  )
}

export default Footer