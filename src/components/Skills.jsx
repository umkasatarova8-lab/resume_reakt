import styles from './Skills.module.css';

function Skills({ hard, soft }) {
  return (
    <div>
      <p className={styles.label}>Hard Skills</p>
      <ul className={styles.tagList}>
        {hard.map((skill) => (
          <li key={skill} className={styles.tag}>
            {skill}
          </li>
        ))}
      </ul>

      <p className={styles.label} style={{ marginTop: '16px' }}>Soft Skills</p>
      <ul className={styles.tagList}>
        {soft.map((skill) => (
          <li key={skill} className={`${styles.tag} ${styles.tagSoft}`}>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;

