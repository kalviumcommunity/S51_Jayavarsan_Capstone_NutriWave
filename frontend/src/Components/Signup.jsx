import React from 'react'
import '../styles/Signup.css'
import banner from '../assets/signupbanner.png'
import backicon from '../assets/back.png'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <div className='signup_container_div'>
      
      <div className='signup_form_div'>  
        <div className='signup_from_main_sub_div'>
          <div className='signup_form_backdiv'>
            <Link to='/'><button><img src={backicon} alt="" /></button></Link>
            <div>
              <span>Already have a account? <Link> <span className='signin_button_signup'>Sign in</span>  </Link> </span>
            </div>
          </div>
          <div className='signup_form_mainsignup_option_div'> 
 
          </div>
        </div>
      </div>
      <div className='signup_banner_div'>
        <img src={banner} alt="Banner" />
      </div> 
    </div>
  )
}

export default Signup

