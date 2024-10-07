import React from 'react'

const Navbar = ({handleLogout}) => {
  return (
    <>
    <nav className='navbar'>
        <div className='container-fluid p-2'>
            <input type="text" className='mx-3 searchInput fw-bold px-3' placeholder="Search here..."/>
            <button onClick={handleLogout} className='btn btn-dark fw-bold mx-3'>Logout</button>
        </div>
    </nav>
    </>
  )
}

export default Navbar
