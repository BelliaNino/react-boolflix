import { useState } from 'react'

function Header({ onSearch }) {
  const [research, setResearch] = useState('')

  return (
    <header className="bg-dark py-3 px-4 d-flex align-items-center justify-content-between sticky-top">
      <h1 className="text-danger fw-bold m-0">Boolflix</h1>

      <div className="d-flex align-items-center gap-3">
        <ul className="navbar-nav d-flex flex-row align-items-center gap-3 m-0">
          <li className="nav-item">
            <p className="text-danger fw-medium m-0 px-2">All</p>
          </li>
          <li className="nav-item">
            <p className="text-danger fw-medium m-0 px-2">Movies</p>
          </li>
          <li className="nav-item">
            <p className="text-danger fw-medium m-0 px-2">Series</p>
          </li>
        </ul>

        <input
          type="text"
          className="form-control"
          placeholder="Cerca film o serie..."
          value={research}
          onChange={e => setResearch(e.target.value)}
        />
        <button 
          className="btn btn-danger"
          onClick={() => onSearch(research)}
        >
          Cerca
        </button>
      </div>
    </header>
  )
}

export default Header