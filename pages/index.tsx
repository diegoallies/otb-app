import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment, faShareSquare } from '@fortawesome/free-regular-svg-icons';
import styles from '../styles/Home.module.css';

type MediaType = 'image' | 'video';

type User = {
  name: string;
  surname: string;
  active: boolean;
  streetName: string;
  streetCred: number;
  media: {
    type: MediaType;
    url: string;
  };
};

const HomePage = (): JSX.Element => {
  const [users, setUsers] = useState<User[]>([
    {
      name: 'John',
      surname: 'Doe',
      active: true,
      streetName: 'Main',
      streetCred: 5,
      media: {
        type: 'image',
        url: 'https://picsum.photos/536/354',
      },
    },
    {
      name: 'Jane',
      surname: 'Doe',
      active: true,
      streetName: 'Main',
      streetCred: 4,
      media: {
        type: 'video',
        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
      },
    },
    {
      name: 'Jane',
      surname: 'Doe',
      active: true,
      streetName: 'Main',
      streetCred: 4,
      media: {
        type: 'video',
        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
      },
    },
    {
      name: 'Jane',
      surname: 'Doe',
      active: true,
      streetName: 'Main',
      streetCred: 4,
      media: {
        type: 'video',
        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
      },
    },
    {
      name: 'Jane',
      surname: 'Doe',
      active: true,
      streetName: 'Main',
      streetCred: 4,
      media: {
        type: 'video',
        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
      },
    },
    {
      name: 'Jane',
      surname: 'Doe',
      active: true,
      streetName: 'Main',
      streetCred: 4,
      media: {
        type: 'video',
        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
      },
    },
    {
      name: 'Jane',
      surname: 'Doe',
      active: true,
      streetName: 'Main',
      streetCred: 4,
      media: {
        type: 'video',
        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
      },
    },
    {
      name: 'Jane',
      surname: 'Doe',
      active: true,
      streetName: 'Main',
      streetCred: 4,
      media: {
        type: 'video',
        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
      },
    },
    {
      name: 'Jane',
      surname: 'Doe',
      active: true,
      streetName: 'Main',
      streetCred: 4,
      media: {
        type: 'video',
        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
      },
    },
    {
      name: 'Jane',
      surname: 'Doe',
      active: true,
      streetName: 'Main',
      streetCred: 4,
      media: {
        type: 'video',
        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
      },
    },
    {
      name: 'Jane',
      surname: 'Doe',
      active: true,
      streetName: 'Main',
      streetCred: 4,
      media: {
        type: 'video',
        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
      },
    },
    {
      name: 'Jane',
      surname: 'Doe',
      active: true,
      streetName: 'Main',
      streetCred: 4,
      media: {
        type: 'video',
        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
      },
    },
    {
      name: 'Jane',
      surname: 'Doe',
      active: true,
      streetName: 'Main',
      streetCred: 4,
      media: {
        type: 'video',
        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
      },
    },
    {
      name: 'Jane',
      surname: 'Doe',
      active: true,
      streetName: 'Main',
      streetCred: 4,
      media: {
        type: 'video',
        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
      },
    },
    {
      name: 'Jane',
      surname: 'Doe',
      active: true,
      streetName: 'Main',
      streetCred: 4,
      media: {
        type: 'video',
        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
      },
    },
    {
      name: 'Jane',
      surname: 'Doe',
      active: true,
      streetName: 'Main',
      streetCred: 4,
      media: {
        type: 'video',
        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
      },
    },
    {
      name: 'Jane',
      surname: 'Doe',
      active: true,
      streetName: 'Main',
      streetCred: 4,
      media: {
        type: 'video',
        url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
      },
    },
    // add more users if you want
  ]);

  return (
    <div className={styles.feed}>
      {users.map((user, index) => (
        <div key={index} className={styles.post}>
          <div className={styles.post__caption}>
            <span className={styles.post__username}>{user.name} {user.surname}</span> Live on {user.streetName}. Street cred: {user.streetCred} stars.
          </div>
          <div className={styles.post__image}>
            {user.media?.type === 'image' ? (
              <img src={user.media?.url || 'https://via.placeholder.com/150'} alt="post" />
            ) : (
              <video src={user.media?.url || ''} autoPlay muted loop></video>
            )}
          </div>
          <div className={styles.post__actions}>
            <FontAwesomeIcon icon={faHeart} className={styles.post__icon} />
            <FontAwesomeIcon icon={faComment} className={styles.post__icon} />
            <FontAwesomeIcon icon={faShareSquare} className={styles.post__icon} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
