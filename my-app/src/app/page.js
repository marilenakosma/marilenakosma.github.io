// maps to root `/` URL
import Image from 'next/image'
import styles from '../styles/variables.module.scss';
 
export default function Page() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
      <h1 className={styles.title}>Hello,I'm</h1>
      <p className={styles.subtitle}> Marilena</p>
      </header>
      <main>
      <Image
        src="/Image/stock-photo.jpg"
        width={230}
        height={207}
        alt="Picture of the authofr"
        className={styles.Img}
      />
      </main>
      </div>
  );
}

