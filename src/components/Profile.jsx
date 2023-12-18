import React from 'react'
import './profile.css'
function Profile() {
  return (
    <div className='Profile'>
     <h2>Profile</h2>
      <div className="p-2"> 
        <div className="p-2form">
        <form action="" className="profileForm">
        <div className='inputs'>
        <span>Username</span>
          <input type="text" placeholder="Username" />
        </div>
        <div className='inputs'>
        <span>Breif</span>
        <textarea name="" id="" cols="20" rows="10" placeholder="Breif"></textarea>
        </div>
        <div className='inputs'>
           <div className="first">
            <span>FirstName</span>
            <input type="text" placeholder="FirstName" />
           </div>
           <div className="last">
            <span>LastName</span>
            <input type="text" placeholder="lastname"/>
           </div>
        </div>  
      </form>
        </div>
       <div className="p2_f">
       
       </div>
      </div>
        <div className="privacy">
            <h3>Privacy</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          {/* <form action="">
            <input type="text" />
          </form> */}

        </div>
    
    </div>
  )
}

export default Profile
