import { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Explore.module.css';

const Explore = () => {
  const [image1] = useState('https://picsum.photos/536/354');
  const [image2] = useState('https://picsum.photos/536/354');
  const [image3] = useState('https://picsum.photos/536/354');
  const [image4] = useState('https://picsum.photos/536/354');
  const [image5] = useState('https://picsum.photos/536/354');
  const [image6] = useState('https://picsum.photos/536/354');
  const [image7] = useState('https://picsum.photos/536/354');
  const [image8] = useState('https://picsum.photos/536/354');

  return (
    <div>
      <Head>
        <title>Explore</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <input className={styles.search} type="text" placeholder="Search..." />
        <div className={styles.grid}>
          <img src={image1} className={`styles.post exploreImage`} />
          <img src={image2} className={`styles.post exploreImage`} />
          <img src={image3} className={`styles.post exploreImage`} />
          <img src={image4} className={`styles.post exploreImage`} />
          <img src={image5} className={`styles.post exploreImage`} />
          <img src={image6} className={`styles.post exploreImage`} />
          <img src={image7} className={`styles.post exploreImage`} />
          <img src={image8} className={`styles.post exploreImage`} />
        </div>
      </main>
    </div>
  );
}

export default Explore;
