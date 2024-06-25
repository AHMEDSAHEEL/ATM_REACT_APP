import React from 'react'
import { Link } from 'react-router-dom'

const Content = () => {
    return (
      <div>
        <div className='front'>
       

        <Link to="/Login">   <button  className='lgnsgn log-in'>
               login
           </button> </Link>

          <Link to="/SignUp"> <button className='lgnsgn sign-up'>
            sign up
           </button></Link>

        </div>

      </div>
    )
  }
  
  export default Content