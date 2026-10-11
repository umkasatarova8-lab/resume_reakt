import styles from './Education.module.css';

function Education({ education }) {
  return (
    <div className={styles.list}>
      {education.map((item, index) => (
        <div key={index} className={styles.item}>
          <div className={styles.years}>{item.years}</div>
          <div className={styles.details}>
            <div className={styles.institution}>{item.institution}</div>
            <div className={styles.faculty}>{item.faculty}</div>
            <div className={styles.degree}>{item.degree}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Education;

