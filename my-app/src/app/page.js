// maps to root `/` URL
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/variables.module.scss';
 
export default function Page() {
  return (

    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.windowheader}>
      <div className={styles.close}> </div>
      <div className={styles.minimize}> </div>
      <div className={styles.maximize}> </div>
      </div>
      <h1 className={styles.title}>Home</h1>
      </header>
      <main className={styles.body}>
      <h1 className={styles.title}>Hello,I'm</h1>
      <p className={styles.subtitle}> Marilena</p>
      <Image
        src="/Image/stock-photo.jpg"
        width={230}
        height={207}
        className={styles.Img}
        alt="Profile picture"
        priority //
      />
      </main>
      </div>
  );
}

