import React from 'react'

function Header() {
  return (
    <header className="bg-dark py-3 px-4 d-flex align-items-center justify-content-between">
      <h1 className="text-danger fw-bold m-0">Boolflix</h1>
      
      <div className="d-flex gap-2">
        <input 
          type="text" 
          className="form-control" 
          placeholder="Cerca film o serie..."
        />
        <button className="btn btn-danger">Cerca</button>
      </div>
    </header>
  )
}

export default Header