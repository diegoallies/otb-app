import { useState, useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/Explore.module.css';

const Explore = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const images = Array(10).fill().map((_, index) => ({
        url: `https://picsum.photos/536/354?random=${index}`,
        large: Math.random() > 0.7
      }));
      setImages(images);
    };

    fetchImages();
  }, []);

  return (
    <div>
      <Head>
        <title>Explore</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={styles.searchContainer}>
          <input className={styles.searchInput} type="text" placeholder="Search..." />
        </div>

        <div className={styles.imageGrid}>
          {images.map((image, index) => (
            <img 
              key={index} 
              src={image.url} 
              className={`${styles.image} ${image.large ? styles.large : ''}`}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default Explore;
