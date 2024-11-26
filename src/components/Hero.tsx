import React from 'react';
import Navbar from './Navbar';
import Image from 'next/image';
import styles from './hero.module.css';

const Hero = () => {
  return (
    <div id="Hero" className={styles['hero-container']}>
      <Navbar />
      <div className={styles['hero-content']}>
        <div className={styles['hero-image']}>
          <Image
            src="/banner.jpeg"
            alt="Hero Image"
            layout="fill"
            objectFit="cover"
            className={styles['hero-image']}
          />
        </div>
        <div className={styles['hero-title']}>
          <p>I am</p>
          <p>Hussain</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
