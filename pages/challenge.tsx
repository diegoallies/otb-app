import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import styles from '../styles/challenge.module.css';


const TinderCard = dynamic(() => import('react-tinder-card'), { ssr: false });

export default function Challenge() {
  const [users, setUsers] = useState([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch('/api/users');
      const data = await res.json();
      setUsers(data);
    };

    fetchUsers();
  }, []);

  const handleSwipe = (direction, user) => {
    if (direction === 'right') {
      // Logic to handle swiping right, e.g., update user's data, make API calls, etc.
      // Move to the next card if available
      if (currentCardIndex < users.length - 1) {
        setCurrentCardIndex((prevIndex) => prevIndex + 1);
      } else {
        // No more cards available, navigate to the next page
        router.push('/'); // Replace with your next page route
      }
    }
  };

  const handleCardLeftScreen = (user) => {
    console.log(`${user.name} left the screen!`);
  };

  // const renderCard = (user, index) => (
  //   <TinderCard
  //     className='swipe'
  //     key={user.username}
  //     onSwipe={(dir) => handleSwipe(dir, user)}
  //     onCardLeftScreen={() => handleCardLeftScreen(user)}
  //   >
  //     <div className="card-content" style={{ backgroundImage: `url(${user.posts[0]})` }} className='card'>
  //       <h3>{`${user.name} ${user.surname}`}</h3>
  //       <p>{`Active: ${user.active}`}</p>
  //       <p>{`Street Name: ${user.streetName}`}</p>
  //       <p>{`Street Cred: ${user.streetCred}`}</p>
  //     </div>
  //     <div>
  //       {/* Additional content for the card */}
  //     </div>
  //   </TinderCard>
  // );

  return (
    <div className={styles.cardContainer}>
      {users.map((user) => (
        <TinderCard
          className={styles.swipe}
          key={user.username}
          onSwipe={(dir) => handleSwipe(dir, user)}
          onCardLeftScreen={() => handleCardLeftScreen(user)}
        >
          <div
            className={styles.card}
            style={{ backgroundImage: `url(${user.posts[0]})` }}
          >
            <h3>{`${user.name} ${user.surname}`}</h3>
            <p>{`Active: ${user.active}`}</p>
            <p>{`Street Name: ${user.streetName}`}</p>
            <p>{`Street Cred: ${user.streetCred}`}</p>
          </div>
        </TinderCard>
      ))}
    </div>
  );
}
