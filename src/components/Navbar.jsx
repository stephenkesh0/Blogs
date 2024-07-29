import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className=" w-full h-[60px] flex items-center justify-between px-[40px] bg-purple-300">
      <img className='h-[60px] w-[60px]' src="/logo.png" alt="" />
      <div className='font-bold cursor-pointer text-sm mr-3'>
        <Link className='mr-3' to="/">Home</Link>
        <Link className='mr-3' to="/create">Create</Link>
        <Link className='mr-3' to="/update/:id">Update</Link>
        <Link className='mr-3' to="/blogs/:id">Blogpage</Link>
      </div>
      <button className='bg-blue-600 text-white cursor-pointer p-2 rounded-md hover:bg-blue-300'>Search</button>

    </nav>
  )
}

export default Navbar