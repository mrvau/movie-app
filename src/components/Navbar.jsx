import React from 'react'
import { Link } from 'react-router-dom'
import NavItem from './NavItem'

const Navbar = () => {
  return (
    <nav className='flex justify-between py-3 px-4 bg-gray-900'>
      <Link to='/' className='text-white font-bold'>Movies</Link>
      <div className='flex gap-2'>
        <NavItem url="/" name="Home"/>
        <NavItem url="/favorites" name="Favorites"/>
      </div>
    </nav>
  )
}

export default Navbar
