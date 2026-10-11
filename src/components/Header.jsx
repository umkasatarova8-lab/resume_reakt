import styles from './Header.module.css';

function Header({ name, title, avatar, contacts }) {
  return (
    <header className={styles.header}>
      <div className={styles.avatarWrapper}>
        {avatar ? (
          <img src={avatar} alt={name} className={styles.avatar} />
        ) : (
          <div className={styles.avatarPlaceholder}>
            {name.charAt(0)}
          </div>
        )}
      </div>
      <div className={styles.info}>
        <h1 className={styles.name}>{name}</h1>
        <p className={styles.title}>{title}</p>
        <div className={styles.contacts}>
          <span>{contacts.city}</span>
          <span>{contacts.phone}</span>
          <span>{contacts.email}</span>
          <span>{contacts.telegram}</span>
          <span>{contacts.github}</span>
        </div>
      </div>
    </header>
  );
}

export default Header;

