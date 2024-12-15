// maps to root `/` URL
import Image from 'next/image'
import localFont from 'next/font/local'
import styles from '../components/variables.module.scss';

const myFont = localFont({ src: './FreePixel.ttf'})

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
      <div className={styles.icons}> </div>
      <main className={styles.body}>
        <h1 className={styles.inner}></h1>
          <h2 className={styles.buttons}></h2>
           <h3 className={styles.dpad}></h3>
      </main>
      </div>
  );
}

