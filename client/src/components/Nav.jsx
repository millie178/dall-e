import React from 'react'
import {dark} from '../assets';
import {light} from '../assets';



const Nav = () => {
  const [darkMode, setDarkMode] = React.useState(true)

  function toggleDarkMode() {
    setDarkMode(prevDarkMode => !prevDarkMode)
  }

  // grid grid-cols-12 w-full flex justify-between sm:px-8 px-4
  return (
    <nav className="flex">
         <img src={dark} />
    </nav>
 )
}

export default Nav;
