import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex justify-around items-center p-3 border-b border-zinc-800 bg-[#1a1a1a]/90 text-zinc-300'>
      <Link className='text-3xl rounded-xl hover:bg-orange-600 p-1' to='/'>
        <h1>
          AuthDB
        </h1>
      </Link>
        <ul className='flex gap-6'>
          <Link to='/login'>
            <li className='hover:bg-blue-600 p-1 rounded-xl'>
              Login
            </li>
          </Link>
          <Link className='hover:bg-green-600 p-1 rounded-xl' to='/signup'>
            <li>
              Sign up
            </li>
          </Link>
        </ul>
    </nav>
  )
}

export default Navbar