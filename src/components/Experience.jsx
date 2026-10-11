import styles from './Experience.module.css';

function Experience({ experience }) {
  return (
    <div className={styles.list}>
      {experience.map((item, index) => (
        <div key={index} className={styles.item}>
          <div className={styles.dot} />
          <div className={styles.body}>
            <div className={styles.topRow}>
              <span className={styles.position}>{item.position}</span>
              <span className={styles.years}>{item.years}</span>
            </div>
            <div className={styles.company}>{item.company}</div>
            <ul className={styles.duties}>
              {item.duties.map((duty, i) => (
                <li key={i}>{duty}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Experience;

