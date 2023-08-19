import React, { useContext } from 'react'
import UserContext from '../context/user-context';

const UserApp = () => {

    const {state} = useContext(UserContext)
    const date = new Date();

     let day = date.getDate();
     let month = date.getMonth() + 1;
     let year = date.getFullYear();   
     let currentDate = `${day}-${month}-${year}`;  
  return (
    <React.Fragment>
   {state.map((user)=>{
      return <div key={user.email}>
        <p>{user.name}</p>
        <p>{currentDate}</p>
        <p>Sir/Madam,</p>
        <p>I am writing to formally request a medical leave due to illness. Unfortunately, I have fallen ill and am unable to perform my duties effectively. I have consulted a doctor who has advised me to take [number of days] days off to recover and regain my health.
         </p>
         <p>During my absence, I can be reached at my personal contact details:</p>
        <p>- Phone: {user.phone}</p>
        <p>- Email: {user.email}</p>
        <p>I apologize for any inconvenience my leave may cause and appreciate your understanding. I am committed to returning to work in good health and resuming my duties promptly.

Thank you for considering my leave request. I will keep you updated on my health status and any changes to my return date.</p>
     <p>Sincerely,</p>
     <p>{user.name}</p>
     <p>{user.email}</p>
      </div>
})}
 </React.Fragment>
)
}

export default UserApp

              

