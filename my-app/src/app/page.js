// maps to root `/` URL
import Image from 'next/image'
import localFont from 'next/font/local'
import styles from '../styles/variables.module.scss';

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
      <Image
        src="/Image/CV.png"
        width={60}
        height={70}
        alt="CV picture"
        priority //
      />
      <main className={styles.body}>
       <h1 className={styles.title}>Hello,I'm</h1>
      <p className={styles.subtitle}> Marilena</p>
      <Image
        src="/Image/computer.jpg"
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

