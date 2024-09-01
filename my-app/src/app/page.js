// maps to root `/` URL
import Image from 'next/image'
import styles from '../styles/variables.module.scss';
 
export default function Page() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
      <h1 className={styles.title}>Hello,I'm</h1>
      <p className={styles.subtitle}> Marilena</p>
      <div className={styles.logosfull}>
        <Image src="/Logos/HTML.png" alt="HTML Logo"
        width={90}
        height={50}
        className={styles.logo} />
         <Image src="/Logos/Css.png" alt="Css Logo"
        width={49}
        height={50}
        className={styles.logo} />
         <Image src="/Logos/Sass.svg" alt="Sass Logo"
        width={60}
        height={50}
        className={styles.small} />
         <Image src="/Logos/Nextjs.png" alt="Nextjs Logo"
        width={60}
        height={50}
        className={styles.small} />
      </div>
      </header>
      <main>
      <Image
        src="/Image/stock-photo.jpg"
        width={230}
        height={207}
        className={styles.Img}
      />
      </main>
      </div>
  );
}

