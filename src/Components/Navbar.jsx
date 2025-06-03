import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav className='flex justify-around bg-red-400 p-4 text-white text-xl m-1 mb-5'>
        <Link to="">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/product">Products</Link>
        <Link to="/cart">🛒Cart</Link>
    </nav>
    </>
  )
}

export default Navbar