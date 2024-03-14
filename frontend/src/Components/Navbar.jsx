import React from 'react'
import '../styles/Navbar.css'
function Navbar() {
  return (
    <div className='navbar_maindiv'>
        <div className='navbar_logodiv'>
            <div className='navbar_logo'>
                logo
            </div>
            <span className='navbar_name'>NutriWave</span>
        </div>
        <div className='navbar_aboutdiv'>
            <a className='navbar_textelemnt'>Home</a>
            <select className='navbar_textelemnt'>
                <option>Collections</option>
                <option>need to add</option>
            </select>
            <a className='navbar_textelemnt'>About</a>
            <a className='navbar_textelemnt'>Support</a>
            <a className='navbar_textelemnt'>Forums</a>
        </div>

    </div>
  )
}

export default Navbar