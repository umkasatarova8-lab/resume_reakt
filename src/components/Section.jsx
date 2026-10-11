import styles from './Section.module.css';

function Section({ title, icon, children }) {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>
        <span className={styles.icon}>{icon}</span>
        {title}
      </h2>
      <div className={styles.content}>{children}</div>
    </section>
  );
}

export default Section;

