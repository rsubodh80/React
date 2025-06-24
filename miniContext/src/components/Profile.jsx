import React, {useContext}from 'react';
import UserContext from '../context/userContext';


function Profile() {

     const {user} = useContext(UserContext)
      console.log("user:", user);

      if(!user) return <div>please log in </div>
      
      return <div> Wel come {user.username} </div>
    
}

export default Profile;