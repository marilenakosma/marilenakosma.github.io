// maps to root `/` URL
 
import styles from '../styles/variables.module.scss';
 
export default function Page() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
      <h1 className={styles.title}>Hello,I'm</h1>
      <p className={styles.subtitle}> Marilena</p>
      </header>
      </div>
  );
}

