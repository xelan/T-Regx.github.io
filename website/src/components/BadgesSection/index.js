import React from 'react';
import badges from '@site/src/data/badges.js';
import styles from './styles.module.css';

const Badge = props => (
  <a href={props.href} title={props.title}>
    <img src={props.src} alt={props.title} className={styles.badge} />
  </a>
);

export const BadgesSection = () => {
  const { upper: upperBadges, lower: lowerBadges } = badges;

  return (
    <div className={styles.badgesSection}>
      <div className={styles.upperBadges}>
        {upperBadges.map((badge, index) => (
          <Badge key={index} {...badge} />
        ))}
      </div>
      <div className={styles.lowerBadges}>
        {lowerBadges.map((badge, index) => (
          <Badge key={index} {...badge} />
        ))}
      </div>
    </div>
  );
};
