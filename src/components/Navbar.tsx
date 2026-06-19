import React from 'react'
import Logo from "../assets/logooo.png"
import { Link } from 'react-router';
import Signup from './Signup';

function Navbar() {
  const NavItems=[
    {name:"Features", path:"/features" },
    {name:"How it Works", path:"/howitworks"},
    {name:"Pricing", path:"/pricing"}
  ];

const login=[{name:"Log in", path:"/login"}];

  return (
    <div className="flex justify-between items-center shadow shadow-gray-100 p-5  z-500 fixed top-0 w-full bg-white/50 backdrop-blur-md border-b border-white/10">
       <Link to="/">
      <div className=" flex items-center gap-2">
       <img className="w-12 h-10 bg-black rounded-4xl" src={Logo} alt="ResumeX" />
        <span className='text-xl font-bold'>ResumeX</span>
      </div>
        </Link> 
      <div>
        <ul className='flex gap-11'>
          {NavItems.map(items=>(
            <li className='text-gray-600 font-semibold text-[18px] transition-all duration-200 hover:text-black' key={items.path}><Link to={items.path}>{items.name}</Link></li>
          )
          )}
        </ul>
      </div>
      <div className='flex gap-4 text-[18px] font-semibold text-gray-600 transition-all duration-200 hover:text-black'>
        {login.map(el=>(
          <button key={el.path}><Link to={el.path}>{el.name}</Link></button>
        ))}
        <button className='h-13 w-35 bg-black text-white font-semibold border-2 p-4 flex justify-center items-center cursor-pointer hover:bg-gray-800 rounded-3xl'><Link to={"/signup"}>Get Started</Link></button>
      </div>
    </div>
  )
}

export default Navbar
