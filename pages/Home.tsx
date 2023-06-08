import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment, faShareSquare } from '@fortawesome/free-regular-svg-icons';
import styles from '../styles/Home.module.css';
import TopNavbar from '../comps/TopNavBar';

type User = {
  name: string;
  surname: string;
  active: boolean;
  streetName: string;
  streetCred: number;
};

const HomePage = (): JSX.Element => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/hello');
      const data: User[] = await res.json();

      setUsers(data);
    };

    fetchData();
  }, []);

  return (
    <div className={styles.feed}>
      {users.map((user, index) => (
        <div key={index} className={styles.post}>

          <div className={styles.post__image}>
            <img src="https://picsum.photos/536/354" alt="post" />
          </div>
          <div className={styles.post__actions}>
            <FontAwesomeIcon icon={faHeart} className={styles.post__icon} />
            <FontAwesomeIcon icon={faComment} className={styles.post__icon} />
            <FontAwesomeIcon icon={faShareSquare} className={styles.post__icon} />
          </div>
          <div className={styles.post__caption}>
            <span className={styles.post__username}>{user.name} {user.surname}</span> Live on {user.streetName}. Street cred: {user.streetCred} stars.
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
