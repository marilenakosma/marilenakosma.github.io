// maps to root `/` URL
 
import styles from './variables.module.scss'
 
export default function Page() {
  return (
    <header className={styles.header}>
      <h1 style={{ color: styles.primaryColor }}>Hello, Next.js!</h1>
    </header>
  );
}

