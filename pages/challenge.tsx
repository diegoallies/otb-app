

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
// import styles from '../styles/challenge.module.css'
import '../styles/challenge.module.css'

const TinderCard = dynamic(() => import('react-tinder-card'), { ssr: false });

export default function Challenge() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch('/api/hello');
      const data = await res.json();
      setUsers(data);
    };

    fetchUsers();
  }, []);

  const swiped = (direction, userToDelete) => {
    console.log(`Swiped ${direction} on user:`, userToDelete);
  };

  const outOfFrame = (user) => {
    console.log(`${user.name} left the screen!`);
  };

  return (
    <div>
      {users.map((user) => (
       <TinderCard 
       className='swipe' 
       key={user.username} 
       onSwipe={(dir) => swiped(dir, user.name)} 
       onCardLeftScreen={() => outOfFrame(user.name)}
     >
      <div className="card-content" style={{ backgroundImage: 'url(' + user.posts[0] + ')' }} className='card'>
           <h3>{`${user.name} ${user.surname}`}</h3>
           <p>{`Active: ${user.active}`}</p>
           <p>{`Street Name: ${user.streetName}`}</p>
           <p>{`Street Cred: ${user.streetCred}`}</p>
         </div>
       <div >
    
       </div>
     </TinderCard>


        
      ))}


    </div>
  );
}
