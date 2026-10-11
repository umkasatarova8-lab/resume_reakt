import styles from './Projects.module.css';

function Projects({ projects }) {
  return (
    <div className={styles.grid}>
      {projects.map((project, index) => (
        <div key={index} className={styles.card}>
          <div className={styles.cardName}>{project.name}</div>
          <p className={styles.cardDesc}>{project.description}</p>
          <div className={styles.techList}>
            {project.tech.map((t) => (
              <span key={t} className={styles.techTag}>{t}</span>
            ))}
          </div>
          {project.link && (
            <a
              href={`https://${project.link}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              {project.link}
            </a>
          )}
        </div>
      ))}
    </div>
  );
}

export default Projects;

