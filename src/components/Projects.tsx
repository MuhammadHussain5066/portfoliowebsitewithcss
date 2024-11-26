import React from 'react';
import styles from './projects.module.css';

const Projects = () => {
  return (
    <section id="projects" className={styles['projects-section']}>
      <h2 className={styles['projects-title']}>My Projects</h2>
      <div className={styles['projects-container']}>
        
        <div className={styles['project-card']}>
          <img
            src="/portfolioone.png"
            alt="Car Website"
            className={styles['project-image']}
          />
          <h3 className={styles['project-title']}>Car Website</h3>
          <p className={styles['project-description']}>
            Built using React, CSS, and Next.js
          </p>
        </div>
        
        <div className={styles['project-card']}>
          <img
            src="/portfoliotwo.png"
            alt="Restaurant Website"
            className={styles['project-image']}
          />
          <h3 className={styles['project-title']}>Restaurant Website</h3>
          <p className={styles['project-description']}>
            Built using Tailwind CSS, React, and Next.js
          </p>
        </div>
        
        <div className={styles['project-card']}>
          <img
            src="/portfolio.png"
            alt="Static Website"
            className={styles['project-image']}
          />
          <h3 className={styles['project-title']}>Static Website</h3>
          <p className={styles['project-description']}>
            Built using HTML, CSS, and TypeScript
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
