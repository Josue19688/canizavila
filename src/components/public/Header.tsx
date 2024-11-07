import { useState } from "react"

import { RiCloseFill, RiMenu3Line } from "@remixicon/react";
import { Link } from "react-router-dom";
//import logo from '/logo.png';

export const Header = () => {


  const [isOpen, setIsOpen] = useState(false)

  const toggelMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 m-2">
      <div className="text-neutral-600 font-bold text-lg  backdrop-blur-md max-w-7xl mx-auto px-4 py-1 flex justify-between items-center rounded-xl ">
        {/* <img src={logo} alt="logo" className="w-16 h-16" /> */}

        {/* CENTER: LINKS (HIDDEN  ON MOBILE) */}
        <div className="hidden md:flex space-x-6">
          <Link to='/' className="hover:text-orange-500">
            Inicio
          </Link>
          <Link to='/nosotros' className="hover:text-neutral-200">
            Nosotros
          </Link>
          <Link to='/servicios' className="hover:text-orange-500">
            Servicios
          </Link>
          <Link to='/blog' className="hover:text-orange-500">
            Blog
          </Link>
        </div>
        {/* RIGHT: BUTTTONS ON MOBILE */}
        <div className="hidden md:flex space-x-4 items-center">
          <a href="#" className="border border-orange-500 text-neutral-500 py-1 px-4 rounded-lg hover:bg-neutral-400 hover:text-white transition">
            Login
          </a>
        </div>

         {/* HAMBURGER ICON FOR MOBILE */}
        <div className="md:hidden ">
          <button onClick={toggelMenu} className="text-white focus:outline-none"
          aria-label={isOpen ? "Close Menu":"Open Menu"}>
              {isOpen ? <RiCloseFill/> : <RiMenu3Line/>}
          </button>
        </div>


      </div>

      {/* Mobile menu  */}

      {
        isOpen && (
          <div className="md:hidden bg-neutral-900/60 backdrop-blur-md border border-neutral-800 p-4 rounded-xl mt-2">
            <div className="flex flex-col space-y-4">
              <Link to='/' className="hover:text-neutral-200">
                Inicio
              </Link>
              {/* <Link to='/nosotros' className="hover:text-neutral-200">
                Nosotros
              </Link> */}
              <Link to='/servicios' className="hover:text-neutral-200">
               Servicios
              </Link>
              <Link to='/blog' className="hover:text-neutral-200">
               Blog
              </Link>
              <a href="#" className="border border-neutral-700 text-center text-white py-2 px-4 rounded-lg hover:bg-neutral-700 transition">
            Login
          </a>
            </div>
          </div>
        ) 
      }
    </nav>

  )
}
