import React from 'react'
import { Link } from 'react-router-dom'

const NavItem = ({url, name}) => {
  return (
    <Link to={url} className='text-white hover:text-gray-500 transition-colors'>
      {name}
    </Link>
  )
}

export default NavItem
