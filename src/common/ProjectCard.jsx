import React from 'react';
import styles from './styling/ProjectCard.module.css';

function ProjectCard({ src, link, h3, p, hasAnimation, contributions = '' }) {
  return (
    <a href={link} target="_blank" className={styles.card}>
      <div className={styles.cardInner}>
        {/* Front side of the card */}
        <div className={styles.cardFront}>
          {hasAnimation ? (
            <div className={styles.animatedTitle}>
              <h1>{h3}</h1>
            </div>
          ) : (
            <img className={styles.cardImage} src={src} alt={`${h3} logo`} />
          )}
        </div>

        {/* Back side of the card */}
        <div className={styles.cardBack}>
          <p>
            {contributions.split('\n').map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </p>
        </div>
      </div>

      {/* Text that shouldn't trigger the flip */}
      <div className={styles.cardText}>
        <h3>{h3}</h3>
        <p>{p}</p>
      </div>
    </a>
  );
}

export default ProjectCard;
