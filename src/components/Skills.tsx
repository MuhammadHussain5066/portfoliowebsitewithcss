import React from 'react';
import styles from './skills.module.css';

const Skills = () => {
  return (
    <div id="skills" className={styles['skills-section']}>
      <div className="container mx-auto px-4">
        <h2 className={styles['skills-title']}>My Skills</h2>
        
        <div className={styles['skills-list']}>
          <div className={styles['skill-item']}>TypeScript</div>
          <div className={styles['skill-item']}>ReactJS</div>
          <div className={styles['skill-item']}>Next.js</div>
          <div className={styles['skill-item']}>HTML</div>
          <div className={styles['skill-item']}>CSS</div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
