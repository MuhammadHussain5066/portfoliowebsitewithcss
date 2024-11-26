import React from 'react';
import styles from './about.module.css';

const About = () => {
  return (
    <section id="about" className={styles['about-section']}>
      <div className="container mx-auto px-4">
        <h2 className={styles['about-title']}>About Me</h2>
        <div className={styles['about-text']}>
          <p>
            Hello! I am Hussain, a passionate web developer with over 5 years of experience in building modern, responsive, and user friendly websites.
          </p>
          <p>
            My expertise lies in technologies like React, Next.js, TypeScript, and Tailwind CSS. I enjoy creating seamless user experiences and writing
            clean, efficient code. Whether it is a personal project or a collaborative effort, I strive to deliver quality results that exceed expectations.
          </p>
          <p>
            When I am not coding, you can find me exploring new technologies, learning new skills, or indulging in my hobbies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
