import React from 'react'

function Navbar() {
  return (
    <div className="flex justify-between items-center shadow p-4 bg-white">
      <div>
        <img src="../assets/react.svg" alt="" />
      </div>
      <div>
        <ul className='flex gap-10  '>
          <li className='hover:scale-105 transition-all duration-75'><a href="/">Home</a></li>
          <li className='hover:scale-105 transition-all duration-75'><a href="">Community</a></li>
          <li className='hover:scale-105 transition-all duration-75'><a href="">Help</a></li>
          <li className='hover:scale-105 transition-all duration-75'><a href="">Contact</a></li>
        </ul>
      </div>
      <div className='flex gap-4'>
        <button className='h-10 w-23 border-amber-200 border-2 p-4 flex justify-center items-center text-amber-600 cursor-pointer hover:scale-101 hover:border-amber-600 hover:bg-amber-50 rounded-xl transition-all duration-75'>Sign up</button>
        <button className='h-10 w-23 border-amber-400 bg-amber-400 border-2 p-4 flex justify-center items-center text-white cursor-pointer hover:scale-101 hover:border-amber-600 hover:bg-amber-50 hover:text-black rounded-xl transition-all duration-75'>Login</button>
      </div>
    </div>
  )
}

export default Navbar
