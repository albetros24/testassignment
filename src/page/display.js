 import React from 'react'
 import { Link ,Routes,Route} from 'react-router-dom'
import Profile from '../components/Profile'
import Account from '../components/Account'
import Password from '../components/Password'
import Notification from '../components/Notification'
import './display.css'
 function Display() {
   return (
     <div className='display'>

      <div className="left">
        <ul>
          <Link to='/profile'>   <li>Profile</li> </Link>
        
          <Link to='/Account'>   <li>Account</li> </Link>
          <Link to='/Password'>   <li>Password</li> </Link>
          <Link to='/Notification'>   <li>Notification</li> </Link>
        </ul>
      </div>
      <div className="right">
         <Routes>
              <Route path='/profile' element={<Profile/>}></Route>
              <Route path='/Account' element={<Account/>}></Route>
              <Route path='/Password' element={<Password/>}></Route>
              <Route path='/Notification' element={<Notification/>}></Route>
         </Routes>
      </div>
     </div>
   )
 }
 
 export default Display
 